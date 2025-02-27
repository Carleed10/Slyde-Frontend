import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[65vh] flex justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?students,travel')" }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-4xl font-poppins  md:text-5xl font-bold mb-4">
          Dreaming of Studying Abroad?
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Explore top universities worldwide with expert guidance. Start your journey today!
        </p>
        <a href="https://wa.link/padgui" className="inline-block bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg">
          📞 (+234) 813 606 7382
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
