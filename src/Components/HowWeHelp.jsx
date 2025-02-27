import React from "react";
import image from "../Images/Free Photo _ Tourist pointing up.jpg";

const HowWeHelp = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      <div className="w-[85%] flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side - Text Section */}
        <div className="w-full md:w-[55%]">
          <h2 className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-4">
            How We Help You Succeed
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-blue-500">
              <span className="text-blue-500 text-2xl font-bold">1.</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Expert Visa Assistance</h3>
                <p className="text-gray-600 text-sm">
                  We provide step-by-step guidance through the visa application process, ensuring you meet all requirements and deadlines.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-green-500">
              <span className="text-green-500 text-2xl font-bold">2.</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">University and Course Matching</h3>
                <p className="text-gray-600 text-sm">
                  We help you choose the right university and program that aligns with your academic goals and career aspirations.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-yellow-500">
              <span className="text-yellow-500 text-2xl font-bold">3.</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Application Support</h3>
                <p className="text-gray-600 text-sm">
                  Get expert advice on writing compelling personal statements, preparing documents, and securing scholarships.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-purple-500">
              <span className="text-purple-500 text-2xl font-bold">4.</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Pre-Departure Guidance</h3>
                <p className="text-gray-600 text-sm">
                  From booking flights to arranging accommodation, we help you prepare for life abroad with ease.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-red-500">
              <span className="text-red-500 text-2xl font-bold">5.</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">24/7 Support During Your Journey</h3>
                <p className="text-gray-600 text-sm">
                  Our team is always available to assist with any challenges while you’re abroad, ensuring a smooth experience every step of the way.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Side - Image Section */}
        <div className="w-full md:w-[40%] h-auto rounded-lg overflow-hidden">
          <img src={image} alt="Tourist pointing up" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default HowWeHelp;
