import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function meta() {
  return [
    { title: "About Us" },
  ];
}

export default function About() {
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
            src="/bgabout.png"
            alt="Farm Image"
            className="w-full h-64 sm:h-96 md:h-[600px] lg:h-[500px] object-cover object-top"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <h2 className="text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 h-auto mt-16 md:-mt-26">
            FARMEX AT A GLANCE
          </h2>
        </div>
      </motion.div>
      <motion.div>
        {/* History and Our Mission Section */}
        <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center bg-white justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/About us 1.png')" }}>
          <div className="w-full max-w-7xl flex flex-col gap-16">
            {/* History Row */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
              {/* Image 1 */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div
                  className="rounded-lg shadow-lg w-full max-w-md h-64 sm:h-72 md:h-80 overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
                  style={{
                    boxShadow: "0 2px 20px 2px rgba(234, 179, 8, 0.85)", // gold shadow
                  }}
                >
                  <img
                    src="/history.jpg" // or "/mission.jpg"
                    alt="FarmEx History" // or "FarmEx Mission"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              {/* History Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-4 uppercase tracking-widest">
                  History
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {/* Replace this with your actual history text */}
                  Farmex Corporation began its journey in 2018 under the name Leads Agriventures Corporation (LAV), as a proud subsidiary of LEADS Agri. In 2024, as the company expanded its scope and vision, it was officially rebranded to Farmex Corporation.  <br /><br />

                  Farmex continues to strengthen its position in the agricultural sector. Our core business focuses on hybrid rice seed varietal testing and milled rice distribution, helping improve rice productivity and food security across the country. <br /><br />

                  Building on our strong foundation, Farmex has recently diversified into financing of rice farmers, rental of large-scale agricultural machinery and the distribution of small farm tools and equipment, offering farmers end-to-end solutions from planting to post-harvest. <br /><br />

                  We are committed to advancing Philippine agriculture through innovation, sustainability, and meaningful partnerships with the farming community.
                </p>
              </div>
            </div>
            {/* Our Mission Row */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-16">
              {/* Image 2 */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div
                  className="rounded-lg shadow-lg w-full max-w-md h-64 sm:h-72 md:h-80 overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
                  style={{
                    boxShadow: "0 2px 20px 2px rgba(234, 179, 8, 0.85)", // gold shadow
                  }}
                >
                  <img
                    src="/mission.jpg" // or "/mission.jpg"
                    alt="FarmEx History" // or "FarmEx Mission"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              {/* Mission Text */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-4 uppercase tracking-widest">
                  Our Mission
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {/* Replace this with your actual mission text */}
                  LAV’s mission is to come up with all the technologies and provide holistic support to the Filipino rice farmers. LAV is continuously testing high yielding rice seed varieties adaptable to the local conditions. From land preparation to harvesting activities, we provide after-sales support through technical consultations, machineries rental, production trainings and field demonstrations.

                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      <motion.div>
        {/* Products Section */}
        <section
          className="relative w-full py-16 px-4 sm:px-6 lg:px-8 flex items-center bg-white justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/featuredbg.jpg')", // change this to your actual image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
        </section>
      </motion.div>


      {/*Farmex Leadership Team*/}
      <motion.div>
        {/* Leadership Team Section */}
        <section className="relative w-full bg-gradient-to-tr from-[#788B5F] to-[#2A4127] min-h-screen">
          {/* Golden Wavy Header */}
          <div className="relative w-full h-1 bg-[#E0B100]">
            {/* <svg className="absolute bottom-0 w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                opacity=".25" 
                fill="#E0B100"
              />
              <path 
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                opacity=".5" 
                fill="#E0B100"
              />
              <path 
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                fill="#E0B100"
              />
            </svg> */}
          </div>

          {/* Main Content */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                  Farmex Leadership Team
                </h2>
                <div className="w-auto md:w-[620px] h-1 bg-[#E0B100] mx-auto"></div>
              </div>

              {/* Introductory Text */}
              <div className="text-white text-base md:text-lg leading-relaxed mb-16 space-y-6">
                <p>
                  The leadership team of Farmex Corporation is composed of dedicated and forward-thinking individuals committed to empowering Filipino rice farmers through innovation and holistic agricultural support.
                </p>
                <p>
                  Guided by the mission to deliver comprehensive technologies and services across the rice production cycle, the team oversees initiatives that include the continuous testing of high-yielding, locally adaptable rice seed varieties under Farmex Corporation.
                </p>
                <p>
                  Their leadership ensures that farmers receive end-to-end assistance—from land preparation to harvest—through technical consultations, machinery rentals, production training, and field demonstrations, driving sustainable growth and productivity in the local rice industry.
                </p>
              </div>

              {/* Leadership Personnel */}
              <div className="mb-16">
                {/* Chairman */}
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Fernando B. Malveda
                  </h3>
                  <p className="text-white text-lg uppercase tracking-wide">
                    Chairman
                  </p>
                </div>

                {/* Other Leaders - Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  {/* Left Column */}
                  <div className="space-y-8 text-center">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                        Jose Maria Fernando L. Malveda
                      </h4>
                      <p className="text-white text-base">
                        PRESIDENT
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                        Angelica A. Belarmino
                      </h4>
                      <p className="text-white text-base">
                        Operations Manager
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                        Karlo Miguel F. Santos
                      </h4>
                      <p className="text-white text-base">
                        LTC Operations Manager
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                        Rey N. Rivera
                      </h4>
                      <p className="text-white text-base">
                        Warehouse Manager
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8 text-center">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                        Arturo A. Alejar Jr.
                      </h4>
                      <p className="text-white text-base">
                        Chief Operations Officer (COO)
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                        Myrile Mae T. Adlus
                      </h4>
                      <p className="text-white text-base">
                        Business Development Manager
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                        Janine M. Villamor
                      </h4>
                      <p className="text-white text-base">
                        Admin and Sales Operations Manager
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                        Angelou Q. Reodique
                      </h4>
                      <p className="text-white text-base">
                        Communications Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
