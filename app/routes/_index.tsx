import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Farmex" },
];

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen">
      <motion.div
      className="w-full h-64 sm:h-96 md:h-[600px] lg:h-[911px] object-cover relative overflow-hidden"
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
      className="w-full h-full object-cover object-top"
    />
  )}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.img
            src="/welcome.png"
            alt="Welcome"
            className="w-full max-w-[800px] sm:max-w-3xl md:max-w-3xl xl:max-w-7xl h-auto mt-20 md:-mt-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </motion.div>
      <motion.div>
      {/* Products Section */}
<section
  className="relative w-full py-16 px-4 sm:px-6 lg:px-8 flex items-center bg-white justify-center bg-cover bg-center"
  style={{
    backgroundImage: "url('/featuredbg.png')", 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="w-full flex flex-col items-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 uppercase tracking-widest text-center">
      Featured Products
    </h2>
  <div className="h-1 w-40 md:w-48 lg:w-[400px] bg-yellow-500 rounded-full mb-12"></div>
    <div className="grid sm:grid-cols-2 gap-8 xl:flex xl:justify-center xl:gap-16 w-full max-w-7xl mt-6">
      {/* Single Product Card */}
      {[
        { name: "Jackpot 102", image: "/jackpot102_product.png" },
        { name: "LAV 777", image: "/lav777_product.png" },
        { name: "Jackpot Ready", image: "/leads143_product.png" },
        { name: "Jose Maria Milled Rice", image: "/jose1.png" },
      ].map((product) => (
        <div key={product.name} className="flex uppercase tracking-widest flex-col items-center">
          <div
            className="w-full max-w-[300px] mb-6 flex items-center justify-center overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
            
          >
            <a href="/products">
              <motion.img
                src={product.image}
                alt={product.name}
                 initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-80 object-cover"
              />
            </a>
          </div>
          <span className="font-semibold text-white mt-3 uppercase text-center text-md sm:text-base">
            {product.name}
          </span>
        </div>
      ))}

    </div>
  </div>
</section>
      {/* Gold line under products section */}
      <div className="w-full flex justify-center">
        <div className="h-1 w-full bg-yellow-500"></div>
      </div>
      </motion.div>
      <motion.div>
      {/* Services Section */}
<section
  className="relative w-full min-h-[900px] py-6 px-4 sm:px-6 md:px-8 flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/bgservices.jpg')" }}
>
  <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12 uppercase text-center tracking-widest">
      Services
    </h2>

    <div className="h-1 w-40 md:w-48 lg:w-52 bg-yellow-500 rounded-full -mt-12 mb-20"></div>

    <div className="flex flex-col xl:flex-row justify-center items-center w-full gap-12 xl:gap-16">
      {/* Service 1 */}
      <div className="flex flex-col items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-md">
      <div
  className="w-full max-[525px]:w-[90%] h-72 rounded-lg border-4 border-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden mb-8"
  style={{ boxShadow: '0 2px 32px 2px rgba(34,197,94,0.25)' }}
>
  <img
    src="/service1.jpg"
    alt="Service 1"
    className="w-full h-full object-cover block"
  />
</div>
        <a href="/services">
          <button
            type="button"
            className="bg-yellow-500 tracking-widest text-white px-8 py-3 max-[525px]:px-4 max-[525px]:py-2 rounded-lg font-bold text-base max-[525px]:text-sm shadow hover:bg-yellow-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
          >
            Get Involved
          </button>
        </a>
      </div>

      {/* Service 2 */}
      <div className="flex flex-col items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-md">
<div
  className="w-full max-[525px]:w-[90%] h-72 rounded-lg border-4 border-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden mb-8"
  style={{ boxShadow: '0 2px 32px 2px rgba(34,197,94,0.25)' }}
>
  <img
    src="/service2.png"
    alt="Service 2"
    className="w-full h-full object-cover block"
  />
</div>

        <a href="/services">
          <button
            type="button"
            className="bg-yellow-500 tracking-widest text-white px-8 py-3 max-[525px]:px-4 max-[525px]:py-2 rounded-lg font-bold text-base max-[525px]:text-sm shadow hover:bg-yellow-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
          >
            Get Involved
          </button>
        </a>
      </div>
    </div>
  </div>
</section>
</motion.div>
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
