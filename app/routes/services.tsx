import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Services" },
];
export default function Services() {
  const [activeSection, setActiveSection] = useState<'rentals' | 'consultation' | 'training'>('rentals');
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);


  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (hash === '#technical-consultation') {
      setActiveSection('consultation');
    } else if (hash === '#training') {
      setActiveSection('training');
    } else if (hash === '#machine-rentals' || hash === '' || hash === '#') {
      setActiveSection('rentals');
    } else {
      setActiveSection('rentals');
    }
  }, [location.hash]);

  return (
    <div className="bg-white w-full min-h-screen relative">
      {/* Sevices Machine Rentals */}
      {activeSection === 'rentals' && (
        <>
          {/* Hero Section */}
          <motion.div className="relative w-full h-[350px] sm:h-[400px] md:h-[600px] lg:h-[500px] overflow-hidden">
            {isClient && (
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
            <section className="w-full py-16 px-4 sm:px-8 bg-[url('/newbgmachinerental.png')] bg-cover bg-center flex flex-col items-center">
              <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {/* Mobile Dryer */}
                <motion.div
                  className="overflow-hidden p-2 sm:p-3 lg:p-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="px-2 sm:px-4 pt-2 sm:pt-4">
                    <h3 className="text-green-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">Mobile Dryer</h3>
                    <div className="w-20 sm:w-24 md:w-28 h-0.5 sm:h-1 bg-yellow-400 mt-1"></div>
                  </div>
                  <div className="h-[280px] sm:h-[280px] md:h-[350px] lg:h-[450px] w-full overflow-hidden relative rounded py-2 sm:py-3 lg:py-4">
                    <img
                      src="/mobiledryer.png"
                      alt="Mobile Dryer"
                      className="w-full h-full object-cover border-2 sm:border-3 md:border-4 border-[#00703C] rounded-lg"
                    />
                  </div>
                </motion.div>

                {/* Tractor */}
                <motion.div
                  className="overflow-hidden p-2 sm:p-3 lg:p-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="px-2 sm:px-4 pt-2 sm:pt-4">
                    <h3 className="text-green-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">Tractor</h3>
                    <div className="w-20 sm:w-24 md:w-28 h-0.5 sm:h-1 bg-yellow-400 mt-1"></div>
                  </div>
                  <div className="h-[280px] sm:h-[280px] md:h-[350px] lg:h-[450px] w-full overflow-hidden relative rounded py-2 sm:py-3 lg:py-4">
                    <img
                      src="/tractor.png"
                      alt="Tractor"
                      className="w-full h-full object-cover border-2 sm:border-3 md:border-4 border-[#00703C] rounded-lg"
                    />
                  </div>
                </motion.div>

                {/* Transplanter */}
                <motion.div
                  className="overflow-hidden p-2 sm:p-3 lg:p-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="px-2 sm:px-4 pt-2 sm:pt-4">
                    <h3 className="text-green-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">Transplanter</h3>
                    <div className="w-20 sm:w-24 md:w-28 h-0.5 sm:h-1 bg-yellow-400 mt-1"></div>
                  </div>
                  <div className="h-[280px] sm:h-[280px] md:h-[350px] lg:h-[450px] w-full overflow-hidden relative rounded py-2 sm:py-3 lg:py-4">
                    <img
                      src="/transplanter.png"
                      alt="Transplanter"
                      className="w-full h-full object-cover border-2 sm:border-3 md:border-4 border-[#00703C] rounded-lg"
                    />
                  </div>
                </motion.div>

                {/* Harvester */}
                <motion.div
                  className="overflow-hidden p-2 sm:p-3 lg:p-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="px-2 sm:px-4 pt-2 sm:pt-4">
                    <h3 className="text-green-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl">Harvester</h3>
                    <div className="w-20 sm:w-24 md:w-28 h-0.5 sm:h-1 bg-yellow-400 mt-1"></div>
                  </div>
                  <div className="h-[280px] sm:h-[280px] md:h-[350px] lg:h-[450px] w-full overflow-hidden relative rounded py-2 sm:py-3 lg:py-4">
                    <img
                      src="/Harvester.jpg"
                      alt="Harvester"
                      className="w-full h-full object-cover border-2 sm:border-3 md:border-4 border-[#00703C] rounded-lg"
                    />
                  </div>
                </motion.div>
              </div>
            </section>
            {/* <div className="relative w-full h-1 bg-[#E0B100]"></div> */}
          </motion.div>
        </>
      )}

      {/* Sevices Technical Consultation */}
      {activeSection === 'consultation' && (
        <>
          {/* Hero Section for Technical Consultation */}
          <motion.div className="relative w-full h-[360px] sm:h-[400px] md:h-[600px] lg:h-[500px] overflow-hidden flex items-center justify-center">
            {isClient && (
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
              <h2 className="text-white text-center text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-2 md:mb-6">
                TECHNICAL<span className="block md:inline"> CONSULTATION</span>
              </h2>
              <p className="text-white text-[10px] md:text-xl leading-relaxed max-w-4xl text-center mb-4 md:mb-8">
                Farmex's commitment to the rice farming communities does not end in providing quality hybrid rice seeds but extends its hands to those who are in need of free technical consultations. From farmers to agriculture students, Farmex technical team is always ready to share their expertise and strategy on rice farming production and technologies. Regular technical trainings are done to further equip and update our Seed Production Specialists on the latest technologies and having them share new learnings to our farmers.
              </p>
              <Link to="/get-involved" className="bg-[#E0B100F7] text-white px-2 md:px-8 py-1 md:py-3 rounded-lg font-bold hover:bg-[#E0B100F7] transition-colors duration-300 inline-block">
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Image Carousel/Slider Section */}
          <div className="w-full py-8 sm:py-12 bg-white md:bg-[url('/bgmachinerentals.jpg')] md:bg-center md:bg-repeat-y flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-2 sm:px-4 py-4 sm:py-6 flex flex-col items-center">
              {/* Simple slider logic */}
              <TechnicalConsultationSlider />
            </div>
          </div>
        </>
      )}

      {/* Services Training */}
      {activeSection === 'training' && (
        <>
          {/* Hero Section for Training */}
          <motion.div className="relative w-full h-[600px] sm:h-[600px] md:h-[1000px] lg:h-[800px] overflow-hidden">
            {isClient && (
              <motion.img
                src="/newbg-training-section.png"
                alt="Training Background"
                className="w-full h-full object-cover object-top"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            )}
            <div className="absolute inset-0 bg-green-600 bg-opacity-80"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 md:px-8 py-4 pt-24 md:pt-24">
              {/* Title */}
              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-widest mb-8 md:mb-12 text-center">
                Trainings
              </h2>

              {/* Description */}
              <div className="text-white text-[12px] md:text-lg lg:text-xl font-semibold leading-relaxed max-w-6xl mb-4 md:mb-8 text-justify">
                <p className="mb-4">
                  Farmex Corporation is proud to be recognized as a Learning Site for Agriculture (LSA). Since the 2nd quarter of 2025, we have been hosting training programs in partnership with the Agricultural Training Institute (ATI)-CALABARZON. Beyond these collaborations, our LAV Station also opens its doors to schools, farmer clusters, and other organizations seeking practical, science-based learning experiences in agriculture.
                </p>
                <p>
                  As an LSA, we remain committed to helping Filipino farmers and agri-stakeholders across crop industries by providing relevant knowledge, field-based demonstrations, and hands-on training. We believe that continuous education not only improves productivity but also inspires the next generation to pursue and sustain the future of agriculture.
                </p>
              </div>
            </div>
          </motion.div>
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  // Handle swipe start
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle swipe move
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle swipe end
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;

    if (distance > 50) {
      next(); // swipe left → next
    }
    if (distance < -50) {
      prev(); // swipe right → prev
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="flex items-center justify-center w-full px-2 sm:px-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="text-3xl sm:text-4xl md:text-5xl text-[#00703C] hover:text-[#00703C] 
                   px-1 sm:px-2 focus:outline-none ml-1 sm:ml-4"
        >
          &#60;
        </button>

        {/* Main Image */}
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="w-full max-w-[260px] sm:max-w-md md:max-w-lg lg:max-w-2xl 
                   h-56 sm:h-80 md:h-[350px] lg:h-[450px] 
                   object-cover rounded-lg mx-1 sm:mx-4 border-2 border-gray-200 bg-white"
        />

        {/* Right Arrow */}
        <button
          onClick={next}
          className="text-3xl sm:text-4xl md:text-5xl text-[#00703C] hover:text-[#00703C] 
                   px-1 sm:px-2 focus:outline-none mr-1 sm:mr-4"
        >
          &#62;
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-2 sm:mt-4">
        {images.map((_, i) => (
          <span
            key={i}
            className={`mx-0.5 sm:mx-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              i === index ? "bg-yellow-500" : "bg-gray-300"
            }`}
            style={{ display: "inline-block" }}
          ></span>
        ))}
      </div>
    </div>
  );
}