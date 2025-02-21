import { FaUniversity, FaPlaneDeparture, FaPassport, FaGraduationCap, FaMoneyCheckAlt, FaBriefcase, FaGlobe, FaHotel } from "react-icons/fa";

const services = [
  { title: "Application for Admissions", icon: <FaUniversity />, desc: "Complete guidance for applying to international universities and colleges." },
  { title: "Visa Counseling & Processing", icon: <FaPassport />, desc: "Step-by-step assistance in securing a student visa successfully." },
  { title: "Pre-Visa Interview Prep", icon: <FaPlaneDeparture />, desc: "We train you to confidently ace your visa interview." },
  { title: "Pre-Departure Briefing", icon: <FaGlobe />, desc: "Essential tips for a smooth transition to studying abroad." },
  { title: "Fees & Scholarship Info", icon: <FaMoneyCheckAlt />, desc: "Get details on tuition fees and available scholarships." },
  { title: "Career Advice", icon: <FaBriefcase />, desc: "Guidance to help you choose the right academic path." },
  { title: "Educational Excursions", icon: <FaGraduationCap />, desc: "International trips for secondary students to learn and explore." },
  { title: "Accommodation & Flights", icon: <FaHotel />, desc: "We help with housing and flight bookings for a stress-free journey." },
];

const OurServices = () => {
  return (
    <section className="relative bg-blue-50 py-16 px-6">
      {/* Airplane Image */}
      <img 
        src="https://cdn-icons-png.flaticon.com/512/201/201623.png" 
        alt="Airplane" 
        className="absolute top-5 right-5 w-20 opacity-50"
      />

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800">🌍 Our Services</h2>
        <p className="text-gray-600 mt-4">Helping students achieve their study-abroad dreams with expert guidance.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg flex items-start gap-4">
            <div className="text-blue-600 text-3xl">{service.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="text-center mt-12">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-700 transition">
          📞 Contact Us
        </button>
      </div>
    </section>
  );
};

export default OurServices;
