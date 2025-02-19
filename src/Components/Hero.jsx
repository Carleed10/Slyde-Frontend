import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-yellow-400 p-6">
        <div className="w-[85%]">
          <div className="w-[60%]">
            <h1 className="leading-[75px] text-[50px] md:text-[65px] font-bold text-gray-900">
              Travel the World, Study Beyond Boundaries
            </h1>

            <h4 className="w-[75%] font-medium text-lg md:text-lg text-gray-800 mt-4 max-w-2xl">
              From visa preparation to travel, we make your journey to study
              abroad seamless and stress-free
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
