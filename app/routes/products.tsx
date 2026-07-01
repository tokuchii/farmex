import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from "react";

type Product = {
  name: string;
  image: string;
  desc: string;
  desc1?: string;
  details?: [string, string][];
  code: string;
  pdf: string;
};

export function meta() {
  return [{ title: "Products" }];
}

const productList: Product[] = [
  {
    name: "Jackpot 102",
    image: "J102.png",
    desc: "Hybrid Rice Seed",
    code: "NSIC 2021 Rc 666H",
    details: [
      ["Potential Yield", "18 MT or 360 cavans"],
      ["Maturity (DAS)", "110-115 days"],
      ["Milling Recovery", "71%"],
      ["Grain Type", "Long and slender"],
      ["Amylose Content", "14.8%"],
      ["Plant Height", "109 CM"],
      ["Number of tillers", "12-13"],
      ["Seeding rate:", "Direct seeded: 21-24 KG\nTransplanted: 15-18 KG"],
    ],
    pdf: "/downloads/jackpot-102.pdf",
  },
  {
    name: "LAV 777",
    image: "lav777_product.png",
    desc: "Hybrid Rice Seed",
    code: "NSIC 2021 Rc 656H",
    details: [
      ["Potential Yield", "11 MT or 220 cavans and above"],
      ["Maturity (DAS)", "109-113 Days"],
      ["Milling Recovery", "75%"],
      ["Grain Type", "Long and slender"],
      ["Amylose Content", "20.1%"],
      ["Plant Height", "112 CM"],
      ["Number of tillers", "12-14"],
      ["Seeding rate:", "Direct seeded: 21-24 KG\nTransplanted: 15-18 KG"],
    ],
    pdf: "/downloads/lav-777.pdf",
  },
  {
    name: "Leads 143",
    image: "leads143_product.png",
    desc: "Hybrid Rice Seed",
    code: "NSIC 2022 Rc 694H",
    details: [
      ["Potential Yield", "11 MT or 220 cavans and above"],
      ["Maturity (DAS)", "112-114 days"],
      ["Milling Recovery", "68.7%"],
      ["Grain Type", "Long and slender"],
      ["Amylose Content", "13.7%"],
      ["Plant Height", "111 CM"],
      ["Number of tillers", "12-13"],
      ["Seeding rate:", "Direct seeded: 21-24 KG\nTransplanted: 15-18 KG"],
    ],
    pdf: "/downloads/leads143.pdf",
  },
  {
    name: "Jose Maria Milled Rice",
    image: "/jose1.png",
    desc: "Regular-milled Rice",
    code: "",
    desc1: "Farmex has entered the whole value-chain of rice production by selling milled rice to the local market. Jose Maria is Farmex's regular-milled rice similar to the Dinorado type. As a product of contract growing, Farmex helps the rice growers sell their produce by buying back their harvests at the prevailing market price. These fresh palay are then milled through our own milling facility and packaged as Jose Maria milled rice, named after the Farmex's Founder and President, Mr. Jose Maria Fernando L. Malveda.",
    pdf: "/downloads/jose-maria.pdf",
  },
  {
    name: "Jackpot ready",
    image: "/jr_new_image2.png",
    code: "",
    desc: "Hybrid Rice Seedlings",
    desc1: "Jackpot Ready is a product development where Jackpot 102 seeds have been grown into healthy 15-21 day-old seedlings. This technology gives the farmers an option of ready-to-plant seedlings and provides convenience to farmers who want to save time and energy during pre-planting stage.",
    pdf: "/downloads/jackpot-ready.pdf",
  },
];

const DetailIcon = ({ index }: { index: number }) => {
  const icons = [
    <svg key={0} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
    <svg key={1} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    <svg key={2} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>,
    <svg key={3} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="3" ry="7"/></svg>,
    <svg key={4} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/></svg>,
    <svg key={5} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><polyline points="8 7 12 3 16 7"/><polyline points="8 17 12 21 16 17"/></svg>,
    <svg key={6} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12"/><path d="M12 12C12 7 8 4 4 5"/><path d="M12 12C12 7 16 4 20 5"/></svg>,
    <svg key={7} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3"/><path d="M12 11v10"/><path d="M9 18l3 3 3-3"/><path d="M6.343 17.657a8 8 0 1011.314 0"/></svg>,
  ];
  const icon = icons[index] ?? icons[0];
  return (
    <span className="w-4 h-4 text-green-700 flex items-center justify-center">
      {React.cloneElement(icon, { className: "w-4 h-4" })}
    </span>
  );
};

export default function Products() {
  const [isClient, setIsClient] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProduct]);

  useEffect(() => { setIsClient(true); }, []);

  const closeModal = () => setSelectedProduct(null);

  const handleDownload = (pdf: string) => {
    if (!pdf) return;
    const link = document.createElement("a");
    link.href = pdf;
    link.download = pdf.split("/").pop() || "file.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (!selectedProduct && !showError) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showError) { setShowError(false); return; }
        if (selectedProduct) closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [selectedProduct, showError]);

  return (
    <>
      <div className="min-h-screen relative">
        {/* Hero */}
        <motion.div className="relative w-full h-64 sm:h-96 md:h-[600px] lg:h-[500px] overflow-hidden">
          {isClient && (
            <motion.img
              src="/bgproducts.png"
              alt="Farm Image"
              className="w-full h-full object-cover object-top"
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

        {/* Products Grid */}
        <motion.div>
          <section
            className="relative w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center bg-white justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/About us 1.png')" }}
          >
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
              {productList.map((product) => (
                <div key={product.name} className="flex flex-col items-center h-full">
                  <div className="w-full overflow-hidden rounded mb-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-60 object-contain transform transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                  <h4 className="font-bold text-green-700 text-2xl mb-3 text-center">{product.name}</h4>
                  <p className="text-gray-700 text-base text-center mb-6">{product.desc}</p>
                  <div className="mt-auto w-full flex justify-center">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="px-5 py-2.5 bg-[#057A31] text-white text-base rounded hover:bg-green-900 transition"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>

      {/* ── MODAL ── */}
      {selectedProduct && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 backdrop-blur-sm bg-black/40 z-40"
            onClick={closeModal}
          />

          {/* Scroll wrapper */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 sm:p-6">

              {/* Card */}
              <div className="relative bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden">

                {/* Close */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-4 z-10 text-gray-400 hover:text-gray-700 text-3xl font-light leading-none"
                  aria-label="Close modal"
                >
                  &times;
                </button>

                {/* ── TWO-COLUMN BODY ── */}
                <div className="flex flex-col md:flex-row">

                  {/* LEFT — image fills the entire panel */}
                  <div className="w-full md:w-[38%] relative flex flex-col border-b md:border-b-0 md:border-r border-gray-100 bg-white">
                    {/* Name + code sit on top of / above the image */}
                    <div className="px-6 pt-8 pb-4 flex flex-col items-center">
                      <h2 className="text-green-800 text-2xl sm:text-3xl font-extrabold text-center uppercase leading-tight mb-1">
                        {selectedProduct.name}
                      </h2>
                      {selectedProduct.code && (
                        <p className="text-green-600 text-sm font-semibold text-center flex items-center gap-1.5 flex-wrap justify-center">
                          <span aria-hidden="true">✿</span>
                          {selectedProduct.code}
                          <span aria-hidden="true">✿</span>
                        </p>
                      )}
                    </div>

                    {/* Image — fills remaining space, covers the left panel */}
                    <div className="flex-1 w-full overflow-hidden" style={{ minHeight: "280px" }}>
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover object-center"
                        style={{ minHeight: "280px", maxHeight: "420px" }}
                      />
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="w-full md:w-[62%] flex flex-col">

                    {/* Detail rows or description */}
                    <div className="px-6 pt-6 pb-4 flex-1 ">
                      {selectedProduct.details ? (
                        <>
                          <h3 className="text-green-800 font-bold text-xs tracking-widest uppercase mb-1">
                            PRODUCT INFORMATION
                          </h3>
                          <div className="w-14 h-0.5 bg-green-700 mb-3" />

                          <div className="divide-y divide-gray-100">
                            {selectedProduct.details.map(([label, value], idx) => {
                              const isSeeding = label.toLowerCase().includes("seeding");
                              const lines = value.split("\n").filter(Boolean);

                              return (
                                <div key={idx} className="flex items-start gap-3 py-3">
                                  {/* Icon badge */}
                                  <div className="w-8 h-8 rounded-full bg-green-50 border border-green-100 flex items-center justify-center shrink-0 mt-0.5">
                                    <DetailIcon index={idx} />
                                  </div>

                                  {isSeeding ? (
                                    <div className="flex-1 min-w-0">
                                      <p className="font-semibold text-gray-800 text-sm mb-1">{label}</p>
                                      <div className="space-y-0.5">
                                        {lines.map((line, li) => {
                                          const [part, kg] = line.split(":");
                                          return (
                                            <div key={li} className="flex justify-between text-sm">
                                              <span className="font-medium text-gray-700">{part.trim()}</span>
                                              <span className="text-gray-500 text-right">{kg?.trim()}</span>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="flex flex-1 min-w-0 justify-between items-center gap-4">
                                      <span className="font-semibold text-gray-800 text-sm">{label}</span>
                                      <span className="text-gray-500 text-sm text-right shrink-0">{value}</span>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </>
                      ) : (
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {selectedProduct.desc1 || selectedProduct.desc}
                        </p>
                      )}
                    </div>

                  </div>
                </div>

                {/* Footer — full width below both columns */}
                <div className="bg-gray-50 border-t border-gray-200 px-6 py-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                    {/* Left: phone + address */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">

                      {/* Phone block */}
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.1 3.3a1 1 0 01-.23 1.05L7.5 9.6a16 16 0 006.9 6.9l1.57-1.62a1 1 0 011.05-.23l3.3 1.1A1 1 0 0121 16.72V19a2 2 0 01-2 2h-1C9.16 21 3 14.84 3 7V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 text-sm leading-none mb-0.5">For sales inquiries,</p>
                          <p className="text-gray-500 text-xs">or call{" "}
                            <a href="tel:+639451709401" className="text-green-700 font-semibold hover:underline">
                              (+63) 945 170 9401
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* Divider on sm+ */}
                      <div className="hidden sm:block w-px h-8 bg-gray-300" />

                      {/* Address block */}
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <a
                          href="https://www.google.com/maps?q=14.330623,121.076050"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-gray-500 hover:underline leading-relaxed"
                        >
                          Unit A 201 and Alfresco Area 2nd Floor<br />
                          Coral Center Mall Barangay San Francisco,<br />
                          Biñan Laguna
                        </a>
                      </div>
                    </div>

                    {/* Right: buttons */}
                    <div className="flex gap-2 shrink-0">
                      <a
                        href="/get-involved"
                        className="px-4 py-2.5 border-2 border-green-700 text-green-700 rounded-lg text-sm font-semibold hover:bg-green-50 transition text-center flex items-center gap-1.5 whitespace-nowrap"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Contact Us
                      </a>

                      {selectedProduct.pdf &&
                        selectedProduct.name !== "Jose Maria Milled Rice" &&
                        selectedProduct.name !== "Jackpot ready" && (
                          <button
                            onClick={() => handleDownload(selectedProduct.pdf)}
                            className="px-4 py-2.5 bg-green-700 text-white rounded-lg text-sm font-semibold hover:bg-green-900 transition flex items-center gap-2 whitespace-nowrap"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M1.4 12.4444H12.6V7H14V13.2222C14 13.6518 13.6866 14 13.3 14H0.7C0.313404 14 0 13.6518 0 13.2222V7H1.4V12.4444ZM8.4 4.66667H11.9L7 10.1111L2.1 4.66667H5.6V0H8.4V4.66667Z" fill="white" />
                            </svg>
                            Download PDF
                          </button>
                        )}
                    </div>

                  </div>
                </div>
                {/* END FOOTER */}

              </div>
            </div>
          </div>

          {/* Error Modal */}
          {showError && (
            <>
              <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]" onClick={() => setShowError(false)} />
              <div className="fixed inset-0 flex items-center justify-center z-[70]">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center relative">
                  <button
                    onClick={() => setShowError(false)}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                    aria-label="Close error modal"
                  >
                    &times;
                  </button>
                  <h3 className="text-lg font-semibold mb-4 text-red-600">
                    Sorry, this product does not have a PDF available for download.
                  </h3>
                  <button
                    onClick={() => setShowError(false)}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800"
                  >
                    OK
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
