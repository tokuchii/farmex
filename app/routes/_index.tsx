import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "FarmEx - Revolutionary Agricultural Technology" },
  { name: "description", content: "Transform your farming operations with FarmEx's cutting-edge agricultural technology solutions. Increase yields, reduce costs, and farm smarter." },
];

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen">
      <motion.div
        className="relative w-full h-auto overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {isClient && (
          <video
            src="/rice.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.img
            src="/welcome.png"
            alt="Welcome"
            className="w-full max-w-[800px] sm:max-w-3xl md:max-w-3xl xl:max-w-7xl h-auto mt-16 md:-mt-20" 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </motion.div>
      {/* Products Section */}
      <section
        className="relative w-full py-12 px-2 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bgproducts.png')" }}
      >
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-green-700 mb-2 uppercase leading-tight tracking-widest text-center">Featured Products</h2>
          <div className="h-1 w-50 bg-yellow-500 rounded-full mb-8"></div>
          <div className="flex flex-row flex-wrap justify-center gap-16 w-full">
            {/* Jackpot 102 */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden" style={{ boxShadow: '0 2px 32px 2px rgba(234, 179, 8, 0.85)' }}>
                <a href="/products">
                <img src="/jackpot102.png" alt="Jackpot 102" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                </a>
              </div>
              <span className="font-semibold text-gray-800 mt-2 uppercase  text-center">Jackpot 102</span>
            </div>
            {/* LAV 777 */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden" style={{ boxShadow: '0 2px 32px 2px rgba(234, 179, 8, 0.85)' }}>
                <a href="/products">
                <img src="/lav777.png" alt="LAV 777" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
              </a>
              </div>
              <span className="font-semibold text-gray-800 mt-2 uppercase  text-center">LAV 777</span>
            </div>
            {/* Jackpot Ready */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden" style={{ boxShadow: '0 2px 32px 2px rgba(234, 179, 8, 0.85)' }}>
                <a href="/products">
                <img src="/jackpotready.png" alt="Jackpot Ready" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                </a>
              </div>
              <span className="font-semibold text-gray-800 mt-2 uppercase  text-center">Jackpot Ready</span>
            </div>
            {/* Jose Maria Milled Rice */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden" style={{ boxShadow: '0 2px 32px 2px rgba(234, 179, 8, 0.85)' }}>
                <a href="/products">
                <img src="/josemaria.png" alt="Jose Maria Milled Rice" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                </a>
              </div>
              <span className="font-semibold text-gray-800 mt-2 uppercase text-center">Jose Maria Milled Rice</span>
            </div>
          </div>
        </div>
      </section>
      {/* Gold line under products section */}
      <div className="w-full flex justify-center">
        <div className="h-1 w-full bg-yellow-500"></div>
      </div>
       {/* Services Section */}
       <section
        className="relative w-full min-h-[900px] py-6 px-2 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bgservices.jpg')" }}
      >
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-white mb-8 uppercase leading-tight text-center tracking-widest">Services</h2>
            <div className="h-1 w-[170px] -mt-8 bg-yellow-500"></div>
          <div className="h-1 w-50 bg-yellow-500 rounded-full mb-28"></div>
          <div className="flex flex-col xl:flex-row justify-between items-center w-full max-w-6xl mx-auto gap-12 xl:gap-0">
            {/* Service 1 */}
            <div className="flex flex-col items-center w-full lg:w-1/3 max-w-lg">
              <div className="w-[508px] h-[308px] rounded-lg shadow-lg flex items-center justify-center object-contain transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden mb-8 border-4 border-white" style={{ boxShadow: '0 2px 32px 2px rgba(34,197,94,0.25)' }}>
                <img src="/service1.jpg" alt="Service 1" className="w-full h-full object-contain" />
              </div>
                <a href="/services">
                  <button type="button" className="bg-yellow-500 text-white px-10 py-3 rounded-lg font-bold text-lg shadow hover:bg-yellow-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50">
                    Get Involved
                  </button>
                </a>
            </div>
            {/* Service 2 */}
            <div className="flex flex-col items-center w-full lg:w-1/3 max-w-lg">
              <div className="w-[508px] h-[308px] rounded-lg shadow-lg flex items-center justify-center object-contain transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden mb-8 border-4 border-white" style={{ boxShadow: '0 2px 32px 2px rgba(34,197,94,0.25)' }}>
                <img src="/service2.png" alt="Service 2" className="w-full h-full object-contain" />
              </div>
              <a href="/services">
                <button type="button" className="bg-yellow-500 text-white px-10 py-3 rounded-lg font-bold text-lg shadow hover:bg-yellow-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50">
                  Get Involved
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center">
        <div className="h-1 w-full bg-yellow-500"></div>
      </div>
      <motion.main
        className="relative z-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

      </motion.main>
    </div>
  );
}
