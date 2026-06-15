import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { TestimonialsModule } from "~/components/admin/TestimonialsModule";
import { getCloudinaryConfig } from "~/lib/cloudinary.server";
import {
  createTestimonial,
  deleteTestimonial,
  getTestimonials,
  updateTestimonial,
  type TestimonialInput,
} from "~/lib/testimonials.server";
import { requireAdminUser } from "~/lib/session.server";

function parseTestimonialPayload(form: FormData): { error: string; status: number } | TestimonialInput {
  const name = form.get("name");
  const content = form.get("content");
  const date = form.get("date");
  const location = form.get("location");
  const position = form.get("position");
  const variety = form.get("variety");
  const image = form.get("image");

  if (typeof name !== "string" || !name.trim()) {
    return { error: "Customer name is required.", status: 400 };
  }

  if (typeof content !== "string" || !content.trim()) {
    return { error: "Testimonial content is required.", status: 400 };
  }

  return {
    name: name.trim(),
    content: content.trim(),
    date: typeof date === "string" ? date.trim() : "",
    location: typeof location === "string" ? location.trim() : "",
    position: typeof position === "string" ? position.trim() : "",
    variety: typeof variety === "string" ? variety.trim() : "",
    image: typeof image === "string" ? image.trim() : "",
  };
}

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAdminUser(request);
  const [testimonials, cloudinaryConfig] = await Promise.all([
    getTestimonials(),
    getCloudinaryConfig(),
  ]);
  return json({ testimonials, cloudinaryConfig });
}

export async function action({ request }: ActionFunctionArgs) {
  await requireAdminUser(request);
  const form = await request.formData();
  const intent = form.get("intent");

  if (intent === "create-testimonial") {
    const payload = parseTestimonialPayload(form);
    if ("error" in payload) {
      return json({ error: payload.error }, { status: payload.status });
    }

    try {
      await createTestimonial(payload);
      return json({ ok: true, message: "Testimonial saved successfully." });
    } catch (error) {
      console.error("Create testimonial error:", error);
      return json({ error: "Failed to save testimonial." }, { status: 500 });
    }
  }

  if (intent === "update-testimonial") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return json({ error: "Invalid testimonial id." }, { status: 400 });
    }

    const payload = parseTestimonialPayload(form);
    if ("error" in payload) {
      return json({ error: payload.error }, { status: payload.status });
    }

    try {
      await updateTestimonial(id, payload);
      return json({ ok: true, message: "Testimonial updated successfully." });
    } catch (error) {
      console.error("Update testimonial error:", error);
      return json({ error: "Failed to update testimonial." }, { status: 500 });
    }
  }

  if (intent === "delete-testimonial") {
    const id = form.get("id");
    if (typeof id !== "string" || !id) {
      return json({ error: "Invalid testimonial id." }, { status: 400 });
    }

    try {
      await deleteTestimonial(id);
      return json({ ok: true, message: "Testimonial deleted successfully." });
    } catch (error) {
      console.error("Delete testimonial error:", error);
      return json({ error: "Failed to delete testimonial." }, { status: 500 });
    }
  }

  return json({ error: "Invalid action." }, { status: 400 });
}

export const AdminTestimonials = () => {
  const { testimonials, cloudinaryConfig } = useLoaderData<typeof loader>();
  const fetcher = useFetcher<typeof action>();

  return (
    <section>
      <TestimonialsModule
        testimonials={testimonials}
        fetcher={fetcher}
        cloudinaryConfig={cloudinaryConfig}
      />
    </section>
  );
};

export default AdminTestimonials;
