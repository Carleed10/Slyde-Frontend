import React from "react";
import us from "../Images/download (25).jpeg";
import france from "../Images/stdet.jpg"

const Hero = () => {
  return (
    <section className="w-full mt-[12vh] md:mt-[0vh] min-h-screen bg-gradient-to-r from-[rgba(9,209,2,0.164)] via-[rgba(245,255,152,0.432)] to-[rgba(0,255,34,0.123)] flex flex-col items-center justify-center p-6">
      {/* Hero Content */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text Section */}
        <div className="md:w-[48%] md:text-left">
          <h1 className="text-4xl font-poppins md:text-6xl font-bold text-gray-900">
            Travel Explore <br /> And Enjoy Every Moment
          </h1>
          <p className="mt-4 text-[15px] text-gray-700 md:text-lg max-w-lg">
            Embark on a journey where every moment is an opportunity for discovery, from bustling streets to breathtaking landscapes.
          </p>
          
        </div>

        {/* Right Section - Image Placeholder */}
        <div className="relative space-y-4 flex flex-col md:flex md:flex-row justify-between md:w-[48%] mt-10 md:mt-0">
          <div className="w-[100%] h-auto md:w-[48%] md:h-[400px] bg-blue-300 rounded-3xl shadow-lg">
          <img
                className="w-full h-[100%] rounded-3xl object-cover"
                src={france}
                alt=""
              />
          </div>
          <div className="w-[100%] h-auto md:w-[48%] md:h-[400px] bg-gray-400 rounded-3xl shadow-lg  md:top-6 md:right-[-20px]">

          <img
                className="w-full h-[100%] rounded-3xl  object-cover"
                src={us}
                alt=""
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
