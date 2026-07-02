import { useEffect, useRef, useState } from "react";
import { data } from "react-router";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";
import LazyLoadImagePkg from "react-lazy-load-image-component";
import { getTestimonials } from "~/lib/testimonials.server";
import { getNews, type NewsRecords } from "~/lib/news.server";
const { LazyLoadImage } = LazyLoadImagePkg;

export async function loader() {
  const [testimonials, news] = await Promise.all([getTestimonials(), getNews()]);
  return data({ testimonials, news });
}

export function meta() {
  return [{ title: "News" }];
}

// Types
type NewsItem = {
  title: string;
  description: string;
  image: string;
  author: string;
  position?: string;
  content: string;
  content2?: string;
  location?: string;
  organization?: string;
};

const formatAuthorDisplay = (author: string, position?: string) => {
  const cleanAuthor = author.trim();
  const cleanPosition = position?.trim() ?? "";
  if (cleanAuthor && cleanPosition) return `-${cleanAuthor}, ${cleanPosition}`;
  if (cleanAuthor) return `-${cleanAuthor}`;
  return cleanPosition;
};

const mapNewsRecordToItem = (record: NewsRecords): NewsItem => ({
  title: record.title,
  description: record.summary,
  image: record.images[0] ?? "",
  author: record.author,
  position: record.position || undefined,
  content: record.summary,
  content2: record.notes || undefined,
  location: record.location || undefined,
  organization: record.organization || undefined,
});

const mapNewsSlides = (record: NewsRecords) =>
  record.images.map((src) => ({ src, alt: record.title }));

const splitParagraphs = (text: string) =>
  text
    .split(/\r?\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

// Icons
function IconPin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}
function IconBuilding() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

// NewsCard — UNCHANGED
function NewsCard({
  item,
  index,
  onReadMore,
}: {
  item: NewsItem;
  index: number;
  onReadMore: (index: number) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[400px] cursor-pointer rounded-xl overflow-hidden shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0"
        style={{
          filter: hovered ? "blur(4px) brightness(0.35)" : "blur(0px) brightness(1)",
          transition: "filter 0.5s ease",
        }}
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-[#1a5c35]" />
        )}
      </div>

      <div
        className="absolute inset-0 flex flex-col justify-end p-5"
        style={{
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.4s ease",
          pointerEvents: hovered ? "none" : "auto",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        <div className="relative z-10">
          <h3 className="text-white text-[15px] font-semibold leading-snug mb-1">
            {item.title}
          </h3>
          <p className="text-white/70 text-[12px] leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>

      <div
        className="absolute inset-0 flex flex-col justify-between p-6 z-10"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: hovered ? "auto" : "none",
        }}
      >
        <h3 className="text-white text-[17px] font-semibold leading-snug">
          {item.title}
        </h3>

        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3 border-b border-white/20 pb-3">
            <div className="w-8 h-8 border border-white/40 rounded-md flex items-center justify-center shrink-0">
              <IconPin />
            </div>
            <div>
              <span className="block text-white/60 text-[11px] uppercase tracking-wider font-medium mb-0.5">
                Location
              </span>
              <span className="text-white/90 text-[13px] leading-snug">
                {item.location ?? "Philippines"}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 border-b border-white/20 pb-3">
            <div className="w-8 h-8 border border-white/40 rounded-md flex items-center justify-center shrink-0">
              <IconBuilding />
            </div>
            <div>
              <span className="block text-white/60 text-[11px] uppercase tracking-wider font-medium mb-0.5">
                Organization
              </span>
              <span className="text-white/90 text-[13px] leading-snug">
                {item.organization ?? "LEADS Group of Companies"}
              </span>
            </div>
          </div>

          {(item.author || item.position) ? (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 border border-white/40 rounded-md flex items-center justify-center shrink-0">
                <IconUser />
              </div>
              <div>
                <span className="block text-white/60 text-[11px] uppercase tracking-wider font-medium mb-0.5">
                  Author
                </span>
                <span className="text-white/90 text-[13px] leading-snug">
                  {formatAuthorDisplay(item.author, item.position)}
                </span>
              </div>
            </div>
          ) : null}
        </div>

        <button
          onClick={() => onReadMore(index)}
          className="w-full py-3 rounded-lg text-white text-[13px] font-semibold uppercase tracking-widest hover:opacity-80 transition-opacity"
          style={{ background: "#1a5c35" }}
        >
          Read More
        </button>
      </div>
    </div>
  );
}

// SliderModal — CHANGE 1: removed backgroundImage, now uses plain white bg
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

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* CHANGE 1: replaced backgroundImage style with clean white card */}
      <div
        className="relative rounded-xl shadow-2xl w-full max-w-5xl p-6 pt-12 overflow-y-auto max-h-[95vh] bg-white"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Green accent bar at top of modal */}
        <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-xl" style={{ background: "linear-gradient(90deg, #1a5c35, #4ade80)" }} />

        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-3xl font-bold z-50 transition-colors"
        >
          &times;
        </button>

        {images.length > 0 && (
        <div className="relative flex items-center justify-center mb-6">
          {images.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-0 text-2xl text-green-700 px-3 py-1 font-bold bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              &#60;
            </button>
          )}
          {isMobile ? (
            <a href={images[index].src} target="_blank" rel="noopener noreferrer">
              <LazyLoadImage
                src={images[index].src}
                alt={images[index].alt}
                className="max-h-[35vh] md:max-h-[60vh] object-contain rounded-md border-4 border-green-700 cursor-zoom-in"
              />
            </a>
          ) : (
            <LazyLoadImage
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
              className="absolute right-0 text-2xl text-green-700 px-3 py-1 font-bold bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              &#62;
            </button>
          )}
        </div>
        )}

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

        <div className="text-left px-2">
          {content2 ? (
            <div className="mb-6 space-y-3 border-l-2 border-green-200 pl-3">
              {splitParagraphs(content2).map((paragraph, index) => (
                <p
                  key={`content2-${index}`}
                  className="text-gray-500 text-[12px] italic leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
          {author ? (
            <p className="text-sm text-gray-400 italic mb-4">{author}</p>
          ) : null}
          <div className="space-y-4">
            {splitParagraphs(content).map((paragraph, index) => (
              <p
                key={`content-${index}`}
                className="text-gray-700 text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function News() {
  const { testimonials, news } = useLoaderData<typeof loader>();
  const newsItems = news.map(mapNewsRecordToItem);
  const [selectedNewsIndex, setSelectedNewsIndex] = useState<number | null>(null);

  const selectedNews = selectedNewsIndex !== null ? news[selectedNewsIndex] : null;
  const selectedItem = selectedNewsIndex !== null ? newsItems[selectedNewsIndex] : null;

  return (
    <div className="min-h-screen w-full">

      <div
        className="relative min-h-screen w-full"
        style={{
          background: "#00743B",
        }}
      >
        <div className="relative z-10 flex flex-col items-center min-h-screen px-4 py-20 space-y-8 mt-6">

          <div className="w-full max-w-6xl">
            <div className="flex items-center gap-3 mb-1">
              <div
                className="w-1 h-9 rounded-full shrink-0"
                style={{ background: "linear-gradient(180deg, #4ade80, #16a34a)" }}
              />
              <h2 className="text-white text-3xl md:text-4xl font-extrabold uppercase tracking-widest">
                Events
              </h2>
            </div>
            <p className="text-white/40 text-sm ml-4">
              Latest news and milestones from the LEADS Group of Companies
            </p>
          </div>

          <div className="max-w-6xl w-full px-2 mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <NewsCard
                  key={news[index].id}
                  item={item}
                  index={index}
                  onReadMore={setSelectedNewsIndex}
                />
              ))}
            </div>
          </div>
        </div>

        {selectedNews && selectedItem && (
          <SliderModal
            images={mapNewsSlides(selectedNews)}
            title={selectedItem.title}
            author={formatAuthorDisplay(selectedItem.author, selectedItem.position)}
            content={selectedItem.content}
            content2={selectedItem.content2}
            onClose={() => setSelectedNewsIndex(null)}
          />
        )}
      </div>

      {/* Testimonials */}
      <motion.div>
        <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f7f2] flex flex-col items-center justify-center">
          <div className="relative z-10 w-full max-w-6xl">

            {/* Accent-bar heading */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-1">
                <div
                  className="w-1 h-9 rounded-full shrink-0"
                  style={{ background: "linear-gradient(180deg, #16a34a, #14532d)" }}
                />
                <h2 className="text-[#1a5c35] text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-widest">
                  Customer Testimonials
                </h2>
              </div>
              <p className="text-gray-400 text-sm ml-4">
                What farmers say about our varieties
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-gradient-to-tr from-[#788B5F] to-[#2A4127] rounded-xl p-6 sm:p-8 shadow-lg flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index === 0 ? 0 : 0.1 }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      {testimonial.image ? (
                        <LazyLoadImage
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-white/20" />
                      )}
                    </div>
                  </div>
                  <div className="text-justify mb-6 flex-1">
                    <p className="text-white text-sm sm:text-base leading-relaxed">
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-white font-bold text-lg sm:text-xl mb-1">{testimonial.name}</h4>
                    {testimonial.location ? (
                      <p className="text-white text-sm sm:text-base">{testimonial.location}</p>
                    ) : null}
                    {testimonial.position ? (
                      <p className="text-white text-sm sm:text-base">{testimonial.position}</p>
                    ) : null}
                    {testimonial.variety ? (
                      <p className="text-white text-sm sm:text-base">{testimonial.variety}</p>
                    ) : null}
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </section>
      </motion.div>

    </div>
  );
}