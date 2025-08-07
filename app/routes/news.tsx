import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function meta() {
  return [{ title: "Farmex - News" }];
}

// Mock news data
const newsItems = [
  {
    title: "Hybrid Rice Expansion",
    description: "Farmex expands hybrid rice production to boost yields across Luzon.",
    image: "/news1.jpg",
    author: "Admin - Farmex",
    content:
      "Farmex continues to expand hybrid rice initiatives in major provinces of Luzon to improve agricultural yields and support food security. This program involves training, seed distribution, and field monitoring across multiple municipalities.",
  },
  {
    title: "Farmer Training 2025",
    description: "A new round of technical training for farmers begins this August.",
    image: "/news2.jpg",
    author: "Training Department",
    content:
      "Farmex will launch a new training series focused on climate-smart agriculture, pest management, and machinery operation. This will include both in-person and online modules for accessibility.",
  },
  {
    title: "Irrigation Innovations",
    description: "New water-efficient systems tested in pilot areas in Central Luzon.",
    image: "/news3.jpg",
    author: "Irrigation Team",
    content:
      "Farmex engineers are piloting new low-pressure irrigation systems in Central Luzon. These systems are expected to save up to 40% more water while maintaining crop output, especially in dry seasons.",
  },
  {
    title: "Machinery Rentals Up",
    description: "LAV expands machinery availability in high-demand regions.",
    image: "/news4.jpg",
    author: "LAV Program",
    content:
      "To meet growing farmer demands, LAV stations now offer extended rental schedules, increased machine inventory, and online booking support in high-demand zones like Pampanga and Nueva Ecija.",
  },
  {
    title: "Organic Farming Push",
    description: "Efforts increase to promote sustainable and organic techniques.",
    image: "/news5.jpg",
    author: "Sustainability Team",
    content:
      "With growing interest in sustainability, Farmex is scaling organic compost production and biofertilizer distribution. A new community-supported organic farm will also be inaugurated this September.",
  },
  {
    title: "Youth in Agriculture",
    description: "Farmex encourages youth participation in agriculture tech programs.",
    image: "/news6.jpg",
    author: "Youth & Innovation Division",
    content:
      "Farmex has launched 'AgriTech Youth Drive' — a program aimed at getting young people involved in modern farming techniques through coding, drone operation, and soil sensor technologies.",
  },
];

// Slides per news item
const newsSlides: Record<number, { src: string; alt: string }[]> = {
  0: [
    { src: "/hybrid1.jpg", alt: "Hybrid 1" },
    { src: "/hybrid2.jpg", alt: "Hybrid 2" },
  ],
  1: [
    { src: "/training1.jpg", alt: "Training 1" },
    { src: "/training2.jpg", alt: "Training 2" },
  ],
  2: [
    { src: "/irrigation1.jpg", alt: "Irrigation 1" },
    { src: "/irrigation2.jpg", alt: "Irrigation 2" },
  ],
  3: [
    { src: "/lav1.jpg", alt: "LAV 1" },
    { src: "/lav2.jpg", alt: "LAV 2" },
  ],
  4: [
    { src: "/organic1.jpg", alt: "Organic 1" },
    { src: "/organic2.jpg", alt: "Organic 2" },
  ],
  5: [
    { src: "/youth1.jpg", alt: "Youth 1" },
    { src: "/youth2.jpg", alt: "Youth 2" },
  ],
};

function SliderModal({
  images,
  title,
  author,
  content,
  onClose,
}: {
  images: { src: string; alt: string }[];
  title: string;
  author: string;
  content: string;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4">
      <div
        className="relative rounded-lg shadow-xl w-full max-w-5xl p-6 pt-12 overflow-y-auto max-h-[95vh] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/productbg1.png')",
          backgroundSize: "100% 100%",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-black text-3xl font-bold z-50"
        >
          &times;
        </button>

        {/* Image Slider First */}
        <div className="relative flex items-center justify-center mb-6">
          <button
            onClick={prev}
            className="absolute left-0 text-3xl text-green-800 px-3 font-bold"
          >
            &#60;
          </button>
          <img
            src={images[index].src}
            alt={images[index].alt}
            className="w-full h-[320px] sm:h-[400px] md:h-[450px] object-cover rounded-md border-4 border-green-700"
          />
          <button
            onClick={next}
            className="absolute right-0 text-3xl text-green-800 px-3 font-bold"
          >
            &#62;
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mb-6">
          {images.map((_, i) => (
            <span
              key={i}
              className={`mx-1 w-3 h-3 rounded-full ${i === index ? "bg-green-700" : "bg-gray-300"
                }`}
            ></span>
          ))}
        </div>

        {/* Text Content */}
        <div className="text-left px-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{title}</h2>
          <p className="text-sm text-gray-500 italic mb-4">{author}</p>
          <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}


// Main Component
export default function News() {
  const [isClient, setIsClient] = useState(false);
  const [selectedNewsIndex, setSelectedNewsIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen w-full">
      {/* Background Image */}
      <div className="relative min-h-screen w-full">
        {isClient && (
          <motion.img
            src="/bgnews.png"
            alt="News Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}

        {/* Page Content */}
        <div className="relative z-10 flex flex-col items-center min-h-screen px-4 py-20 space-y-8 mt-6">
          {/* EVENTS Heading */}
          <div className="w-full max-w-6xl">
            <h2 className="text-white text-3xl md:text-4xl font-extrabold uppercase tracking-widest">
              Events
            </h2>
          </div>

          {/* News Box */}
          <div
            className="bg-no-repeat bg-center bg-contain p-8 md:p-12 max-w-6xl w-full text-center mt-20"
            style={{
              backgroundImage: "url('/bgcontact.png')",
              backgroundSize: "100% 100%",
            }}
          >
            {/* News Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className="shadow-md flex flex-col overflow-hidden h-[480px]"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[180px] object-cover"
                  />


                  {/* Content Area */}
                  <div
                    className="flex flex-col justify-between bg-no-repeat bg-cover bg-center flex-grow"
                    style={{
                      backgroundImage: "url('/bgnews1.png')",
                      backgroundSize: "100% 100%",
                      boxShadow: `
      inset 0 0 12px rgba(234, 179, 8, 0.8),
      0 6px 14px rgba(0, 0, 0, 0.25)`,
                    }}
                  >

                    <div className="text-left text-gray-800 px-5 pt-5">
                      {/* Title */}
                      <h3 className="text-lg font-semibold mb-14 text-white">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base font-light">{item.description}</p>

                      {/* Author aligned right */}
                      <p className="text-sm text-right text-gray-800 mt-4">{item.author}</p>
                    </div>


                    <div className="flex justify-end px-5 pb-5 mt-6">
                      <button
                        onClick={() => setSelectedNewsIndex(index)}
                        className="text-white bg-yellow-400 px-5 py-2 text-sm font-semibold rounded hover:bg-yellow-500 transition"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedNewsIndex !== null && (
          <SliderModal
            images={newsSlides[selectedNewsIndex]}
            title={newsItems[selectedNewsIndex].title}
            author={newsItems[selectedNewsIndex].author}
            content={newsItems[selectedNewsIndex].content}
            onClose={() => setSelectedNewsIndex(null)}
          />
        )}
      </div>
    </div>
  );
}
