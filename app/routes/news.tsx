import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function meta() {
  return [{ title: "News" }];
}

// Types
type NewsItem = {
  title: string;
  description: string;
  image: string;
  author: string;
  content: string;
  content2?: string;
};

// Mock news data
const newsItems: NewsItem[] = [
  {
    title: "FARMEX Corporation Recognized",
    description: "FARMEX Corporation Recognized as Learning Site for Agriculture I",
    image: "/news1.png",
    author: "-Jayson S. Baldoz, Project Supervisor",
    content: `FARMEX Corporation was officially awarded the Learning Site for Agriculture I (LSA I) Certificate by the Agricultural Training Institute – CALABARZON (ATI-CALABARZON) on May 2, 2025, during a ceremony held at its station in Brgy. Bangyas, Calauan, Laguna.

The event featured key messages from ATI-CALABARZON Center Director Dr. Rolando V. Maningas, FARMEX Chief Operations Officer Mr. Arturo A. Alejar, and Ms. Angelica A. Belarmino, Operations Manager and LSA cooperator, along with the signing of a Memorandum of Understanding (MOU) between the two organizations.

“Ang kasunduang ito ay tanda ng pagsisimula ng ating pagtutulungan upang higit nating maabot ang mga magsasakang Pilipino at mapabuti ang kanilang kabuhayan sa pamamagitan ng pagpapalaganap ng mga makabago at angkop na teknolohiya sa pagsasaka,” said Dir. Rolando V. Maningas during his message at the event.

FARMEX also presented its plans for facility and project development as an LSA through Ms. Myrille T. Adlus (Business Development Manager) and Engr. Karlo Miguel Santos (LEADSTECH Operations Manager).

This was followed by the unveiling of the LSA billboard, a guided tour of the farm and its facilities, and a photo opportunity. As an accredited Learning Site, FARMEX will now serve as a hub for knowledge sharing, sustainable farming practices, and farmer capacity-building in the region.

The event was facilitated by ATI-CALABARZON staff, led by Ms. Abbie del Rosario, Partnerships and Accreditation Section Chief, and Ms. Soledad E. Leal, Agriculturist II and ATI-LSA Focal Person. It was witnessed by executives from the LEADS Group of Companies, including Senior Vice President Romeo Obcena Jr., HR Director Almicko Reyes, Engr. Kelvin Chryzth Velasquez (Chief HR and Transformation Officer of Malveda Holdings Corporation), and Vice President for Finance Catalina Malveda.

The Learning Site for Agriculture (LSA) program is one of ATI’s strategies to promote sustainable and practical agriculture through farm-based learning. An LSA I is a private farm accredited by ATI to serve as a model learning venue where farmers and stakeholders can observe, learn, and adopt best practices and technologies in agriculture.

FARMEX Corporation, a newly ATI-Certified Learning Site for Agriculture I (LSA I), proudly hosted its first batch of farmer training following the official awarding of its LSA I certificate last May. The five-day course, conducted by the Department of Agriculture - Agricultural Training Institute (DA-ATI) CALABARZON, was held on June 9–13, 2025, and focused on strengthening the capabilities of farmers in harvest and post-harvest management to improve Rice Processing Center (RPC) operations.

Held at the FARMEX demonstration site in Brgy. Bangyas, Calauan, Laguna, the training brought together 25 farmer-leaders from different rice clusters/associations in Rizal and Quezon provinces. The activity was conducted in partnership with the Philippine Center for Postharvest Development and Mechanization (PhilMech) and the Coalition Alliance of Farmers in Santa Cruz, Laguna (CAFSCL).

The training program included lectures, field demonstrations, and hands-on activities covering the correct use and maintenance of vital post-harvest machinery such as multi-stage rice mills and mechanical dryers. These sessions aimed to help reduce post-harvest losses, enhance grain quality, and improve the overall efficiency of community-based RPCs.

Dr. Rolando V. Maningas, Center Director of DA-ATI CALABARZON, personally attended the closing program and delivered an inspiring message to the participants. He encouraged them to apply their newly acquired knowledge in their farming communities and to serve as advocates of improved rice post-harvest practices.

As a newly certified LSA I, FARMEX Corporation is honored to contribute to the capacity-building of Filipino farmers and remains committed to supporting ATI’s mission of empowering rural communities through training, innovation, and sustainable agricultural practices.`,
  },
  {
    title: "FARMEX  Regional Training",
    description: "FARMEX Hosts Regional Training on Rice Harvest and Post-Harvest Management",
    image: "/news2.png",
    author: "-Jayson S. Baldoz, Project Supervisor",
    content: `FARMEX Corporation, a newly ATI-Certified Learning Site for Agriculture I (LSA I), proudly hosted its first batch of farmer training following the official awarding of its LSA I certificate last May. The five-day course, conducted by the Department of Agriculture - Agricultural Training Institute (DA-ATI) CALABARZON, was held on June 9–13, 2025, and focused on strengthening the capabilities of farmers in harvest and post-harvest management to improve Rice Processing Center (RPC) operations.

Held at the FARMEX demonstration site in Brgy. Bangyas, Calauan, Laguna, the training brought together 25 farmer-leaders from different rice clusters/associations in Rizal and Quezon provinces. The activity was conducted in partnership with the Philippine Center for Postharvest Development and Mechanization (PhilMech) and the Coalition Alliance of Farmers in Santa Cruz, Laguna (CAFSCL).

The training program included lectures, field demonstrations, and hands-on activities covering the correct use and maintenance of vital post-harvest machinery such as multi-stage rice mills and mechanical dryers. These sessions aimed to help reduce post-harvest losses, enhance grain quality, and improve the overall efficiency of community-based RPCs.

Dr. Rolando V. Maningas, Center Director of DA-ATI CALABARZON, personally attended the closing program and delivered an inspiring message to the participants. He encouraged them to apply their newly acquired knowledge in their farming communities and to serve as advocates of improved rice post-harvest practices.

As a newly certified LSA I, FARMEX Corporation is honored to contribute to the capacity-building of Filipino farmers and remains committed to supporting ATI’s mission of empowering rural communities through training, innovation, and sustainable agricultural practices.`,
  },
  {
    title: "LEADS Agriventures Corporation Showcases Jackpot 102",
    description: "LEADS Agriventures Corporation Showcases Jackpot 102 at Licab’s Kariton Festival",
    image: "/news3.png",
    author: "-Jayson S. Baldoz, Project Supervisor",
    content: `LEADS Agriventures Corporation (LAV) proudly showcased its famous Jackpot 102 hybrid rice variety at the Kariton Festival in Licab, Nueva Ecija, held on March 29, 2025, in celebration of Licab’s 131st Founding Anniversary.

The festival featured a grand parade of kariton (wooden cart) floats, each uniquely decorated to highlight Licab’s rich agricultural heritage. LAV’s float, pulled by a kalabaw (carabao), stood out with its innovative display of ready-to-harvest Jackpot 102 rice plants in pots, that symbolizes the fusion of tradition and modern farming.

Thousands of spectators lined the streets as the parade made its way from Exequiel R. Lina High School, through Don Dalmacio Avenue, and concluded at Liwasang Dalmacio. The festivities also included a Street Dancing Competition, with students from various high schools showcasing vibrant performances, and the much-anticipated Binibining Licab 2025 beauty pageant.

Through their participation, LAV, together with LEADS Agricultural Products Corporation, reaffirmed their commitment to empowering Filipino farmers by providing high-quality seeds, agrochemicals, and innovative farming solutions. Jackpot 102, known for its exceptional yield and grain quality, remains a preferred choice among farmers in Nueva Ecija and beyond.

The return of the Kariton Festival after a five-year hiatus due to COVID-19 was a significant moment for the community. LEADS Agriventures Corporation’s participation was made possible through the initiative of Mr. Randolph Diaz, with the strong support of Chief Operations Officer Mr. Arturo A. Alejar Jr. and Business Development Manager Ms. Myrille T. Adlus.

Through this event, LAV’s presence left a lasting impression on festival-goers and reinforced its commitment to strengthening the agriculture sector—the backbone of the country.`,
  },
  {
    title: "RiceBoard Elects New Officers for 2025–2026",
    description: "The Rice Advocacy Inc. (RiceBoard) has elected its new set of officers for 2025–2026",
    image: "/news4.png",
    author: "",
    content2: "(from left to right: Bonn August Decena (Atlas Fertilizer Corp.), Devadatta Sirdeshpande (Bioseed Research), Joseph Fajardo (TAO Seeds), Recher Ondap (Bayer CropScience, former RB President), Ivy Escobin (ProAgri Seed Corporation), Ruby Eduarte (Syngenta Phils), Jojo Alejar (Farmex Corporation), Anthony Tan (New Hope Corporation) and Dr. Narciso Intal (Inavet Nutrition Technologies Inc.)",
    content: `The Rice Advocacy Inc. (RiceBoard) has elected its new set of officers for 2025–2026 on April 11, 2025, marking a new chapter in its ongoing mission to uplift the Philippine rice industry.

Arturo “Jojo” A. Alejar, Jr. of Farmex Corporation (formerly Leads Agriventures) was elected as President, with Anthony Tan of New Hope as Vice President, Ruby Eduarte of Syngenta as Secretary, Ivy Escobin of PASCO as Treasurer, and Bonn August Decena of Atlas, Devadatta Sirdeshpande of Bioseed and Joseph Fajardo of TAO Seeds as Auditors.

The RiceBoard is a key organization that plays a critical role in representing seed companies and input providers committed to advancing rice productivity in the Philippines.

As a unified body, the RiceBoard consolidates the expertise and resources of both multinational and local seed companies. It serves as a vital channel for disseminating the latest agricultural innovations, such as advanced hybrid rice varieties, drone-assisted farming, and biofertilizer applications directly to rice farmers across the country. These contributions support the broader goal of transforming the Philippine rice sector into a globally competitive and self-reliant industry.

More than just an association of seed companies, the organization actively collaborates with the Department of Agriculture (DA) and continues to be an instrumental partner in helping the DA navigate issues stemming from various rice supply issues, technology adoption and other policy developments.

The new leadership and unified voice of the RiceBoard allows to advocate more on behalf of the industry ensuring that the private sector's insights and innovations are integrated into national agricultural strategies.`,
  },
  {
    title: "USDA Visits LAV for Rice Industry Discussion",
    description: "A delegation from the United States Department of Agriculture (USDA), led by Agricultural Counselor Michael Ward.",
    image: "/news5.png",
    author: "",
    content2: "In the photo (from left): Sherwin Hermosa, USDA Agricultural Counselor Michael Ward, Mayflor Gamino, Myrille Adlus, Angelica Belarmino, USDA Agricultural Specialists: Tricia Joy Arroyo and Florence Sevilla.",
    content: `A delegation from the United States Department of Agriculture (USDA), led by Agricultural Counselor Michael Ward, visited Leads Agriventures (LAV) on August 22, 2024 to discuss the current state of the rice industry in the Philippines. LAV, in collaboration with the LAPC, provided valuable insights into the challenges and opportunities facing the sector.

The USDA expressed interest in gaining a private-sector perspective on the country's rice situation, including an outlook on future developments. Key topics discussed included the extension of the Rice Competitiveness Enhancement Fund (RCEF) program by the Philippine Department of Agriculture until 2030, current industry statistics, regulatory concerns, and potential areas where the USDA could support the Philippine government in improving rice production.

Additionally, discussions touched on the Department of Agriculture’s export priorities, which include rice alongside mangosteen, pineapple, young coconut, and durian, as part of efforts to expand agricultural exports to the U.S. market.`,
  },
  {
    title: "Leads explored the hybrid rice seed technologies",
    description: "Leads explored the hybrid rice seed technologies at Winall China Headquarters in Anhui Province last September 1, 2023.",
    image: "/news6.png",
    author: "",
    content: `Leads explored the hybrid rice seed technologies at Winall China Headquarters in Anhui Province last September 1, 2023. Winall, a strong player in the hybrid rice seed industry and currently holds the second position in market share in China, warmly welcomed the Leads delegation led by Mr. Arturo A. Alejar, Jr., Leads Agriventures’ Chief Operations Officer.

The visit started with a tour of Winall’s exhibit area, showcasing their top-performing varieties. After an insightful tour, Leads presented to Winall an overview of the hybrid rice seed production and distribution landscape in the Philippines. The discussion extended to some upcoming marketing programs for rice and the sales forecast of Jackpot 102 for the next three years.

Leads delegates also explored Winall’s advanced laboratory, cold storage facilities, repacking plants, and research center where nearly 400 hybrid rice seed varieties are undergoing rigorous trials. Impressed by the growing market share of Jackpot 102, Winall committed to supporting Leads in establishing its local seed production trial. This collaborative effort aims to deliver and introduce more suitable seed varieties in Philippine conditions aligning with consumer preferences.

The visit resulted in a strengthened partnership between Leads and Winall, both companies committed to increasing the market presence of Jackpot 102 and subsequently, introducing other Winall varieties in the Philippine market.`,
  },
];

// Slides per news item
const newsSlides: Record<number, { src: string; alt: string }[]> = {
  0: [
    { src: "/news1 1.png", alt: "FARMEX Corporation Recognized" },
    { src: "/news1 7.JPG", alt: "FARMEX Corporation Recognized" },
    { src: "/news1 8.JPG", alt: "FARMEX Corporation Recognized" },
    { src: "/news1 3.png", alt: "FARMEX Corporation Recognized" },
    { src: "/news1 4.png", alt: "FARMEX Corporation Recognized" },
    { src: "/news1 5.png", alt: "FARMEX Corporation Recognized" },
    { src: "/news1 6.JPG", alt: "FARMEX Corporation Recognized" },
  ],
  1: [
    { src: "/news2 1.png", alt: "FARMEX  Regional Training" },
    { src: "/news2 2.png", alt: "FARMEX  Regional Training" },
    { src: "/news2 3.png", alt: "FARMEX  Regional Training" },
    { src: "/news2 4.png", alt: "FARMEX  Regional Training" },
    { src: "/news2 5.png", alt: "FARMEX  Regional Training" },
    { src: "/news2 6.png", alt: "FARMEX  Regional Training" },
  ],
  2: [
    { src: "/news3 1.png", alt: "LEADS Agriventures Corporation Showcases Jackpot 102" },
    { src: "/news3 2.png", alt: "LEADS Agriventures Corporation Showcases Jackpot 102" },
    { src: "/news3 3.png", alt: "LEADS Agriventures Corporation Showcases Jackpot 102" },
    { src: "/news3 4.png", alt: "LEADS Agriventures Corporation Showcases Jackpot 102" },
    { src: "/news3 5.png", alt: "LEADS Agriventures Corporation Showcases Jackpot 102" },
    { src: "/news3 6.png", alt: "LEADS Agriventures Corporation Showcases Jackpot 102" },
    { src: "/news3 7.png", alt: "LEADS Agriventures Corporation Showcases Jackpot 102" },
    { src: "/news3 8.png", alt: "LEADS Agriventures Corporation Showcases Jackpot 102" },
  ],
  3: [
    { src: "/news4 1.png", alt: "RiceBoard Elects New Officers for 2025–2026" },
  ],
  4: [
    { src: "/news5 1.png", alt: "USDA Visits LAV for Rice Industry Discussion" },
  ],
  5: [
    { src: "/news6 1.png", alt: "Leads explored the hybrid rice seed technologies" },
    { src: "/news6 5.jpg", alt: "Leads explored the hybrid rice seed technologies" },
    { src: "/news6 3.png", alt: "Leads explored the hybrid rice seed technologies" },
    { src: "/news6 4.png", alt: "Leads explored the hybrid rice seed technologies" },
  ],
};

function SliderModal({
  images,
  title,
  author,
  content,
  content2,
  onClose,
}: {
  images: { src: string; alt: string }[];
  title: string;
  author: string;
  content: string;
  content2?: string;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && images.length > 1) prev();
      if (e.key === "ArrowRight" && images.length > 1) next();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKey);
    };
  }, [images.length, onClose]);

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    touchStartXRef.current = e.changedTouches[0].screenX;
  };
  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const startX = touchStartXRef.current;
    if (startX == null) return;
    const delta = e.changedTouches[0].screenX - startX;
    touchStartXRef.current = null;
    if (Math.abs(delta) < 40 || images.length <= 1) return;
    if (delta > 0) prev();
    else next();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4" onClick={onClose}>
      <div
        className="relative rounded-lg shadow-xl w-full max-w-5xl p-6 pt-12 overflow-y-auto max-h-[95vh] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/productbg1.png')",
          backgroundSize: "100% 100%",
        }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
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
          {images.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-0 text-2xl text-green-800 px-3 py-1 font-bold bg-black/40 rounded-full hover:bg-gray-800 transition"
            >
              &#60;
            </button>

          )}
          {window.innerWidth < 768 ? (
            <a href={images[index].src} target="_blank" rel="noopener noreferrer">
              <img
                src={images[index].src}
                alt={images[index].alt}
                className="max-h-[35vh] md:max-h-[60vh] object-contain rounded-md border-4 border-green-700 cursor-zoom-in"
              />
            </a>
          ) : (
            <img
              src={images[index].src}
              alt={images[index].alt}
              className="max-h-[35vh] md:max-h-[60vh] object-contain rounded-md border-4 border-green-700"
            />
          )}

          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs bg-black/40 px-2 py-0.5 rounded">
              {index + 1} / {images.length}
            </div>
          )}
          {images.length > 1 && (
            <button
              onClick={next}
              className="absolute right-0 text-2xl text-green-800 px-3 py-1 font-bold bg-black/40 rounded-full hover:bg-gray-800 transition"
            >
              &#62;
            </button>
          )}
        </div>

        {/* Dots */}
        {images.length > 1 && (
          <div className="flex justify-center mb-6">
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`mx-1 w-2.5 h-2.5 rounded-full ${i === index ? "bg-green-700" : "bg-gray-300"}`}
              />
            ))}
          </div>
        )}

        {/* Text Content */}
        <div className="text-left px-2">
          {content2 && (
            <p className="text-gray-700 text-[12px] italic leading-relaxed whitespace-pre-line mb-6">
              {content2}
            </p>
          )}
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
              backgroundImage: "url('/newbgevents.png')",
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
                    loading="lazy"
                  />


                  {/* Content Area */}
                  <div
                    className="flex flex-col justify-between bg-gradient-to-tr from-[#788B5F] to-[#2A4127] flex-grow"
                  >
                    <div className="text-left text-white px-3 pt-2">
                      {/* Title */}
                      <h3 className="text-lg font-semibold mb-5 text-white">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base font-light">{item.description}</p>

                      {/* Author aligned right */}
                      <p className="text-sm text-right text-white mt-4">{item.author}</p>
                    </div>


                    <div className="flex justify-end px-5 pb-5 mt-6">
                      <button
                        onClick={() => setSelectedNewsIndex(index)}
                        className="text-white bg-[#2A4127] px-5 py-2 text-sm font-semibold rounded hover:bg-yellow-500 transition"
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
            content2={newsItems[selectedNewsIndex].content2}
            onClose={() => setSelectedNewsIndex(null)}
          />
        )}
      </div>

      {/*Feedback*/}
      <motion.div>
        {/* Feedback Section */}
        <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[url('/newbgfeedback.png')] bg-cover bg-center flex flex-col items-center justify-center">
          <div className="relative z-10 w-full max-w-6xl">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-[#057A31] text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-widest mb-4">
                Customer Testimonials
              </h2>
            </div>

            {/* Two Card Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Card - Gina Gonzalez */}
              <motion.div
                className="bg-gradient-to-tr from-[#788B5F] to-[#2A4127] rounded-xl p-6 sm:p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                {/* Profile Picture */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src="/gab_image.png"
                      alt="Gina Gonzalez"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial */}
                <div className="text-justify mb-6">
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    “Nagtanim ako ng Jackpot 102 , bilib ako sa dami ng suwi niya. Katamtaman ang taas nito, matibay sa hangin, mahaba ang inuhay at siksik ang butil. Mabigat pa ang timbang ng kada sako ng palay ko. Malambot at masarap ang kanin at may aroma siya”.
                  </p>
                </div>

                {/* Customer Info */}
                <div className="text-center mt-0 md:mt-28">
                  <h4 className="text-white font-bold text-lg sm:text-xl mb-1">
                    Honorato Gabriel
                  </h4>
                  <p className="text-white text-sm sm:text-base">
                    Region 2 (Cagayan Valley)
                  </p>
                  <p className="text-white text-sm sm:text-base">
                    Victoria, Mallig, Isabela Variety planted/used: Jackpot 102
                  </p>
                </div>  
              </motion.div>
                 <motion.div
                className="bg-gradient-to-tr from-[#788B5F] to-[#2A4127] rounded-xl p-6 sm:p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Profile Picture */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src="/est_image.png"
                      alt="Mr. Edson Del Rosario"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial */}
                <div className="text-justify mb-8">
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    “Noong nagtanim ako ng LAV 777, na-obserbahan ko na maganda at marami ang  suhi niya at hindi siya prone sa sakit. Nang lumabas ang uhay niya ay mahaba, at siksik ang butil niya. Mataas ang milling recovery, malambot ang kanin at masarap po siya kainin”.
                  </p>
                </div>

                {/* Customer Info */}
                <div className="text-center mt-0 md:mt-[87px]">
                  <h4 className="text-white font-bold text-lg sm:text-xl mb-1">
                    Melchor Estorga
                  </h4>
                  <p className="text-white text-sm sm:text-base">
                    Cordillera Administrative Region
                  </p>
                  <p className="text-white text-sm sm:text-base">
                    Bulo, Tabuk, Kalinga Variety planted/used: LAV 777
                  </p>
                </div>
              </motion.div>

              {/* Right Card - Mr. Edson Del Rosario */}
              <motion.div
  className="bg-gradient-to-tr from-[#788B5F] to-[#2A4127] rounded-xl p-6 sm:p-8 shadow-lg flex flex-col justify-between h-full"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  {/* Profile Picture */}
  <div className="flex justify-center mb-6">
    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
      <img
        src="/edison.png"
        alt="Mr. Edson Del Rosario"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Testimonial */}
  <div className="text-justify mb-8 flex-1">
    <p className="text-white text-sm sm:text-base leading-relaxed">
      “Sa tayo ng palay ng LAV 777, pwedeng pwedeng irekomenda sa mga magsasaka. Talagang kung ang habol natin ay maparami ang ani para tayo ay makaahon sa gastos, ito ay rekomendado ko. Kitang-kita naman natin, ang daming pumupuri. Maganda, matas, mahaba ang uhay.”
    </p>
  </div>

  {/* Customer Info */}
  <div className="text-center mt-4">
    <h4 className="text-white font-bold text-lg sm:text-xl mb-1">
      Mr. Edson Del Rosario
    </h4>
    <p className="text-white text-sm sm:text-base">
      Farmer Calintaan, Occidental Minodoro
    </p>
  </div>
</motion.div>


                <motion.div
              className="bg-gradient-to-tr from-[#788B5F] to-[#2A4127] rounded-xl p-6 sm:p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Profile Picture */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src="/gina.png"
                      alt="Mr. Edson Del Rosario"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial */}
                <div className="text-justify mb-8">
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    “Sa Jackpot, nagustuhan yon dahil mataas ang milling recovery, nag-aaverage sya ng almost 67 to 68 (percent), and yung quality ng bigas niya ay buo at malambot. Regular milled pa lang yun. Siguro mas lalong quality pa ang labas ng bigas no’n kapag i-papolish pa yun. Nakasubok na kami makakain ng Jackpot (na binigas). Maganda na ang butil sa Single-pass pa lang. Nagugustuhan ng mga suki ko, laging hinahanap ang Jackpot na bigas. Maganda ang pagkakanin, masarap ang kanin, quality. Nasubukan na namin at kumita na kami ng Malaki.”
                  </p>
                </div>

                {/* Customer Info */}
                <div className="text-center mt-0 md:mt-[87px]">
                  <h4 className="text-white font-bold text-lg sm:text-xl mb-1">
                    Gina Gonzalez
                  </h4>
                  <p className="text-white text-sm sm:text-base">
                   Rice trader and Miller, Brgy. Tubuan, Pila, Laguna
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* <div className="relative w-full h-1 bg-[#E0B100]"></div> */}
      </motion.div>
    </div>
  );
}
