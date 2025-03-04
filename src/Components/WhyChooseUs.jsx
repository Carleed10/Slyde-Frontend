import React from "react";
import { Link } from "react-router-dom";
import students from "../Images/Knowing, avoiding the sticker shock of higher ed.jpg"; // Add a relevant image

const WhyChooseUs = () => {
  return (
    <div className="w-full py-16">
      <div className="max-w-6xl mx-auto flex justify-between flex-col md:flex-row items-center px-6">
        {/* Left Section - Text */}
        <div className="md:w-1/2">
          <h2 className="text-red-500 font-vidaloka text-xl font-semibold">Why Choose Us</h2>
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mt-2">
            Why Slyde Internationals?
          </h1>
          <p className="text-gray-600 mt-4">
            We help students achieve their dreams of studying abroad by
            providing expert guidance, visa support, and admission assistance.
            Our team ensures a smooth transition to world-class institutions.
          </p>

          {/* Key Features List */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center">✅ Expert Guidance</div>
            <div className="flex items-center">✅ Hassle-Free Visa Process</div>
            <div className="flex items-center">✅ Scholarship Assistance</div>
            <div className="flex items-center">✅ Global University Network</div>
          </div>

          {/* Call-to-Action Button */}
          <Link to={"/aboutus"}>
            <button className="mt-6 bg-[rgb(255,61,0)] text-white px-6 py-3 rounded-lg text-lg hover:bg-red-600 transition duration-300">
              Learn More
            </button>
          </Link>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-[40%] mt-8 md:mt-0">
          <img
            src={students}
            alt="Students Studying Abroad"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
