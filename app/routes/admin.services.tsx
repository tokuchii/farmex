import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { LucideTractor, LucideUserCog, LucideCalendar } from "lucide-react";
import { MachineRentalsModule, TechnicalConsultantModule, TrainingModule } from "~/components/admin";
import { getCloudinaryConfig } from "~/lib/cloudinary.server";
import { requireAdminUser } from "~/lib/session.server";
import {
  createMachineRental,
  createMachineRentalGallery,
  createTechnicalConsultant,
  createTrainingGallery,
  createTrainingHero,
  createTrainingSession,
  deleteMachineRental,
  deleteMachineRentalGallery,
  deleteTechnicalConsultant,
  deleteTrainingGallery,
  deleteTrainingHero,
  deleteTrainingSession,
  getMachineRentalGalleries,
  getMachineRentals,
  getTechnicalConsultants,
  getTrainingGalleries,
  getTrainingHeroes,
  getTrainingSessions,
  updateMachineRental,
  updateMachineRentalGallery,
  updateTechnicalConsultant,
  updateTrainingGallery,
  updateTrainingHero,
  updateTrainingSession,
} from "~/lib/trainings.server";

function parseTrainingSessionPayload(form: FormData) {
  const title = form.get("title");
  const startDate = form.get("startDate");
  const endDate = form.get("endDate");
  const time = form.get("time");
  const location = form.get("location");

  if (typeof title !== "string" || !title.trim()) {
    return { error: "Session title is required.", status: 400 } as const;
  }

  return {
    title: title.trim(),
    startDate: typeof startDate === "string" ? startDate.trim() : "",
    endDate: typeof endDate === "string" ? endDate.trim() : "",
    time: typeof time === "string" ? time.trim() : "",
    location: typeof location === "string" ? location.trim() : "",
  };
}

function parseTrainingHeroPayload(form: FormData) {
  const title = form.get("title");
  const descriptionsRaw = form.get("descriptions");

  if (typeof title !== "string" || !title.trim()) {
    return { error: "Title is required.", status: 400 } as const;
  }

  let descriptions: string[] = [];
  if (typeof descriptionsRaw === "string" && descriptionsRaw) {
    try {
      const parsed = JSON.parse(descriptionsRaw) as unknown;
      if (!Array.isArray(parsed) || !parsed.every((item) => typeof item === "string")) {
        return { error: "Invalid descriptions data.", status: 400 } as const;
      }
      descriptions = parsed.map((item) => item.trim()).filter(Boolean);
    } catch {
      return { error: "Invalid descriptions data.", status: 400 } as const;
    }
  }

  if (descriptions.length === 0) {
    return { error: "At least one description is required.", status: 400 } as const;
  }

  return {
    title: title.trim(),
    descriptions,
  };
}

function parseTrainingGalleryPayload(form: FormData) {
  const collectionName = form.get("collectionName");
  const imagesRaw = form.get("images");

  if (typeof collectionName !== "string" || !collectionName.trim()) {
    return { error: "Collection name is required.", status: 400 } as const;
  }

  let images: string[] = [];
  if (typeof imagesRaw === "string" && imagesRaw) {
    try {
      const parsed = JSON.parse(imagesRaw) as unknown;
      if (!Array.isArray(parsed) || !parsed.every((item) => typeof item === "string")) {
        return { error: "Invalid image data.", status: 400 } as const;
      }
      images = parsed;
    } catch {
      return { error: "Invalid image data.", status: 400 } as const;
    }
  }

  if (images.length === 0) {
    return { error: "At least one image is required.", status: 400 } as const;
  }

  if (images.length > 1) {
    return { error: "Only 1 image is allowed.", status: 400 } as const;
  }

  return {
    collectionName: collectionName.trim(),
    images,
  };
}

function parseTechnicalConsultantPayload(form: FormData) {
  const title = form.get("title");
  const description = form.get("description");
  const imagesRaw = form.get("images");

  if (typeof title !== "string" || !title.trim()) {
    return { error: "Title is required.", status: 400 } as const;
  }

  if (typeof description !== "string" || !description.trim()) {
    return { error: "Description is required.", status: 400 } as const;
  }

  let images: string[] = [];
  if (typeof imagesRaw === "string" && imagesRaw) {
    try {
      const parsed = JSON.parse(imagesRaw) as unknown;
      if (!Array.isArray(parsed) || !parsed.every((item) => typeof item === "string")) {
        return { error: "Invalid image data.", status: 400 } as const;
      }
      images = parsed;
    } catch {
      return { error: "Invalid image data.", status: 400 } as const;
    }
  }

  if (images.length > 20) {
    return { error: "Maximum 20 images allowed.", status: 400 } as const;
  }

  return {
    title: title.trim(),
    description: description.trim(),
    images,
  };
}

function parseMachineRentalPayload(form: FormData) {
  const title = form.get("title");
  const descriptionsRaw = form.get("descriptions");

  if (typeof title !== "string" || !title.trim()) {
    return { error: "Title is required.", status: 400 } as const;
  }

  let descriptions: string[] = [];
  if (typeof descriptionsRaw === "string" && descriptionsRaw) {
    try {
      const parsed = JSON.parse(descriptionsRaw) as unknown;
      if (!Array.isArray(parsed) || !parsed.every((item) => typeof item === "string")) {
        return { error: "Invalid descriptions data.", status: 400 } as const;
      }
      descriptions = parsed.map((item) => item.trim()).filter(Boolean);
    } catch {
      return { error: "Invalid descriptions data.", status: 400 } as const;
    }
  }

  if (descriptions.length === 0) {
    return { error: "At least one description is required.", status: 400 } as const;
  }

  return {
    title: title.trim(),
    descriptions,
  };
}

function parseMachineRentalGalleryPayload(form: FormData) {
  const collectionName = form.get("collectionName");
  const imagesRaw = form.get("images");

  if (typeof collectionName !== "string" || !collectionName.trim()) {
    return { error: "Collection name is required.", status: 400 } as const;
  }

  let images: string[] = [];
  if (typeof imagesRaw === "string" && imagesRaw) {
    try {
      const parsed = JSON.parse(imagesRaw) as unknown;
      if (!Array.isArray(parsed) || !parsed.every((item) => typeof item === "string")) {
        return { error: "Invalid image data.", status: 400 } as const;
      }
      images = parsed;
    } catch {
      return { error: "Invalid image data.", status: 400 } as const;
    }
  }

  if (images.length === 0) {
    return { error: "At least one image is required.", status: 400 } as const;
  }

  if (images.length > 20) {
    return { error: "Maximum 20 images allowed.", status: 400 } as const;
  }

  return {
    collectionName: collectionName.trim(),
    images,
  };
}

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAdminUser(request);

  const [
    machineRentals,
    machineRentalGalleries,
    trainingSessions,
    trainingGalleries,
    trainingHeroes,
    technicalConsultants,
    cloudinaryConfig,
  ] = await Promise.all([
    getMachineRentals(),
    getMachineRentalGalleries(),
    getTrainingSessions(),
    getTrainingGalleries(),
    getTrainingHeroes(),
    getTechnicalConsultants(),
    getCloudinaryConfig(),
  ]);

  return json({
    machineRentals,
    machineRentalGalleries,
    trainingSessions,
    trainingGalleries,
    trainingHeroes,
    technicalConsultants,
    cloudinaryConfig,
  });
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAdminUser(request);
  const form = await request.formData();
  const intent = form.get("intent");

  if (intent === "create-machine-rental") {
    const payload = parseMachineRentalPayload(form);
    if ("error" in payload) {
      return json({ error: payload.error }, { status: payload.status });
    }

    try {
      await createMachineRental(payload);
      return json({ ok: true, message: "Machine rental saved successfully." });
    } catch (error) {
      console.error("Create machine rental error:", error);
      return json({ error: "Failed to save machine rental." }, { status: 500 });
    }
  }

  if (intent === "update-machine-rental") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return json({ error: "Invalid machine rental id." }, { status: 400 });
    }

    const payload = parseMachineRentalPayload(form);
    if ("error" in payload) {
      return json({ error: payload.error }, { status: payload.status });
    }

    try {
      await updateMachineRental(id, payload);
      return json({ ok: true, message: "Machine rental updated successfully." });
    } catch (error) {
      console.error("Update machine rental error:", error);
      return json({ error: "Failed to update machine rental." }, { status: 500 });
    }
  }

  if (intent === "delete-machine-rental") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return json({ error: "Invalid machine rental id." }, { status: 400 });
    }

    try {
      await deleteMachineRental(id);
      return json({ ok: true, message: "Machine rental deleted successfully." });
    } catch (error) {
      console.error("Delete machine rental error:", error);
      return json({ error: "Failed to delete machine rental." }, { status: 500 });
    }
  }

  if (intent === "create-machine-rental-gallery") {
    const payload = parseMachineRentalGalleryPayload(form);
    if ("error" in payload) {
      return json({ error: payload.error }, { status: payload.status });
    }

    try {
      await createMachineRentalGallery(payload);
      return json({ ok: true, message: "Machine rental gallery saved successfully." });
    } catch (error) {
      console.error("Create machine rental gallery error:", error);
      return json({ error: "Failed to save machine rental gallery." }, { status: 500 });
    }
  }

  if (intent === "update-machine-rental-gallery") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return json({ error: "Invalid machine rental gallery id." }, { status: 400 });
    }

    const payload = parseMachineRentalGalleryPayload(form);
    if ("error" in payload) {
      return json({ error: payload.error }, { status: payload.status });
    }

    try {
      await updateMachineRentalGallery(id, payload);
      return json({ ok: true, message: "Machine rental gallery updated successfully." });
    } catch (error) {
      console.error("Update machine rental gallery error:", error);
      return json({ error: "Failed to update machine rental gallery." }, { status: 500 });
    }
  }

  if (intent === "delete-machine-rental-gallery") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return json({ error: "Invalid machine rental gallery id." }, { status: 400 });
    }

    try {
      await deleteMachineRentalGallery(id);
      return json({ ok: true, message: "Machine rental gallery deleted successfully." });
    } catch (error) {
      console.error("Delete machine rental gallery error:", error);
      return json({ error: "Failed to delete machine rental gallery." }, { status: 500 });
    }
  }

  if (intent === "create-training-session") {
    const payload = parseTrainingSessionPayload(form);
    if ("error" in payload) {
      return json({ error: payload.error }, { status: payload.status });
    }

    try {
      await createTrainingSession(payload);
      return json({ ok: true, message: "Training session saved successfully." });
    } catch (error) {
      console.error("Create training session error:", error);
      return json({ error: "Failed to save training session." }, { status: 500 });
    }
  }

  if (intent === "update-training-session") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return json({ error: "Invalid training session id." }, { status: 400 });
    }

    const payload = parseTrainingSessionPayload(form);
    if ("error" in payload) {
      return json({ error: payload.error }, { status: payload.status });
    }

    try {
      await updateTrainingSession(id, payload);
      return json({ ok: true, message: "Training session updated successfully." });
    } catch (error) {
      console.error("Update training session error:", error);
      return json({ error: "Failed to update training session." }, { status: 500 });
    }
  }

  if (intent === "delete-training-session") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return json({ error: "Invalid training session id." }, { status: 400 });
    }

    try {
      await deleteTrainingSession(id);
      return json({ ok: true, message: "Training session deleted successfully." });
    } catch (error) {
      console.error("Delete training session error:", error);
      return json({ error: "Failed to delete training session." }, { status: 500 });
    }
  }

  if (intent === "create-training-hero") {
    const payload = parseTrainingHeroPayload(form);
    if ("error" in payload) {
      return json({ error: payload.error }, { status: payload.status });
    }

    try {
      await createTrainingHero(payload);
      return json({ ok: true, message: "Training hero saved successfully." });
    } catch (error) {
      console.error("Create training hero error:", error);
      return json({ error: "Failed to save training hero." }, { status: 500 });
    }
  }

  if (intent === "update-training-hero") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return json({ error: "Invalid training hero id." }, { status: 400 });
    }

    const payload = parseTrainingHeroPayload(form);
    if ("error" in payload) {
      return json({ error: payload.error }, { status: payload.status });
    }

    try {
      await updateTrainingHero(id, payload);
      return json({ ok: true, message: "Training hero updated successfully." });
    } catch (error) {
      console.error("Update training hero error:", error);
      return json({ error: "Failed to update training hero." }, { status: 500 });
    }
  }

  if (intent === "delete-training-hero") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return json({ error: "Invalid training hero id." }, { status: 400 });
    }

    try {
      await deleteTrainingHero(id);
      return json({ ok: true, message: "Training hero deleted successfully." });
    } catch (error) {
      console.error("Delete training hero error:", error);
      return json({ error: "Failed to delete training hero." }, { status: 500 });
    }
  }

  if (intent === "create-training-gallery") {
    const payload = parseTrainingGalleryPayload(form);
    if ("error" in payload) {
      return json({ error: payload.error }, { status: payload.status });
    }

    try {
      await createTrainingGallery(payload);
      return json({ ok: true, message: "Training gallery saved successfully." });
    } catch (error) {
      console.error("Create training gallery error:", error);
      return json({ error: "Failed to save training gallery." }, { status: 500 });
    }
  }

  if (intent === "update-training-gallery") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return json({ error: "Invalid training gallery id." }, { status: 400 });
    }

    const payload = parseTrainingGalleryPayload(form);
    if ("error" in payload) {
      return json({ error: payload.error }, { status: payload.status });
    }

    try {
      await updateTrainingGallery(id, payload);
      return json({ ok: true, message: "Training gallery updated successfully." });
    } catch (error) {
      console.error("Update training gallery error:", error);
      return json({ error: "Failed to update training gallery." }, { status: 500 });
    }
  }

  if (intent === "delete-training-gallery") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return json({ error: "Invalid training gallery id." }, { status: 400 });
    }

    try {
      await deleteTrainingGallery(id);
      return json({ ok: true, message: "Training gallery deleted successfully." });
    } catch (error) {
      console.error("Delete training gallery error:", error);
      return json({ error: "Failed to delete training gallery." }, { status: 500 });
    }
  }

  if (intent === "create-technical-consultant") {
    const payload = parseTechnicalConsultantPayload(form);
    if ("error" in payload) {
      return json({ error: payload.error }, { status: payload.status });
    }

    try {
      await createTechnicalConsultant(payload);
      return json({ ok: true, message: "Technical consultant saved successfully." });
    } catch (error) {
      console.error("Create technical consultant error:", error);
      return json({ error: "Failed to save technical consultant." }, { status: 500 });
    }
  }

  if (intent === "update-technical-consultant") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return json({ error: "Invalid technical consultant id." }, { status: 400 });
    }

    const payload = parseTechnicalConsultantPayload(form);
    if ("error" in payload) {
      return json({ error: payload.error }, { status: payload.status });
    }

    try {
      await updateTechnicalConsultant(id, payload);
      return json({ ok: true, message: "Technical consultant updated successfully." });
    } catch (error) {
      console.error("Update technical consultant error:", error);
      return json({ error: "Failed to update technical consultant." }, { status: 500 });
    }
  }

  if (intent === "delete-technical-consultant") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return json({ error: "Invalid technical consultant id." }, { status: 400 });
    }

    try {
      await deleteTechnicalConsultant(id);
      return json({ ok: true, message: "Technical consultant deleted successfully." });
    } catch (error) {
      console.error("Delete technical consultant error:", error);
      return json({ error: "Failed to delete technical consultant." }, { status: 500 });
    }
  }

  return json({ error: "Invalid action." }, { status: 400 });
}

const AdminServices = () => {
  const {
    machineRentals,
    machineRentalGalleries,
    trainingSessions,
    trainingGalleries,
    trainingHeroes,
    technicalConsultants,
    cloudinaryConfig,
  } = useLoaderData<typeof loader>();
  const fetcher = useFetcher<typeof action>();
  const [activeSection, setActiveSection] = useState<"rentals" | "consultation" | "training">("rentals");

  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setActiveSection("rentals")}
          className={`w-full sm:basis-0 sm:flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${
            activeSection === "rentals"
              ? "bg-emerald-500 text-white hover:bg-emerald-400"
              : "bg-slate-200 text-slate-900 hover:bg-slate-300"
          }`}
        >
          <LucideTractor className="mr-2 inline-block" />
          Machine Rentals
        </button>
        <button
          type="button"
          onClick={() => setActiveSection("consultation")}
          className={`w-full sm:basis-0 sm:flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${
            activeSection === "consultation"
              ? "bg-emerald-500 text-white hover:bg-emerald-400"
              : "bg-slate-200 text-slate-900 hover:bg-emerald-300"
          }`}
        >
          <LucideUserCog className="mr-2 inline-block" />
          Technical Consultant
        </button>
        <button
          type="button"
          onClick={() => setActiveSection("training")}
          className={`w-full sm:basis-0 sm:flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${
            activeSection === "training"
              ? "bg-emerald-500 text-white hover:bg-emerald-400"
              : "bg-slate-200 text-slate-900 hover:bg-slate-300"
          }`}
        >
          <LucideCalendar className="mr-2 inline-block" />
          Training
        </button>
      </div>

      {activeSection === "rentals" ? (
        <MachineRentalsModule
          rentals={machineRentals}
          galleries={machineRentalGalleries}
          fetcher={fetcher}
          cloudinaryConfig={cloudinaryConfig}
        />
      ) : activeSection === "consultation" ? (
        <TechnicalConsultantModule
          consultants={technicalConsultants}
          fetcher={fetcher}
          cloudinaryConfig={cloudinaryConfig}
        />
      ) : (
        <TrainingModule
          sessions={trainingSessions}
          galleries={trainingGalleries}
          heroes={trainingHeroes}
          fetcher={fetcher}
          cloudinaryConfig={cloudinaryConfig}
        />
      )}
    </section>
  );
};

export default AdminServices;
