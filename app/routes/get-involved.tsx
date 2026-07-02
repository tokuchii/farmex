import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { getEmailJsConfig } from "~/lib/emailjs.server";

export async function loader() {
  return json({ emailJs: getEmailJsConfig() });
}

export function meta() {
  return [{ title: "Get Involved" }];
}

export default function GetInvolved() {
  const { emailJs } = useLoaderData<typeof loader>();
  const [isClient, setIsClient] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  useEffect(() => {
    setIsClient(true);

    if (emailJs?.publicKey) {
      emailjs.init(emailJs.publicKey);
    }
  }, [emailJs?.publicKey]);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
  }, [modalOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "name") {
      newValue = newValue.replace(/[0-9]/g, "").replace(/\s+/g, " ");
      newValue = newValue
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    }

    if (name === "contact") {
      newValue = newValue.replace(/[^0-9]/g, "").slice(0, 11);
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    };

    if (!isValidEmail(formData.email)) {
      setModalMessage(
        "Please enter a valid email address (e.g., user@gmail.com)"
      );
      setIsSending(false);
      setModalOpen(true);
      return;
    }

    const cleanedContact = formData.contact.replace(/[^0-9]/g, "");
    const ticketNumber = `FMX-${Date.now().toString().slice(-6)}`;

    const templateParams: Record<string, string> = {
      title: "Get Involved Inquiry",
      name: formData.name,
      email: formData.email,
      contact: cleanedContact,
      message: formData.message,
      date: new Date().toLocaleString(),
      ticket_number: ticketNumber,
    };

    if (!emailJs) {
      setModalMessage(
        "Email service is not configured. Please set VITE_EMAILJS_* variables in your .env file."
      );
      setIsSending(false);
      setModalOpen(true);
      return;
    }

    try {
      await emailjs.send(
        emailJs.serviceId,
        emailJs.templateId,
        templateParams
      );

      await emailjs.send(
        emailJs.serviceId,
        emailJs.autoreplyId,
        templateParams
      );

      setModalMessage("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        contact: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error);
      setModalMessage("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
      setModalOpen(true);
    }
  };

  const copyNumber = async (number: string) => {
    try {
      await navigator.clipboard.writeText(number);
      setModalMessage(`${number} copied to clipboard`);
    } catch {
      setModalMessage("Failed to copy number");
    }

    setModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <motion.div
        className="relative w-full h-auto overflow-hidden"
        suppressHydrationWarning
      >
        {isClient ? (
          <motion.img
            src="/Jackpot102.jpg"
            alt="Farm Image"
            className="w-full h-64 sm:h-96 md:h-[600px] lg:h-[500px] object-cover object-top"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ) : (
          <img
            src="/Jackpot102.jpg"
            alt="Farm Image Placeholder"
            className="w-full h-64 sm:h-96 md:h-[600px] lg:h-[500px] object-cover object-top opacity-0"
          />
        )}

        <div className="absolute inset-0 bg-[#007F3D] bg-opacity-45" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <h2 className="text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 mt-16">
            FARMEX AT A GLANCE
          </h2>
        </div>
      </motion.div>

      {/* CONTACT SECTION */}
      <section className="w-full min-h-screen pt-8 pb-16 px-4 sm:px-8 bg-[url('/newbgmachinerental.png')] bg-cover bg-center flex flex-col items-center">
        <div className="w-full max-w-5xl space-y-12">
          {/* REDESIGNED FORM CARD */}
          <div className="rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            {/* LEFT PANEL */}
            <div className="relative bg-[#2e9e5b] p-8 md:p-10 flex flex-col justify-between md:w-2/5 overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute w-64 h-64 rounded-full bg-white/[0.07] -top-20 -left-16 pointer-events-none" />
              <div className="absolute w-44 h-44 rounded-full bg-white/[0.06] -bottom-12 -right-12 pointer-events-none" />

              <div className="relative z-10">
                <h3 className="text-white text-2xl md:text-3xl font-bold leading-snug mb-3">
                  Let&apos;s talk about
                  <br />
                  something{" "}
                  <span className="text-yellow-300">great</span>
                  <br />
                  together
                </h3>

                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  Have a question or want to partner with FARMEX? Reach out and
                  we&apos;ll be in touch.
                </p>

                <div className="flex flex-col gap-4">
                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.18] flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    <div className="text-xs text-white/85 leading-relaxed">
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=leadsagriventures@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-300 transition-colors block"
                      >
                        leadsagriventures@gmail.com
                      </a>

                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@leadsagri.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-300 transition-colors block"
                      >
                        hr@leadsagri.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.18] flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>

                    <div className="text-xs text-white/85 leading-relaxed flex flex-col gap-1">
                      <button
                        type="button"
                        onClick={() => copyNumber("+63 945 170 9401")}
                        className="text-left hover:text-yellow-300 transition-colors"
                      >
                        +63 945 170 9401 (Customer Service)
                      </button>

                      <button
                        type="button"
                        onClick={() => copyNumber("+63 906 481 9885")}
                        className="text-left hover:text-yellow-300 transition-colors"
                      >
                        +63 906 481 9885 (Northern Luzon)
                      </button>

                      <button
                        type="button"
                        onClick={() => copyNumber("+63 917 313 8162")}
                        className="text-left hover:text-yellow-300 transition-colors"
                      >
                        +63 917 313 8162 (CALABARZON)
                      </button>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.18] flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>

                    <div className="text-xs text-white/85 leading-relaxed">
                      KM 70 National Hwy, Brgy. Bangyas,
                      <br />
                      Calauan, Laguna
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL — FORM */}
            <div className="bg-[#f0faf4] p-8 md:p-10 flex-1">
              <p className="text-[#1a5c35] text-base font-semibold mb-6">
                Send us a{" "}
                <span className="text-[#2e9e5b]">message</span>
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div className="border-b border-[#b6dfc5] pb-1 focus-within:border-[#2e9e5b] transition-colors">
                  <label className="block text-[10.5px] font-semibold text-[#5a9470] uppercase tracking-widest mb-1">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Juan dela Cruz"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-none outline-none text-[#1a5c35] text-sm placeholder-[#a0c8b0] font-medium"
                  />
                </div>

                {/* Email */}
                <div className="border-b border-[#b6dfc5] pb-1 focus-within:border-[#2e9e5b] transition-colors">
                  <label className="block text-[10.5px] font-semibold text-[#5a9470] uppercase tracking-widest mb-1">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-none outline-none text-[#1a5c35] text-sm placeholder-[#a0c8b0] font-medium"
                  />
                </div>

                {/* Contact */}
                <div className="border-b border-[#b6dfc5] pb-1 focus-within:border-[#2e9e5b] transition-colors">
                  <label className="block text-[10.5px] font-semibold text-[#5a9470] uppercase tracking-widest mb-1">
                    Contact Number
                  </label>

                  <input
                    type="text"
                    name="contact"
                    placeholder="+63 900 000 0000"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-none outline-none text-[#1a5c35] text-sm placeholder-[#a0c8b0] font-medium"
                  />
                </div>

                {/* Message */}
                <div className="border-b border-[#b6dfc5] pb-1 focus-within:border-[#2e9e5b] transition-colors">
                  <label className="block text-[10.5px] font-semibold text-[#5a9470] uppercase tracking-widest mb-1">
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-none outline-none text-[#1a5c35] text-sm placeholder-[#a0c8b0] font-medium resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="mt-2 w-full flex items-center justify-center gap-2 bg-[#2e9e5b] hover:bg-[#227a45] text-white text-sm font-semibold py-3 rounded-xl transition-colors disabled:opacity-60"
                >
                  {isSending && (
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                  )}

                  {isSending ? "Submitting..." : "Submit Form"}
                </button>
              </form>
            </div>
          </div>

          {/* MAP */}
          <div className="w-full h-80 md:h-[480px] border-2 md:border-4 border-[#2e9e5b] rounded-xl overflow-hidden">
            <iframe
              title="FarmEx Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35917.25807111052!2d121.25206336136385!3d14.173866964059993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5f625f843819%3A0x2869c3992b0c6d61!2sLeads%20Agriventures!5e1!3m2!1sen!2sph!4v1755487300350!5m2!1sen!2sph"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isClient && (
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-6 rounded-xl shadow-2xl text-center max-w-sm w-full"
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`text-4xl ${
                      modalMessage.includes("success") ||
                      modalMessage.includes("copied")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {modalMessage.includes("success") ||
                    modalMessage.includes("copied")
                      ? "✅"
                      : "❌"}
                  </div>
                </div>

                <p className="text-gray-800 text-base">{modalMessage}</p>

                <button
                  onClick={() => setModalOpen(false)}
                  className="mt-6 px-4 py-2 bg-[#2e9e5b] text-white rounded-lg hover:bg-[#227a45] transition"
                >
                  OK
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}