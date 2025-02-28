import React from "react";
import image from "../Images/top-view-passport-tickets-arrangement.jpg"
import image2 from "../Images/online-collage-application-document-form-concept.jpg"
import image3 from "../Images/photo-glad-dark-skinned-curly-female-traveller-points-tickets-passport-rejoices-having-trip-abroad-summer-holidays.jpg"
import image4 from "../Images/travel-agent-offering-trip-planning-clients.jpg"


const ServiceProvided = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 flex flex-col lg:flex-row ">
      {/* Left Side - Heading & Services List */}
      <div className="lg:w-1/2 w-full lg:text-left">
        <h2 className="text-4xl font-poppins font-bold text-gray-900">What services we provide</h2>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">01. Application for Admissions</h3>
            <p className="text-gray-600">
            Complete guidance for applying to international universities and colleges.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">02. Visa Counseling & Processing</h3>
            <p className="text-gray-600">
            Step-by-step assistance in securing a student visa successfully.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">03. Accommodation & Flights</h3>
            <p className="text-gray-600">
            We help with housing and flight bookings for a stress-free journey.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image Grid */}
      <div className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-10 lg:mt-0 relative">
        <div className="grid grid-cols-2 gap-6">
          {/* Image 1 */}
          <div className="relative w-40 h-40 bg-gray-200 rounded-full overflow-hidden">
            <img
              src={image}
              alt="Travel"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 2 */}
          <div className="relative w-40 h-40 bg-gray-200 rounded-full overflow-hidden">
            <img
              src= {image2}
              alt="Beach"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 3 */}
          <div className="relative w-40 h-40 bg-gray-200 rounded-full overflow-hidden">
            <img
              src={image3}
              alt="Hotel"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 4 */}
          <div className="relative w-40 h-40 bg-gray-200 rounded-full overflow-hidden">
            <img
              src={image4}
              alt="Flight"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProvided;
