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
      {/* New section with bgproducts.png as background */}
      <section
        className="relative w-full py-12 px-2 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bgproducts.png')" }}
      >
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl font-bold text-green-700 mb-2 uppercase leading-tight text-center">Featured Products</h2>
          <div className="h-1 w-50 bg-yellow-500 rounded-full mb-8"></div>
          <div className="flex flex-row flex-wrap justify-center gap-14 w-full">
            {/* Jackpot 102 */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden" style={{ boxShadow: '0 2px 32px 2px rgba(234, 179, 8, 0.85)' }}>
                <img src="/jackpot102.png" alt="Jackpot 102" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
              </div>
              <span className="font-semibold text-gray-800 mt-2 uppercase  text-center">Jackpot 102</span>
            </div>
            {/* LAV 777 */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden" style={{ boxShadow: '0 2px 32px 2px rgba(234, 179, 8, 0.85)' }}>
                <img src="/lav777.png" alt="LAV 777" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
              </div>
              <span className="font-semibold text-gray-800 mt-2 uppercase  text-center">LAV 777</span>
            </div>
            {/* Jackpot Ready */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden" style={{ boxShadow: '0 2px 32px 2px rgba(234, 179, 8, 0.85)' }}>
                <img src="/jackpotready.png" alt="Jackpot Ready" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
              </div>
              <span className="font-semibold text-gray-800 mt-2 uppercase  text-center">Jackpot Ready</span>
            </div>
            {/* Jose Maria Milled Rice */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden" style={{ boxShadow: '0 2px 32px 2px rgba(234, 179, 8, 0.85)' }}>
                <img src="/josemaria.png" alt="Jose Maria Milled Rice" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
              </div>
              <span className="font-semibold text-gray-800 mt-2 uppercase text-center">Jose Maria Milled Rice</span>
            </div>
          </div>
        </div>
      </section>
      <motion.main
        className="p-8 relative z-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

      </motion.main>
    </div>
  );
}
