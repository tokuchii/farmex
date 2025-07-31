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
    <div className="min-h-screen">
      <motion.div
        className="relative w-full h-auto overflow-hidden"
      >
        {isClient && (
          <motion.img
            src="/bgproducts.jpg" // ← Replace this with your image path
            alt="Farm Image"
            className="w-full h-64 sm:h-96 md:h-[600px] lg:h-[910px] object-cover"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
 <h2 className="text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 h-auto mt-16 md:-mt-26">
  PRODUCTS
</h2>
        </div>
      </motion.div>
    </div>
  );
}
