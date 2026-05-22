import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { useState } from "react";
import { LucideCaptions, LucideWheat } from "lucide-react";
import { LavStationModule } from "~/components/admin/LavStationModule";
import { RiceDerbiesModule } from "~/components/admin/RiceDerbiesModule";
import {
  createLavStation,
  deleteLavStation,
  getLavStations,
} from "~/lib/lav-stations.server";
import { getCloudinaryConfig } from "~/lib/cloudinary.server";
import { requireAdminUser } from "~/lib/session.server";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAdminUser(request);
  const lavStations = await getLavStations();
  const cloudinary = getCloudinaryConfig();

  return json({ lavStations, cloudinary });
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAdminUser(request);
  const form = await request.formData();
  const intent = form.get("intent");

  if (intent === "create-lav-station") {
    const title = form.get("title");
    const description = form.get("description");
    const youtubeLink = form.get("youtubeLink");
    const imagesRaw = form.get("images");

    if (typeof title !== "string" || !title.trim()) {
      return json({ error: "Kailangan ang title." }, { status: 400 });
    }

    if (typeof description !== "string" || !description.trim()) {
      return json({ error: "Kailangan ang description." }, { status: 400 });
    }

    let images: string[] = [];
    if (typeof imagesRaw === "string" && imagesRaw) {
      try {
        const parsed = JSON.parse(imagesRaw) as unknown;
        if (!Array.isArray(parsed) || !parsed.every((item) => typeof item === "string")) {
          return json({ error: "Hindi valid ang image data." }, { status: 400 });
        }
        images = parsed;
      } catch {
        return json({ error: "Hindi valid ang image data." }, { status: 400 });
      }
    }

    if (images.length > 10) {
      return json({ error: "Maximum 10 images lang ang pwede." }, { status: 400 });
    }

    try {
      await createLavStation({
        title: title.trim(),
        description: description.trim(),
        images,
        youtubeLink: typeof youtubeLink === "string" ? youtubeLink.trim() : "",
      });
      return json({ ok: true, message: "Lav station saved successfully." });
    } catch (error) {
      console.error("Create lav station error:", error);
      return json({ error: "Hindi ma-save ang lav station." }, { status: 500 });
    }
  }

  if (intent === "delete-lav-station") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return json({ error: "Invalid station id." }, { status: 400 });
    }

    try {
      await deleteLavStation(id);
      return json({ ok: true, message: "Lav station deleted successfully." });
    } catch (error) {
      console.error("Delete lav station error:", error);
      return json({ error: "Hindi ma-delete ang lav station." }, { status: 500 });
    }
  }

  return json({ error: "Invalid action." }, { status: 400 });
}

const KnowledgeTransferAdmin = () => {
  const { lavStations, cloudinary } = useLoaderData<typeof loader>();
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
        <RiceDerbiesModule />
      )}
    </section>
  );
};

export default KnowledgeTransferAdmin;
