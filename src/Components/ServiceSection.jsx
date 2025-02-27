import React from "react";
import traveler from "../Images/stdet.jpg"


const ServiceSection = () => {
  return (
   <div className="w-[100%]">
     <section className="flex flex-col justify-center lg:flex-row items-center lg:w-[85%] max- mx-auto py-10 px-6">
      {/* Left: Image */}
      <div className="relative w-[250px] flex justify-center">
        <div className="rounded-2xl">
          <img
            src={traveler}
            alt="Traveler"
            className="w-full rounded-xl"
          />
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="lg:w-1/2 w-full mt-10 lg:mt-0 lg:pl-12 text-center lg:text-left">
        <h2 className="text-4xl font-poppins  font-bold text-gray-900">
          Plan easy, Pay less & <br /> Experience more
        </h2>
        <p className="text-gray-600 mt-4">
          Traveling opens doors to new experiences, cultures, and opportunities. 
          Our expert services help you navigate every step, making your journey seamless and affordable.
        </p>
      </div>
    </section>
   </div>
  );
};

export default ServiceSection;
