import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Farmex Corporation" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const products = [
    { name: "Jackpot 102", image: "/J102.png" },
    { name: "LAV 777", image: "/lav777_product.png" },
    { name: "Leads 143", image: "/leads143_product.png" },
    { name: "Jackpot ready", image: "/jr_new_image1.png" },
  ];

  const services = [
    { image: "/service1.jpg", alt: "Machine Rentals", label: "Machine Rentals", href: "/services#machine-rentals" },
    { image: "/service2.png", alt: "Technical Consultation", label: "Technical Consultation", href: "/services#technical-consultation" },
    { image: "/training1.jpg", alt: "Training", label: "Training", href: "/services#training" },
  ];

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
            playsInline
            controls={false}
            disablePictureInPicture
            controlsList="nodownload noplaybackrate noremoteplayback"
            onContextMenu={(e) => e.preventDefault()}
            preload="auto"
            className="w-full h-full object-cover object-top pointer-events-none"
          />
        )}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.img
            src="/welcome.png"
            alt="Welcome"
            className="w-full max-w-[300px] sm:max-w-lg md:max-w-lg xl:max-w-4xl h-auto mt-16 md:-mt-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      <motion.div>
        {/* Gold line */}
        <div className="w-full flex justify-center">
          <div className="h-1 w-full bg-yellow-500"></div>
        </div>

        {/* Products Section */}
        <section
          className="relative w-full py-16 px-4 sm:px-6 lg:px-8 flex items-center bg-white justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/ricefieldbg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full flex flex-col items-center">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-2 uppercase tracking-widest text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Featured Products
            </motion.h2>
            <div className="h-1 w-40 md:w-48 lg:w-[400px] bg-yellow-500 rounded-full mb-12"></div>

            <div className="grid sm:grid-cols-2 gap-8 xl:flex xl:justify-center xl:gap-16 w-full max-w-7xl mt-6">
              {products.map((product, i) => (
                <motion.div
                  key={product.name}
                  className="flex uppercase tracking-widest flex-col items-center"
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="w-full max-w-[300px] mb-6 flex items-center justify-center overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                    <a href="/products">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover"
                      />
                    </a>
                  </div>
                  <span className="font-semibold text-white mt-3 uppercase text-center text-md sm:text-base">
                    {product.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>

<motion.div>
  {/* Services Section */}
  <section className="relative w-full py-16 px-4 sm:px-6 md:px-8 bg-white">
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4 uppercase text-center tracking-widest"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Services
      </motion.h2>
      <div className="h-1 w-40 md:w-48 lg:w-52 bg-yellow-500 rounded-full mb-12"></div>

      {/* Card Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full">

        {/* Service Cards */}
        {services.map((service, i) => (
          <motion.div
            key={service.alt}
            className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image area with circle bg like the reference */}
            <div className="flex items-center justify-center bg-gray-100 h-52 relative overflow-hidden">
              <div className="w-40 h-40 rounded-full bg-white/70 absolute"></div>
              <img
                src={service.image}
                alt={service.alt}
                className="relative z-10 w-full h-full object-cover"
              />
            </div>

            {/* Card Body */}
            <div className="flex flex-col justify-between flex-1 p-5 gap-4">
              <div>
                <h3 className="text-gray-900 font-bold text-base md:text-lg uppercase tracking-wide">
                  {service.label}
                </h3>
                <p className="text-gray-400 text-xs mt-1 tracking-wide">
                  Click below to learn more and get involved
                </p>
              </div>
              <a href={service.href} className="w-full">
                <button
                  type="button"
                  className="w-full bg-yellow-400 text-black text-sm font-bold py-2 rounded-full hover:bg-yellow-300 transition-colors duration-200"
                >
                  Get Involved →
                </button>
              </a>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  </section>
</motion.div>

      <motion.main
        className="relative z-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
}