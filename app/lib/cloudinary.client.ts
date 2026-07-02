import type { CloudinaryConfig } from "~/lib/cloudinary.server";

export async function uploadImagesToCloudinary(
  files: File[],
  config: CloudinaryConfig
): Promise<string[]> {
  const { cloudName, uploadPreset } = config;

  if (!cloudName || !uploadPreset) {
    throw new Error(
      "Cloudinary configuration is missing. Set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET in your .env file."
    );
  }

  const uploads = files.map(async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      { method: "POST", body: formData }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Cloudinary upload failed: ${errorBody}`);
    }

    const result = (await response.json()) as { secure_url?: string };
    if (!result.secure_url) {
      throw new Error("Cloudinary did not return a secure_url.");
    }

    return result.secure_url;
  });

  return Promise.all(uploads);
}
