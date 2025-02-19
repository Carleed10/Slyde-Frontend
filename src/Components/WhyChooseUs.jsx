import React from "react";
import airplane from "../Images/air.png"; // Add an airplane image
// import students from "../Images/students-studying-abroad.jpg"; // Add a relevant image

const WhyChooseUs = () => {
  return (
    <div className="w-full bg-gray-100 py-16 relative">
      {/* Airplane Image at the Top Right */}
      <img
        src={airplane}
        alt="Airplane"
        className="absolute top-[-100px] right-[-10px] w-90"
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section - Text */}
        <div className="md:w-1/2 px-6">
          <h2 className="text-red-500 text-xl font-semibold">Why Choose Us</h2>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            Why Slyde Internationals?
          </h1>
          <p className="text-gray-600 mt-4">
            We help students achieve their dreams of studying abroad by
            providing expert guidance, visa support, and admission assistance.
            Our team ensures a smooth transition to world-class institutions.
          </p>

          {/* Key Features List */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="flex items-center">
              ✅ Expert Guidance
            </div>
            <div className="flex items-center">
              ✅ Hassle-Free Visa Process
            </div>
            <div className="flex items-center">
              ✅ Scholarship Assistance
            </div>
            <div className="flex items-center">
              ✅ Global University Network
            </div>
          </div>

          {/* Call-to-Action Button */}
          <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-600">
            Learn More
          </button>
        </div>

        {/* Right Section - Image */}
        {/* <div className="md:w-1/2 px-6 mt-8 md:mt-0">
          <img
            src={students}
            alt="Students Studying Abroad"
            className="w-full rounded-lg shadow-lg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default WhyChooseUs;
