import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { data } from "react-router";
import { useFetcher, useLoaderData } from "react-router";
import { NewsModule } from "~/components/admin/NewsModule";
import { requireAdminUser } from "~/lib/session.server";
import { getCloudinaryConfig } from "~/lib/cloudinary.server";
import {
  createNews,
  deleteNews,
  getNews,
  updateNews,
  type NewsInput,
} from "~/lib/news.server";

function parseNewsPayload(form: FormData): { error: string; status: number } | NewsInput {
  const title = form.get("title");
  const author = form.get("author");
  const organization = form.get("organization");
  const position = form.get("position");
  const notes = form.get("notes");
  const location = form.get("location");
  const publishedAt = form.get("publishedAt");
  const summary = form.get("summary");
  const imagesRaw = form.get("images");

  if (typeof title !== "string" || !title.trim()) {
    return { error: "Title is required.", status: 400 };
  }

  let images: string[] = [];
  if (typeof imagesRaw === "string" && imagesRaw) {
    try {
      const parsed = data.parse(imagesRaw) as unknown;
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
    author: typeof author === "string" ? author.trim() : "",
    organization: typeof organization === "string" ? organization.trim() : "",
    position: typeof position === "string" ? position.trim() : "",
    notes: typeof notes === "string" ? notes.trim() : "",
    location: typeof location === "string" ? location.trim() : "",
    publishedAt: typeof publishedAt === "string" ? publishedAt.trim() : "",
    summary: typeof summary === "string" ? summary.trim() : "",
    images,
  };
}

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAdminUser(request);
  const [news, cloudinaryConfig] = await Promise.all([getNews(), getCloudinaryConfig()]);
  return data({ news, cloudinaryConfig });
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAdminUser(request);
  const form = await request.formData();
  const intent = form.get("intent");

  if (intent === "create-news") {
    const payload = parseNewsPayload(form);
    if ("error" in payload) {
      return data({ error: payload.error }, { status: payload.status });
    }

    try {
      await createNews(payload);
      return data({ ok: true, message: "News article saved successfully." });
    } catch (error) {
      console.error("Create news error:", error);
      return data({ error: "Failed to save news article." }, { status: 500 });
    }
  }

  if (intent === "update-news") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return data({ error: "Invalid news id." }, { status: 400 });
    }

    const payload = parseNewsPayload(form);
    if ("error" in payload) {
      return data({ error: payload.error }, { status: payload.status });
    }

    try {
      await updateNews(id, payload);
      return data({ ok: true, message: "News article updated successfully." });
    } catch (error) {
      console.error("Update news error:", error);
      return data({ error: "Failed to update news article." }, { status: 500 });
    }
  }

  if (intent === "delete-news") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return data({ error: "Invalid news id." }, { status: 400 });
    }

    try {
      await deleteNews(id);
      return data({ ok: true, message: "News article deleted successfully." });
    } catch (error) {
      console.error("Delete news error:", error);
      return data({ error: "Failed to delete news article." }, { status: 500 });
    }
  }

  return data({ error: "Invalid action." }, { status: 400 });
}

export const AdminNews = () => {
  const { news, cloudinaryConfig } = useLoaderData<typeof loader>();
  const fetcher = useFetcher<typeof action>();

  return (
    <section>
      <NewsModule
        news={news}
        fetcher={fetcher}
        cloudinaryConfig={cloudinaryConfig}
      />
    </section>
  );
};

export default AdminNews;
