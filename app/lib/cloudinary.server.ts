export type CloudinaryConfig = {
  cloudName: string;
  uploadPreset: string;
};

export function getCloudinaryConfig(): CloudinaryConfig | null {
  const cloudName = process.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    return null;
  }

  return { cloudName, uploadPreset };
}
