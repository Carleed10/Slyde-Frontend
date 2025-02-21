import React from "react";

const ServiceSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto py-16 px-6">
      {/* Left: Image */}
      <div className="relative lg:w-1/2 w-full flex justify-center">
        <div className="bg-yellow-200 rounded-2xl p-6">
          <img
            src="https://images.unsplash.com/photo-1599063792477-4551f5a8e8bb" 
            alt="Traveler"
            className="w-full max-w-sm rounded-xl"
          />
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="lg:w-1/2 w-full mt-10 lg:mt-0 lg:pl-12 text-center lg:text-left">
        <h2 className="text-4xl font-bold text-gray-900">
          Plan easy, Pay less & <br /> Experience more
        </h2>
        <p className="text-gray-600 mt-4">
          Traveling opens doors to new experiences, cultures, and opportunities. 
          Our expert services help you navigate every step, making your journey seamless and affordable.
        </p>
      </div>
    </section>
  );
};

export default ServiceSection;
