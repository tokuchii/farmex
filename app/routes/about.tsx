import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function meta() {
  return [
    { title: "FarmEx - Revolutionary Agricultural Technology" },
    { name: "description", content: "Transform your farming operations with FarmEx's cutting-edge agricultural technology solutions. Increase yields, reduce costs, and farm smarter." },
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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {isClient && (
          <img
            src="/bgabout.jpg" // ← Replace this with your image path
            alt="Farm Image"
            className="w-full h-[910px] object-cover"
          />
        )}
    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
  <h2 className="text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4">
    FARMEX AT A GLANCE
  </h2>
        </div>
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
  <div className="w-full flex flex-col items-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-2 uppercase leading-tight tracking-widest text-center">
      Featured Products
    </h2>
  <div className="h-1 w-40 md:w-48 lg:w-[400px] bg-yellow-500 rounded-full mb-12"></div>
    <div className="grid sm:grid-cols-2 gap-8 xl:flex xl:justify-center xl:gap-16 w-full max-w-7xl mt-6">
      {/* Single Product Card */}
      {[
        { name: "Jackpot 102", image: "/jackpot102.png" },
        { name: "LAV 777", image: "/lav777.png" },
        { name: "Jackpot Ready", image: "/jackpotready.png" },
        { name: "Jose Maria Milled Rice", image: "/josemaria.png" },
      ].map((product) => (
        <div key={product.name} className="flex flex-col items-center">
          <div
            className="w-full max-w-[300px] bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
            style={{
              boxShadow: "0 2px 20px 2px rgba(34, 197, 94, 0.85)", 
            }}
          >
            <a href="/products">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </a>
          </div>
          <span className="font-semibold text-gray-800 mt-3 uppercase text-center text-sm sm:text-base">
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
      
    </div>
  );
}
