import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Farmex - Knowledge Transfer" },
];

export default function KnowledgeTransfer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-white w-full min-h-screen relative">
        {/* Knowledge-transfer for LAV Station Section */}
        {/* Hero Section */}
       <motion.div className="relative w-full h-[400px] sm:h-[400px] md:h-[600px] lg:h-[500px] overflow-hidden">
         {isClient && (
           <motion.img
             src="/LAV-station 1.png"
             alt="LAV Station Background"
             className="w-full h-full object-cover object-top"
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.6, ease: "easeOut" }}
           />
         )}
         <div className="absolute inset-0 bg-[#007F3D8C]"></div>
         <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center z-20 px-2 md:px-12 py-4 pt-24 md-pt-12">
           {/* Left Side - Title */}
           <div className="md:w-1/2 flex flex-col items-center justify-center md:items-start">
             <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-widest mb-4 md:mb-6 text-center md:text-left">
               LAV STATION
             </h2>
           </div>
           
            {/* Right Side - Description and Button */}
            <div className="md:w-1/2 flex flex-col items-center md:items-start">
              <div className="text-white text-[12px] md:text-lg lg:text-xl leading-relaxed max-w-2xl mb-0 md:mb-8 text-center md:text-left">
                <p className="mb-4">
                  Situated on a 6.6 hectare agricultural land in Calauan, Laguna, the LAV Station aims to lead, integrate, and deliver R&D solutions to meet farmer demands. As Leads' primary Research Center, the station is the venue for in-house trials that consequently give innovations in rice farming production. Additionally, the site is where we provide trainings to farmers, agriculture students, extension workers and agri enthusiasts.
                </p>
              </div>
              <div className="flex justify-center md:justify-end w-full pr-0 md:pr-16">
                <Link 
                  to="/get-involved" 
                  className="bg-[#E0B100] text-white px-2 md:px-8 py-1 md:py-3 rounded-lg font-bold hover:bg-[#E0B100F7] transition-colors duration-300 inline-block text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
         </div>
       </motion.div>

      {/* Video Section */}
      <motion.div className="w-full bg-[url('/bgmachinerentals.jpg')] bg-cover bg-center flex flex-col items-center justify-center">
      {/* Image Carousel/Slider Section */}
      <motion.div className="w-full py-2 sm:py-4 flex justify-center">
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-0 sm:px-2 py-4 sm:py-6 flex flex-col items-center">
          <LAVStationSlider />
        </div>
      </motion.div>
        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-2 sm:px-4 py-4 sm:py-6 flex flex-col items-center">
          <div className="relative w-full h-64 sm:h-96 md:h-[350px] lg:h-[470px] overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/OwXif6G_3oU"
              title="LAV Station Video"
              className="w-full h-full"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </motion.div>

      {/* Knowledge-transfer for Rice Derbies Section */}
    </div>
  );
}

function LAVStationSlider() {
  const images = [
    { src: "/LAV-station 2.png", alt: "LAV Station 2" },
    { src: "/LAV-station 3.jpg", alt: "LAV Station 3" },
    { src: "/LAV-station 4.jpg", alt: "LAV Station 4" },
    { src: "/LAV-station 5.jpg", alt: "LAV Station 5" },
    { src: "/LAV-station 6.jpg", alt: "LAV Station 6" },
    { src: "/LAV-station 7.jpg", alt: "LAV Station 7" },
    { src: "/LAV-station 8.jpg", alt: "LAV Station 8" },
    { src: "/LAV-station 9.jpg", alt: "LAV Station 9" },
    { src: "/LAV-station 10.jpg", alt: "LAV Station 10" },
    { src: "/LAV-station 11.jpg", alt: "LAV Station 11" },
    { src: "/LAV-station 12.jpg", alt: "LAV Station 12" },
  ];
  
  const [index, setIndex] = useState(0);
  
  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full flex items-center justify-center">
        {/* Left Navigation Arrow */}
        <button 
          onClick={prev} 
          className="absolute left-0 z-10 bg-[#057A31] hover:bg-[#046a2a] text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-colors duration-200 -ml-3 md:-ml-4"
        >
          <span className="text-lg md:text-xl font-bold">&#60;</span>
        </button>
        
                 {/* Main Image Container */}
         <div className="w-full max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-6xl h-64 sm:h-96 md:h-[350px] lg:h-[450px] relative">
           <img
             src={images[index].src}
             alt={images[index].alt}
             className="w-full h-full object-cover rounded-lg border-4 border-[#057A31]"
           />
         </div>
        
        {/* Right Navigation Arrow */}
        <button 
          onClick={next} 
          className="absolute right-0 z-10 bg-[#057A31] hover:bg-[#046a2a] text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-colors duration-200 -mr-3 md:-mr-4"
        >
          <span className="text-lg md:text-xl font-bold">&#62;</span>
        </button>
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 sm:mt-6">
        {images.map((_, i) => (
          <span
            key={i}
            className={`mx-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
              i === index ? 'bg-[#057A31]' : 'bg-gray-300'
            }`}
            style={{ display: 'inline-block' }}
          ></span>
        ))}
      </div>
    </div>
  );
} 