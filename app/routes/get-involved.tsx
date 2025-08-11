import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { AnimatePresence } from "framer-motion";

export function meta() {
  return [
    { title: "Get Involved" },
  ];
}


export default function GetInvolved() {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "name") {
      // Remove numbers
      newValue = newValue.replace(/[0-9]/g, "");
      // Capitalize each word
      newValue = newValue
        .split(" ")
        .map(
          (word) =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    }

    if (name === "contact") {
      // Remove all non-digits and limit to 10 digits
      newValue = newValue.replace(/[^0-9]/g, "").slice(0, 10);
    }

    setFormData({ ...formData, [name]: newValue });
  };



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);


    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[a-zA-Z][a-zA-Z0-9.-]*\.(com|org|net|edu|gov|io)$/i;
      return emailRegex.test(email);
    };


    if (!isValidEmail(formData.email)) {
      setModalMessage("Please enter a valid email address (e.g., user@gmail.com)");
      setIsSending(false);
      setModalOpen(true);
      return;
    }

    const cleanedContact = formData.contact.replace(/[^0-9]/g, "");

    const templateParams = {
      name: formData.name,
      email: formData.email,
      contact: cleanedContact,
      message: formData.message,
      date: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        "service_hce3n1d",
        "template_l1ny1ph",
        templateParams,
        "GhCOaNaQzdYhDBH2G"
      );

      setModalMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", contact: "", message: "" });
    } catch (error) {
      console.error("FAILED...", error);
      setModalMessage("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
      setModalOpen(true);
    }
  };


  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modalOpen]);

  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <div className="min-h-screen">
      <motion.div
        className="relative w-full h-auto overflow-hidden"

      >
        {isClient && (
          <motion.img
            src="/newbggetinvolved.png"
            alt="Farm Image"
            className="w-full h-64 sm:h-96 md:h-[600px] lg:h-[500px] object-cover object-top"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
        <div className="absolute inset-0 bg-green-400 bg-opacity-45"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <h2 className="text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 h-auto mt-16 md:-mt-26">
            FARMEX AT A GLANCE
          </h2>
        </div>
      </motion.div>
      <motion.div>
        {/* Contact Section */}
        <section className="w-full min-h-screen pt-8 pb-16 px-4 sm:px-8 bg-[url('/newbgmachinerental.png')] bg-cover bg-center flex flex-col items-center justify-start">
          <div className="w-full max-w-7xl space-y-12">
            {/* Row 1: Mascot (left) + Form (right) inside green background */}
            <div className="bg-[url('/bgmascot-form_get-involved.png')] bg-cover bg-center rounded-xl p-6 md:p-10 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Left: Mascot/Image */}
                <div className="flex flex-col items-center justify-center">
                  <img src="/pandoybg1.png" alt="Mascot" className="w-[350px] h-auto" />
                  <div className="h-1 bg-yellow-500 w-3/4 md:w-2/3 mt-4" />
                </div>

              {/* Right: Form */}
                <div className="flex items-start justify-center">
                  <div className="w-full max-w-lg">
                    <h3 className="text-white text-3xl font-semibold mb-4">Sent us a message</h3>
                    <form
                      onSubmit={handleSubmit}
                      className="bg-white text-gray-800 p-6 rounded-lg w-full shadow-lg border border-gray-200"
                    >
                    <div className="mb-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded text-gray-700 bg-white border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none mb-4"
                        required
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded text-gray-700 bg-white border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none mb-4"
                        required
                      />

                      <input
                        type="text"
                        name="contact"
                        placeholder="Contact Number"
                        value={formData.contact}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded text-gray-700 bg-white border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none mb-4"
                        required
                      />

                      <textarea
                        name="message"
                        rows={6}
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded text-gray-700 bg-white border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none mb-4 resize-none"
                        required
                      ></textarea>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="bg-[#00703C] text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-60"
                          disabled={isSending}
                        >
                          {isSending ? "Submitting..." : "Submit Form"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Contact details (left) + Map (right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Left: Contact details */}
              <div className="text-black space-y-6 text-sm sm:text-base lg:text-lg w-full px-2 sm:px-4">
                {/* Emails */}
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-1">Emails:</h3>
                  <p className="break-words">
                    <a href="mailto:leadsagriventures@gmail.com" className="underline text-black hover:text-green-600 break-words">
                      leadsagriventures@gmail.com
                    </a>
                  </p>
                  <p className="break-words">
                    <a href="mailto:hr@leadsagri.com" className="underline text-black hover:text-green-600 break-words">
                      hr@leadsagri.com
                    </a>
                  </p>
                </div>

                {/* Contact Numbers */}
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-1">Contact numbers:</h3>
                  <p>
                    FARMEX Customer Service & Support:
                    <br />
                    <a href="tel:+639451709401" className="underline text-black hover:text-green-600">
                      +63 945 170 9401
                    </a>
                  </p>
                  <p>
                    Northern Luzon:
                    <br />
                    <a href="tel:+639064819885" className="underline text-black hover:text-green-600">
                      +63 906 481 9885
                    </a>
                  </p>
                  <p>
                    MIMAROPA:
                    <br />
                    <a href="tel:+639267091276" className="underline text-black hover:text-green-600">
                      +63 926 709 1276
                    </a>
                  </p>
                  <p>
                    CALABARZON:
                    <br />
                    <a href="tel:+639173138162" className="underline text-black hover:text-green-600">
                      +63 917 313 8162
                    </a>
                  </p>
                </div>

                {/* Station Address */}
                <div>
                  <h3 className="font-bold text-lg sm:text-xl mb-1">Station Address:</h3>
                  <p className="break-words">
                    <a
                      href="https://www.google.com/maps?q=14.330623,121.076050"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-black hover:text-green-600"
                    >
                      Unit A 201 and Alfresco Area, 2nd Floor Coral Center Mall, Barangay San Francisco, Biñan, Laguna
                    </a>
                  </p>
                </div>
              </div>

              {/* Right: Map */}
              <div className="w-full max-w-md md:max-w-full h-80 md:h-[480px] border-2 md:border-4 border-[#057A31]">
                <iframe
                  title="FarmEx Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.64908692822!2d121.27209887587168!3d14.172200686486535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5e176676321b%3A0x7b2c62c941bcd7a3!2s1775%20F.T.%20San%20Luis%20Ave%2C%20Bay%2C%20Laguna%204033!5e0!3m2!1sen!2sph!4v1693817890000!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  className="rounded-md shadow-lg"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      <div className="w-full flex justify-center">
        <div className="h-1 w-full bg-yellow-500"></div>
      </div>
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
                <div className={`text-4xl ${modalMessage.includes("success") ? "text-green-600" : "text-red-600"}`}>
                  {modalMessage.includes("success") ? "✅" : "❌"}
                </div>
              </div>
              <p className="text-gray-800 text-base">{modalMessage}</p>
              <button
                onClick={() => setModalOpen(false)}
                className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                OK
              </button>
            </motion.div>
          </motion.div>

        )}
      </AnimatePresence>
    </div>

  );
}
