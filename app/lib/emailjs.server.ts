export type EmailJsConfig = {
  serviceId: string;
  templateId: string;
  autoreplyId: string;
  publicKey: string;
};

export function getEmailJsConfig(): EmailJsConfig | null {
  const serviceId = process.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID;
  const autoreplyId = process.env.VITE_EMAILJS_AUTOREPLY_ID;
  const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !autoreplyId || !publicKey) {
    return null;
  }

  return {
    serviceId,
    templateId,
    autoreplyId,
    publicKey,
  };
}
