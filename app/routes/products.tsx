import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from "react";

// Define Product type
type Product = {
  name: string;
  image: string;
  desc: string;
  desc1?: string;
  details?: [string, string][];
  code: string
  pdf: string;
};

export function meta() {
  return [
    { title: "Products" },
  ];
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
      ["Seeding rate: \n Direct seeded Transplanted", "21-24 KG \n 15-18 KG"]
    ],
    pdf: "/pdfs/jackpot.pdf"
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
      ["Seeding rate: \n Direct seeded Transplanted", "21-24 KG \n 15-18 KG"]
    ],
    pdf: "/pdfs/lav777.pdf"
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
      ["Seeding rate: \n Direct seeded Transplanted", "21-24 KG \n 15-18 KG"]
    ],
    pdf: "/pdfs/leads143.pdf"
  },
  {
    name: "Jose Maria Milled Rice",
    image: "/jose1.png",
    desc: "Regular-milled Rice",
    code: "",
    desc1: "LAV has entered the whole value-chain of rice production by selling milled rice to the local market. Jose Maria is LAV’s regular-milled rice similar to the Dinorado type. As a product of contract growing, LAV helps the rice growers sell their produce by buying back their harvests at the prevailing market price. These fresh palay are then milled through our own milling facility and packaged as Jose Maria milled rice, named after the LAV’s Founder and President, Mr. Jose Maria Fernando L. Malveda.",
    pdf: "/downloads/jose-maria.pdf"
  },
  {
    name: "Jackpot ready",
    image: "/jr_new_image2.png",
    code: "",
    desc: "Hybrid Rice Seedlings",
    desc1: "Jackpot Ready is a product development where Jackpot 102 seeds have been grown into healthy 15-21 day-old seedlings. This technology gives the farmers an option of ready-to-plant seedlings and provides convenience to farmers who want to save time and energy during pre-planting stage.",
    pdf: "/downloads/jackpot-ready.pdf"
  },
];


export default function Products() {
  const [isClient, setIsClient] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up just in case
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const closeModal = () => setSelectedProduct(null);


  const handleDownload = async (pdf: string) => {
    if (!pdf) {
      setShowError(true);
      return;
    }

    try {
      // Check if PDF exists
      const res = await fetch(pdf, { method: "HEAD" });
      if (!res.ok) {
        // File not found (404, 403, etc.)
        setShowError(true);
        return;
      }

      // If file exists, trigger download
      window.location.href = pdf;
    } catch (error) {
      // Network or CORS error
      setShowError(true);
    }
  };



 useEffect(() => {
  // Only add listener if either modal is open
  if (!selectedProduct && !showError) return;

  const handleEsc = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      // Close error modal first if open
      if (showError) {
        setShowError(false);
        return;
      }
      // Otherwise close product modal if open
      if (selectedProduct) {
        closeModal();
      }
    }
  };

  window.addEventListener("keydown", handleEsc);

  return () => {
    window.removeEventListener("keydown", handleEsc);
  };
}, [selectedProduct, showError]);



  return (
    <>
      {/* Main content */}
      <div className="min-h-screen relative">
        {/* Hero Section */}
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

        {/* Products Section */}
        <motion.div>
          <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center bg-white justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/About us 1.png')" }}>
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
              {productList.map((product) => (
                <div
                  key={product.name}
                  className="flex flex-col items-centeR h-full"
                >
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

      {/* Modal + Blur Background */}
      {selectedProduct && (
        <>
          {/* Blurred Background Layer */}
          <div className="fixed inset-0 backdrop-blur-sm bg-black/30 z-40"></div>

          {/* Modal Layer */}
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 md:pt-32 px-4 overflow-auto">

            <div
              className="rounded-lg w-full max-w-6xl bg-cover bg-center flex flex-col md:flex-row overflow-hidden relative bg-white min-h-[400px] pr-12"
              style={{ backgroundImage: "url('/bgmodal1.png')" }}
            >

              {/* Left Side */}
              <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-center items-center">
                <div className="w-full mb-4">
                  <h3 className="mb-2 text-white text-xl sm:text-2xl font-bold text-center">
                    {selectedProduct.name}
                  </h3>
                  <motion.img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-auto object-contain mx-auto rounded"
                  />
                  {selectedProduct.desc === "Hybrid Rice Seed" && (
                    <p className=" text-white text-center text-sm sm:text-base">
                      ({selectedProduct.code})
                    </p>
                  )}
                </div>

                {/* Show contact info here only on md+ */}
                <div className="hidden md:block text-center md:text-left text-black text-sm sm:text-base">
                  <span className="block font-semibold mb-1">For sales inquiries,</span>
                  <span className="leading-relaxed text-sm">
                    Or call{" "}
                    <a
                      href="tel:(+63) 945 170 9401"
                      className="text-black text-sm underline hover:underline"
                    >
                      (+63) 945 170 9401
                    </a>
                    <br />
                    <a
                      href="https://www.google.com/maps?q=14.330623,121.076050"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black text-sm underline hover:underline inline-flex items-center"
                    >
                      Unit A 201 and Alfresco Area 2nd Floor Coral Center Mall
                      Barangay San Francisco, Biñan Laguna
                    </a>
                  </span>
                </div>
              </div>

              {/* Right Side */}
              <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-center text-white text-sm sm:text-base">
                {selectedProduct.details ? (
                  <div className="grid grid-cols-2 text-sm border border-white divide-x divide-white divide-y mb-4">
                    {selectedProduct.details.map(([label, value], idx) => (
                      <React.Fragment key={idx}>
                        <div className="p-3 flex flex-col min-h-[48px] font-bold">
                          {label.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </div>
                        <div className="p-3 flex flex-col min-h-[48px]">
                          {value.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                ) : (
                  <p className="mb-6 whitespace-pre-line">
                    {selectedProduct.desc1 || selectedProduct.desc}
                  </p>
                )}
                {/* Contact info on mobile only */}
                <div className="block md:hidden text-center text-black text-sm sm:text-base mb-6">
                  <span className="block font-semibold mb-1">For sales inquiries,</span>
                  <span className="leading-relaxed">
                    Or call{" "}
                    <a
                      href="tel:(+63) 945 170 9401"
                      className="text-black underline hover:underline"
                    >
                      (+63) 945 170 9401
                    </a>
                    <br />
                    <a
                      href="https://www.google.com/maps?q=14.330623,121.076050"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline hover:underline inline-flex items-center"
                    >
                      Unit A 201 and Alfresco Area 2nd Floor Coral Center Mall
                      Barangay San Francisco, Biñan Laguna
                    </a>
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4">
                  <a
                    href="/get-involved"
                    className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-900 text-center"
                  >
                    Contact Us
                  </a>
                  <button
                    onClick={() => handleDownload(selectedProduct.pdf)}
                    className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 text-center flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M1.4 12.4444H12.6V7H14V13.2222C14 13.6518 13.6866 14 13.3 14H0.7C0.313404 14 0 13.6518 0 13.2222V7H1.4V12.4444ZM8.4 4.66667H11.9L7 10.1111L2.1 4.66667H5.6V0H8.4V4.66667Z"
                        fill="white"
                      />
                    </svg>
                    Download PDF
                  </button>

                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-6 text-white hover:text-gray-300 text-2xl font-bold"
              >
                &times;
              </button>
            </div>
          </div>
          {/* Error Modal */}
         {showError && (
  <>
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
      onClick={() => setShowError(false)}
    ></div>
    <div className="fixed inset-0 flex items-center justify-center z-[70]">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center relative">
        {/* Close button */}
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

