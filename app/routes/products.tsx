import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Define Product type
type Product = {
  name: string;
  image: string;
  desc: string;
  pdf: string;
};

export function meta() {
  return [
    { title: "FarmEx - Revolutionary Agricultural Technology" },
  ];
}

const productList: Product[] = [
  {
    name: "Jackpot 102",
    image: "/jackpot102_product.png",
    desc: "Hybrid Rice",
    pdf: "/downloads/jackpot-102.pdf"
  },
  {
    name: "LAV 777",
    image: "/lav777_product.png",
    desc: "Hybrid Rice",
    pdf: "/downloads/lav-777.pdf"
  },
  {
    name: "Jose Maria Milled Rice",
    image: "/jose1.png",
    desc: "Hybrid Rice",
    pdf: "/downloads/jose-maria.pdf"
  },
  {
    name: "Leads 143",
    image: "/leads143_product.png",
    desc: "Hybrid Rice",
    pdf: "/downloads/leads-143.pdf"
  },
  {
    name: "Jackpot ready",
    image: "/jackpot-ready_product.png",
    desc: "Hybrid Rice",
    pdf: "/downloads/jackpot-ready.pdf"
  },
];


export default function Products() {
  const [isClient, setIsClient] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden"; // disable scroll
    } else {
      document.body.style.overflow = ""; // reset scroll
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
          <section className="w-full py-16 px-4 sm:px-8 bg-[url('/productbg1.png')] bg-cover bg-center flex flex-col items-center">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
              {productList.map((product, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-50 object-cover rounded mb-4"
                  />
                  <h4 className="font-bold text-green-600 text-xl mb-2">{product.name}</h4>
                  <p className="text-gray-600 text-center mb-4">{product.desc}</p>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="mt-auto px-4 py-2 bg-[#057A31] text-white rounded hover:bg-green-900 transition"
                  >
                    Learn More
                  </button>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
              className="rounded-lg max-w-4xl w-full flex flex-col md:flex-row overflow-hidden relative bg-cover bg-center"
              style={{ backgroundImage: "url('/bgmodal.png')" }}>
                
              {/* Left Side */}
              <div className="md:w-1/2 p-6 flex flex-col items-center relative">
                <div className="w-full h-50 relative mb-4">
                  <motion.img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover rounded"
                  />
                  <h3 className="absolute top-2 left-1/2 transform -translate-x-1/2 text-green-800 text-2xl font-bold px-4 py-1">
                  {selectedProduct.name}
                </h3>
                </div>

                <div className="text-left text-black">
                  <span className="block text-lg font-semibold mb-1">
                    For sales inquiries,
                  </span>
                  <span className="text-sm leading-relaxed block">
                    Or call
                    <a href="tel:(049) 576-007" className="text-black underline hover:underline">(049) 576-007</a>
                    <br />
                    <a
                      href="https://www.google.com/maps/place/1775+F.T.+San+Luis+Avenue,+Bay,+4033+Laguna/@14.1770685,121.3138026,3a,75y,179.58h,90.22t/data=!3m7!1e1!3m5!1sER7LVQxCt1pLkAWu1AjQQg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.220788706272117%26panoid%3DER7LVQxCt1pLkAWu1AjQQg%26yaw%3D179.5800923117178!7i16384!8i8192!4m6!3m5!1s0x33bd5e176676321b:0x7b2c62c941bcd7a3!8m2!3d14.1722007!4d121.2746737!16s%2Fg%2F11qwynhv6y?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline hover:underline inline-flex items-center"
                    >
                      1775 F.T. San Luis Avenue, Bay, Laguna, Philippines
                    </a>

                  </span>
                </div>


              </div>



              {/* Right Side */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between text-black">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <p className="mb-6">
                    {selectedProduct.desc} is a top-performing hybrid rice variant known for its resilience,
                    productivity, and superior grain quality. Ideal for commercial and local farming.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mt-4">
                  <a
                    href="/get-involved"
                    className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-900 text-center w-full md:w-auto"
                  >
                    Contact Us
                  </a>
                  <a
                    href={selectedProduct.pdf}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 text-center w-full md:w-auto"
                    download
                  >
                    Download
                  </a>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-black hover:text-gray-200 text-2xl font-bold"
              >
                &times;
              </button>
            </div>
          </div>

        </>
      )}
    </>
  );
}
