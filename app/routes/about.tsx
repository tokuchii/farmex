import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function meta() {
  return [
     { title: "Farmex" },
  ];
}

export default function About() {
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
            src="/bgabout.png"
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
        {/* History and Our Mission Section */}
        <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center bg-white justify-center bg-cover bg-center">
          <div className="w-full max-w-7xl flex flex-col gap-16">
            {/* History Row */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
              {/* Image 1 */}
              <div className="w-full md:w-1/2 flex justify-center">
                <motion.img
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src="/history.jpg"
                  alt="FarmEx History"
                  className="rounded-lg shadow-lg w-full max-w-md h-64 sm:h-72 md:h-80 object-cover"
                  style={{
                    boxShadow: "0 2px 20px 2px rgba(234, 179, 8, 0.85)", // gold shadow
                  }}
                />
              </div>
              {/* History Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-4 uppercase tracking-widest">
                  History
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {/* Replace this with your actual history text */}
                  Leads Agriventures Corporation (LAV) was established in 2018 as subsidiary company of LEADS AGRI. Presently under the Malveda Holdings Corporation, the main business is focused on Hybrid Rice Seeds and milled rice distribution. Apart from these, LAV has now ventured in machineries rental, and coming up with our own milled rice grains.
                </p>
              </div>
            </div>
            {/* Our Mission Row */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-16">
              {/* Image 2 */}
              <div className="w-full md:w-1/2 flex justify-center">
                <motion.img
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src="/mission.jpg"
                  alt="FarmEx Mission"
                  className="rounded-lg shadow-lg w-full max-w-md h-64 sm:h-72 md:h-80 object-cover"
                  style={{
                    boxShadow: "0 2px 20px 2px rgba(234, 179, 8, 0.85)", // gold shadow
                  }}
                />
              </div>
              {/* Mission Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-4 uppercase tracking-widest">
                  Our Mission
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {/* Replace this with your actual mission text */}
                  LAV’s mission is to come up with all the technologies and provide holistic support to the Filipino rice farmers. LAV is continuously testing high yielding rice seed varieties adaptable to the local conditions. From land preparation to harvesting activities, we provide after-sales support through technical consultations, machineries rental, production trainings and field demonstrations.

                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      <motion.div>
        {/* Products Section */}
        <section
          className="relative w-full py-16 px-4 sm:px-6 lg:px-8 flex items-center bg-white justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/featuredbg.jpg')", // change this to your actual image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
        </section>
      </motion.div>

    </div>
  );
}
