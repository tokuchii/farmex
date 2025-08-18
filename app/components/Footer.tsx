import logo from "../../public/bgfooter.jpg";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
        {/* Logo (hidden on small screens) */}
       <div className="flex flex-shrink-0 items-center pt-4 md:pt-6 hide-below-850">
  <img src={logo} alt="FarmEx Logo" className="h-36 w-auto -mb-12" />
</div>


        {/* Contact Info */}
        <div className="flex flex-col items-start space-y-2 text-gray-900 text-xs sm:text-sm md:text-base md:mt-4 mr-[14%]">
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-green-600" />
            <a
              href="https://www.google.com/maps?q=Coral+Center+Mall,+San+Francisco,+Biñan,+Laguna"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-black leading-snug"
            >
              Unit A 201 and Alfresco Area 2nd Floor Coral Center Mall Barangay San Francisco, Biñan Laguna
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-green-600" />
            <a
              href="tel:+639451709401"
              className="hover:underline text-black leading-snug"
            >
              +63 945 170 9401
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-green-600" />
            <a
              href="mailto:leadsagriventurescorporation@gmail.com"
              className="hover:underline text-black leading-snug"
            >
              leadsagriventurescorporation@gmail.com
            </a>
          </div>
        </div>
      </div>

{/* Copyright */}
  <div className="w-11/12 max-w-[350px] mx-auto mb-2 border-t border-green-600" />
  <p className="text-green-700 text-center text-xs sm:text-sm md:text-base">
    &copy; 2025 Farmex Corporation
  </p>

    </footer>
  );
}
