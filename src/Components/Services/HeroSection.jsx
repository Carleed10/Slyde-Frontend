import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import shake from "../../Images/Handshake.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-[65vh] flex justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${shake})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgb(0,29,8)] opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-4xl font-poppins md:text-5xl font-bold mb-4">
          Looking for a Strong Partnership?
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Let's collaborate and build something great together. Reach out today!
        </p>
        <a
          href="https://wa.link/padgui"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg"
        >
          <IoLogoWhatsapp size={24} color="white" />
          (+234) 813 606 7382
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
