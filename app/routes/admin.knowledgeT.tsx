import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { data } from "react-router";
import { useLoaderData, useFetcher } from "react-router";
import { useState } from "react";
import { LucideCaptions, LucideWheat } from "lucide-react";
import { LavStationModule } from "~/components/admin/LavStationModule";
import { RiceDerbiesModule } from "~/components/admin/RiceDerbiesModule";
import {
  createLavStation,
  deleteLavStation,
  getLavStations,
  parseStringListFromJson,
  setLavStationActive,
  updateLavStation,
} from "~/lib/lav-stations.server";
import {
  createRiceDerbies,
  deleteRiceDerbies,
  getRiceDerbies,
  setRiceDerbiesActive,
  updateRiceDerbies,
} from "~/lib/rice-derbies.server";
import { getCloudinaryConfig } from "~/lib/cloudinary.server";
import { requireAdminUser } from "~/lib/session.server";

type KnowledgePayload = {
  title: string;
  descriptions: string[];
  youtubeLinks: string[];
  images: string[];
};

function parseKnowledgePayload(form: FormData):
  | { error: string; status: number }
  | KnowledgePayload {
  const title = form.get("title");
  const descriptionsRaw = form.get("descriptions");
  const youtubeLinksRaw = form.get("youtubeLinks");
  const imagesRaw = form.get("images");

  if (typeof title !== "string" || !title.trim()) {
    return { error: "Title is required.", status: 400 };
  }

  let descriptions: string[] = [];
  let youtubeLinks: string[] = [];

  try {
    descriptions = parseStringListFromJson(descriptionsRaw);
    youtubeLinks = parseStringListFromJson(youtubeLinksRaw);
  } catch {
    return { error: "Invalid description or YouTube link data.", status: 400 };
  }

  if (descriptions.length === 0) {
    return { error: "At least one description is required.", status: 400 };
  }

  let images: string[] = [];
  if (typeof imagesRaw === "string" && imagesRaw) {
    try {
      const parsed = JSON.parse(imagesRaw) as unknown;
      if (!Array.isArray(parsed) || !parsed.every((item) => typeof item === "string")) {
        return { error: "Invalid image data.", status: 400 };
      }
      images = parsed;
    } catch {
      return { error: "Invalid image data.", status: 400 };
    }
  }

  if (images.length > 20) {
    return { error: "Maximum 20 images allowed.", status: 400 };
  }

  return {
    title: title.trim(),
    descriptions,
    youtubeLinks,
    images,
  };
}

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAdminUser(request);
  const lavStations = await getLavStations();
  const riceDerbies = await getRiceDerbies();
  const cloudinary = getCloudinaryConfig();

  return data({ lavStations, riceDerbies, cloudinary });
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAdminUser(request);
  const form = await request.formData();
  const intent = form.get("intent");

  // Lav Station actions
  if (intent === "create-lav-station") {
    const payload = parseKnowledgePayload(form);
    if ("error" in payload) {
      return data({ error: payload.error }, { status: payload.status });
    }

    try {
      await createLavStation(payload);
      return data({ ok: true, message: "Lav station saved successfully." });
    } catch (error) {
      console.error("Create lav station error:", error);
      return data({ error: "Failed to save lav station." }, { status: 500 });
    }
  }

  if (intent === "update-lav-station") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return data({ error: "Invalid station id." }, { status: 400 });
    }

    const payload = parseKnowledgePayload(form);
    if ("error" in payload) {
      return data({ error: payload.error }, { status: payload.status });
    }

    try {
      await updateLavStation(id, payload);
      return data({ ok: true, message: "Lav station updated successfully." });
    } catch (error) {
      console.error("Update lav station error:", error);
      return data({ error: "Failed to update lav station." }, { status: 500 });
    }
  }

  if (intent === "delete-lav-station") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return data({ error: "Invalid station id." }, { status: 400 });
    }

    try {
      await deleteLavStation(id);
      return data({ ok: true, message: "Lav station deleted successfully." });
    } catch (error) {
      console.error("Delete lav station error:", error);
      return data({ error: "Failed to delete lav station." }, { status: 500 });
    }
  }

  if (intent === "toggle-lav-station-active") {
    const id = form.get("id");
    const activeRaw = form.get("active");

    if (typeof id !== "string" || !id) {
      return data({ error: "Invalid station id." }, { status: 400 });
    }

    if (activeRaw !== "true" && activeRaw !== "false") {
      return data({ error: "Invalid active state." }, { status: 400 });
    }

    const active = activeRaw === "true";

    try {
      await setLavStationActive(id, active);
      return data({
        ok: true,
        message: active ? "Lav station is now On." : "Lav station is now Off.",
      });
    } catch (error) {
      console.error("Toggle lav station active error:", error);
      return data({ error: "Failed to update active state." }, { status: 500 });
    }
  }

  // Rice Derbies actions
  if (intent === "create-rice-derbies") {
    const payload = parseKnowledgePayload(form);
    if ("error" in payload) {
      return data({ error: payload.error }, { status: payload.status });
    }

    try {
      await createRiceDerbies(payload);
      return data({ ok: true, message: "Rice derbies saved successfully." });
    } catch (error) {
      console.error("Create rice derbies error:", error);
      return data({ error: "Failed to save rice derbies." }, { status: 500 });
    }
  }

  if (intent === "update-rice-derbies") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return data({ error: "Invalid rice derbies id." }, { status: 400 });
    }

    const payload = parseKnowledgePayload(form);
    if ("error" in payload) {
      return data({ error: payload.error }, { status: payload.status });
    }

    try {
      await updateRiceDerbies(id, payload);
      return data({ ok: true, message: "Rice derbies updated successfully." });
    } catch (error) {
      console.error("Update rice derbies error:", error);
      return data({ error: "Failed to update rice derbies." }, { status: 500 });
    }
  }

  if (intent === "delete-rice-derbies") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return data({ error: "Invalid rice derbies id." }, { status: 400 });
    }

    try {
      await deleteRiceDerbies(id);
      return data({ ok: true, message: "Rice derbies deleted successfully." });
    } catch (error) {
      console.error("Delete rice derbies error:", error);
      return data({ error: "Failed to delete rice derbies." }, { status: 500 });
    }
  }

  if (intent === "toggle-rice-derbies-active") {
    const id = form.get("id");
    const activeRaw = form.get("active");

    if (typeof id !== "string" || !id) {
      return data({ error: "Invalid rice derbies id." }, { status: 400 });
    }

    if (activeRaw !== "true" && activeRaw !== "false") {
      return data({ error: "Invalid active state." }, { status: 400 });
    }

    const active = activeRaw === "true";

    try {
      await setRiceDerbiesActive(id, active);
      return data({
        ok: true,
        message: active ? "Rice derbies is now On." : "Rice derbies is now Off.",
      });
    } catch (error) {
      console.error("Toggle rice derbies active error:", error);
      return data({ error: "Failed to update active state." }, { status: 500 });
    }
  }

  return data({ error: "Invalid action." }, { status: 400 });
}

const KnowledgeTransferAdmin = () => {
  const { lavStations, riceDerbies, cloudinary } = useLoaderData<typeof loader>();
  const fetcher = useFetcher<typeof action>();
  const [activeSection, setActiveSection] = useState<"lav-station" | "rice-derbies">(
    "lav-station"
  );

  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
      <div className="flex gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setActiveSection("lav-station")}
          className={`flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${
            activeSection === "lav-station"
              ? "bg-emerald-500 text-white hover:bg-emerald-400"
              : "bg-slate-200 text-slate-900 hover:bg-slate-300"
          }`}
        >
          <LucideCaptions className="mr-2 inline-block" />
          LAV STATION
        </button>
        <button
          type="button"
          onClick={() => setActiveSection("rice-derbies")}
          className={`flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${
            activeSection === "rice-derbies"
              ? "bg-emerald-500 text-white hover:bg-emerald-400"
              : "bg-slate-200 text-slate-900 hover:bg-slate-300"
          }`}
        >
          <LucideWheat className="mr-2 inline-block" />
          Rice Derbies
        </button>
      </div>

      {activeSection === "lav-station" ? (
        <LavStationModule
          stations={lavStations}
          fetcher={fetcher}
          cloudinary={cloudinary}
        />
      ) : (
        <RiceDerbiesModule
          derbies={riceDerbies}
          fetcher={fetcher}
          cloudinaryConfig={cloudinary}
        />
      )}
    </section>
  );
};

export default KnowledgeTransferAdmin;
