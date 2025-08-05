import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function meta() {
  return [
    { title: "FarmEx - Revolutionary Agricultural Technology" },
  ];
}

export default function GetInvolved() {
  const [isClient, setIsClient] = useState(false);

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
            src="/getinvolved.png"
            alt="Farm Image"
            className="w-full h-64 sm:h-96 md:h-[600px] lg:h-[500px] object-cover object-top"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <h2 className="text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 h-auto mt-16 md:-mt-26">
            FARMEX AT A GLANCE
          </h2>
        </div>
      </motion.div>
      <motion.div>
        {/* Contact Section */}
      <section className="w-full min-h-screen pt-8 pb-16 px-4 sm:px-8 bg-[url('/bgcontact.png')] bg-cover bg-center flex flex-col items-center justify-start">
  <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">


            {/* Left Side: Logo + Text */}
            <div className="flex flex-col items-center justify-center space-y-2">
              <img src="/pandoybg1.png" alt="Logo" className="w-[350px] h-auto" />

              <div className="w-full flex justify-center">
                <div className="h-1 w-full bg-yellow-500"></div>
              </div>

              <div className="text-black space-y-6 text-md">
                {/* Emails */}
                <div>
                  <h3 className="font-bold text-xl">Emails:</h3>
                  <p>
                    <a href="mailto:customersupport@leadsav.com" className="underline text-black hover:text-green-600">
                      customersupport@leadsav.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:hr@leadsagri.com" className="underline text-black hover:text-green-600">
                      hr@leadsagri.com
                    </a>
                  </p>
                </div>

                {/* Contact Numbers */}
                <div>
                  <h3 className="font-bold text-xl">Contact numbers:</h3>
                  <p>
                    FARMEX Customer Service & Support:{" "}
                    <a href="tel:+639451709401" className="underline text-black hover:text-green-600">
                      +63 945 170 9401
                    </a>
                  </p>
                  <p>
                    Northern Luzon:{" "}
                    <a href="tel:+639064819885" className="underline text-black hover:text-green-600">
                      +63 906 481 9885
                    </a>
                  </p>
                  <p>
                    MIMAROPA:{" "}
                    <a href="tel:+639267091276" className="underline text-black hover:text-green-600">
                      +63 926 709 1276
                    </a>
                  </p>
                  <p>
                    CALABARZON:{" "}
                    <a href="tel:+639173138162" className="underline text-black hover:text-green-600">
                      +63 917 313 8162
                    </a>
                  </p>
                </div>
                {/* Station Address */}
                <div>
                  <h3 className="font-bold text-xl">Station Address:</h3>
                  <p>
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
            </div>


            {/* Right Side: Form + Map */}
            <div className="flex flex-col items-end gap-6">
              <form className="bg-green-700 text-white p-6 rounded-lg w-full max-w-md shadow-lg">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded text-gray-700 bg-white border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded text-gray-700 bg-white border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Contact Number"
                    className="w-full px-4 py-3 rounded text-gray-700 bg-white border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded text-gray-700 bg-white border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white px-4 py-2 rounded hover:brightness-95"
                    style={{ backgroundColor: '#E0B100' }}
                  >
                    Submit Form
                  </button>
                </div>
              </form>




              {/* Map under form, aligned right */}
              <div className="w-full max-w-md h-80">
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
    </div>
  );
}
