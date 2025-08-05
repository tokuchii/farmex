import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Farmex" },
];
export default function Services() {
  const [activeSection, setActiveSection] = useState<'rentals' | 'consultation'>('rentals');

  useEffect(() => {
    function handleHashChange() {
      const hash = window.location.hash;
      if (hash === '#technical-consultation') {
        setActiveSection('consultation');
      } else {
        setActiveSection('rentals');
      }
    }
    handleHashChange(); // run on mount
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-white w-full min-h-screen relative">
      {/* Sevices Machine Rentals */ }
      {activeSection === 'rentals' && (
        <>
          {/* Hero Section */}
          <motion.div className="relative w-full h-[350px] sm:h-[400px] md:h-[600px] lg:h-[500px] overflow-hidden">
            {typeof window !== 'undefined' && (
              <motion.img
                src="/machinerentals.png"
                alt="Machine Rentals Background"
                className="w-full h-full object-cover object-top pt-20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            )}
            <div className="absolute inset-0 bg-green-600 bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 py-2 pt-20 md:pt-12">
              <h2 className="text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-2 md:mb-6">
                MACHINE RENTALS
              </h2>
              <p className="text-white text-[10px] md:text-xl leading-relaxed max-w-4xl text-center mb-4 md:mb-8">
                Genuine to its mission of providing all the Filipino farmer needs, Farmex is offering farm machineries rentals to extend the accessibility of farm technologies and equipment to individual rice farmers and farm cooperatives. With the help of our sister company, Leads Tech, Farmex team also do machine demonstrations and provides after-sales support to our customers.
              </p>
              <Link to="/get-involved" className="bg-[#E0B100F7] text-white px-2 md:px-8 py-1 md:py-3 rounded-lg font-bold hover:bg-[#E0B100F7] transition-colors duration-300 inline-block">
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Equipment Grid Section */}
          <motion.div>
            <section className="w-full py-16 px-4 sm:px-8 bg-[url('/bgmachinerentals.jpg')] bg-cover bg-center flex flex-col items-center">
              <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mobile Dryer */}
                <motion.div
                  className="rounded-lg shadow-lg overflow-hidden border-4 border-yellow-400 p-2"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="px-4 pt-4">
                    <h3 className="text-green-600 font-bold text-lg md:text-2xl">Mobile Dryer</h3>
                    <div className="w-28 h-1 bg-yellow-400 mt-1"></div>
                  </div>
                  <div className="h-80 w-70 overflow-hidden relative rounded py-4 px-4">
                    <img
                      src="/mobiledryer.png"
                      alt="Mobile Dryer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>

                {/* Tractor */}
                <motion.div
                  className="rounded-lg shadow-lg overflow-hidden border-4 border-yellow-400 p-2"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="px-4 pt-4">
                    <h3 className="text-green-600 font-bold text-lg md:text-2xl">Tractor</h3>
                    <div className="w-28 h-1 bg-yellow-400 mt-1"></div>
                  </div>
                  <div className="h-80 w-70 overflow-hidden relative rounded py-4 px-4">
                    <img
                      src="/tractor.png"
                      alt="Tractor"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>

                {/* Transplanter */}
                <motion.div
                  className="rounded-lg shadow-lg overflow-hidden border-4 border-yellow-400 p-2"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="px-4 pt-4">
                    <h3 className="text-green-600 font-bold text-lg md:text-2xl">Transplanter</h3>
                    <div className="w-28 h-1 bg-yellow-400 mt-1"></div>
                  </div>
                  <div className="h-80 w-70 overflow-hidden relative rounded py-4 px-4">
                    <img
                      src="/transplanter.png"
                      alt="Transplanter"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>

                {/* Harvester */}
                <motion.div
                  className="rounded-lg shadow-lg overflow-hidden border-4 border-yellow-400 p-2"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="px-4 pt-4">
                    <h3 className="text-green-600 font-bold text-lg md:text-2xl">Harvester</h3>
                    <div className="w-28 h-1 bg-yellow-400 mt-1"></div>
                  </div>
                  <div className="h-80 w-70 overflow-hidden relative rounded py-4 px-4">
                    <img
                      src="/harvester.png"
                      alt="Harvester"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              </div>
              <div className="w-full h-1 bg-yellow-400 mt-4"></div>
            </section>
          </motion.div>
        </>
      )}

      {/* Sevices Technical Consultation */ }
      {activeSection === 'consultation' && (
        <>
          {/* Hero Section for Technical Consultation */}
          <motion.div className="relative w-full h-[360px] sm:h-[400px] md:h-[600px] lg:h-[500px] overflow-hidden flex items-center justify-center">
            {typeof window !== 'undefined' && (
              <motion.img
                src="/technicalconcultant.png"
                alt="Technical Consultation Hero"
                className="w-full h-full object-cover object-top pt-20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            )}
            <div className="absolute inset-0 bg-green-600 bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 py-2 pt-20 md:pt-16">
              <h2 className="text-white text-lg md:text-4xl font-extrabold uppercase tracking-widest mb-2 md:mb-6">
                TECHNICAL CONSULTATION
              </h2>
              <p className="text-white text-[10px] md:text-xl leading-relaxed max-w-6xl text-center mb-2 md:mb-8">
                Farmex's commitment to the rice farming communities does not end in providing quality hybrid rice seeds but extends its hands to those who are in need of free technical consultations. From farmers to agriculture students, Farmex technical team is always ready to share their expertise and strategy on rice farming production and technologies. Regular technical trainings are done to further equip and update our Seed Production Specialists on the latest technologies and having them share new learnings to our farmers.
              </p>
              <Link to="/get-involved" className="bg-[#E0B100F7] text-white px-2 md:px-8 py-1 md:py-3 rounded-lg font-bold hover:bg-[#E0B100F7] transition-colors duration-300 inline-block">
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Image Carousel/Slider Section */}
          <div className="w-full py-8 sm:py-12 bg-white md:bg-[url('/bgmachinerentals.jpg')] md:bg-center md:bg-repeat-y flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl bg-white border-4 border-yellow-400 rounded-lg shadow-lg px-2 sm:px-4 py-4 sm:py-6 flex flex-col items-center">
              {/* Simple slider logic */}
              <TechnicalConsultationSlider />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function TechnicalConsultationSlider() {
  const images = [
    { src: "/technicalconsultantimg1.jpg", alt: "Technical Consultation 1" },
    { src: "/technicalconsultantimg2.jpg", alt: "Technical Consultation 2" },
  ];
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center justify-center w-full">
        <button onClick={prev} className="text-3xl sm:text-4xl text-[#00703C] hover:text-[#00703C] px-2 sm:px-2 focus:outline-none ml-4">&#60;</button>
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl h-64 sm:h-96 md:h-[350px] lg:h-[450px] object-cover rounded-lg mx-1 sm:mx-4 border-2 border-gray-200 bg-white"
        />
        <button onClick={next} className="text-3xl sm:text-4xl text-[#00703C] hover:text-[#00703C] px-2 sm:px-2 focus:outline-none mr-4">&#62;</button>
      </div>
      <div className="flex justify-center mt-2 sm:mt-4">
        {images.map((_, i) => (
          <span
            key={i}
            className={`mx-0.5 sm:mx-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full ${i === index ? 'bg-yellow-500' : 'bg-gray-300'}`}
            style={{ display: 'inline-block' }}
          ></span>
        ))}
      </div>
    </div>
  );
} 