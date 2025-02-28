import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="min-h-screen font-poppins  bg-white flex flex-col items-center justify-center py-10 px-4">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Get in Touch
      </h1>

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="bg-[rgb(250,250,250)] p-6 rounded-lg">
          <h2 className="text-2xl  font-semibold text-gray-800 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 mb-6">
            Have a question? Reach out to us and we'll get back to you shortly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-red text-2xl"><FaLocationDot /></span>
              <p className="text-gray-700">65, M.K.0 Abiola Way. Opposite Dikat Building, Ring Road, lbadan, Oyo State, Nigeria.</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-black text-2xl"><IoIosMail /></span>
              <p className="text-gray-700"> enquiries@slydeintlng.com </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-black text-2xl"><IoIosMail /></span>
              <p className="text-gray-700"> admissions@slydeintlng.com</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-black text-2xl"><IoIosMail /></span>
              <p className="text-gray-700"> info@slydeintlng.com </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-black text-2xl"><FaPhoneAlt /></span>
              <p className="text-gray-700">+234 805 562 4764</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-black text-2xl"><FaPhoneAlt /></span>
              <p className="text-gray-700">+234 813 606 7362</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-black text-2xl"><FaFacebook /></span>
              <p className="text-gray-700"> Slyde International Services </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-orange text-2xl"><FaInstagramSquare /></span>
              <p className="text-gray-700"> Slyde_intl_services </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-black text-2xl"><FaXTwitter /></span>
              <p className="text-gray-700">Slyde_Intl</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[rgb(250,250,250)] p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your message here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

           {/* Map Section (Optional) */}
           <div className="relative w-full max-w-6xl mt-10">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
    Find Us on the Map
  </h2>

  {/* Container for Map */}
  <div className="relative w-full h-64">
    {/* Embedded Google Map */}
    <iframe
      className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
      src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63311.67519784513!2d3.8322384928540973!3d7.356171546102315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x10398dc82dc63571%3A0x49d953efa09a4bc2!2s65%20MKO%20Abiola%20Way%2C%20Ibadan%20200253%2C%20Oyo!3m2!1d7.3560883!2d3.8734385999999996!4m0!5e0!3m2!1sen!2sng!4v1739900589467!5m2!1sen!2sng"
      allowFullScreen=""
      loading="lazy"
    ></iframe>


  </div>
</div>

    </div>
  );
};


export default Contact;


// .banner-home-bg {
//   background: -webkit-gradient(linear, left top, right top, color-stop(0.19%, rgba(255, 61, 0, 0.1)), color-stop(49.48%, rgba(255, 177, 152, 0.1)), color-stop(99.8%, rgba(255, 61, 0, 0.1)));
//   background: linear-gradient(90deg, rgba(9, 209, 2, 0.164) 0.19%, rgba(245, 255, 152, 0.432) 49.48%, rgba(0, 255, 34, 0.123) 99.8%);
  
//   /* background: linear-gradient(90deg, rgba(255, 61, 0, 0.1) 0.19%, rgba(255, 177, 152, 0.1) 49.48%, rgba(255, 61, 0, 0.1) 99.8%); */
//   height: 100vh;
// }

// For Further Enquiries, kindly contact us	O
// SLYDE INTERNATIONAL SERVICES LIMITED (RC: 921938)
// HEAD OFFICF;
// O	665, M.11.0 Abide Way. Opposite @kat Buildings Ring Road, lbadan, Oyo, Nigeria.
// a	Telephone Contacts:	23
// +2348055624764,

// +2308167255630

// +2348136067362
// slydeenquifies@gmed
// Website: wwwplydeinncorn
// Facebook: @Slyde International Services
// Instagrann @Slyde_intl_services.
// TAM,
