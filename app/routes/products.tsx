import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function meta() {
  return [
    { title: "FarmEx - Revolutionary Agricultural Technology" },
    { name: "description", content: "Transform your farming operations with FarmEx's cutting-edge agricultural technology solutions. Increase yields, reduce costs, and farm smarter." },
  ];
}

export default function Products() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen pt-14"> {/* Padding to offset navbar height */}
      <motion.div
        className="relative w-full h-auto overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {isClient && (
          <img
            src="/bgproducts.jpg"
            alt="Farm Image"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <h2 className="text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest m-4">
            Products
          </h2>
        </div>
      </motion.div>
    </div>
  );
}
