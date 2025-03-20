import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cert1 from "../../Images/Certificates/certificate.jpg";
import cert2 from "../../Images/Certificates/certificate2.jpg";
import cert3 from "../../Images/Certificates/certificate3.jpg";
import cert4 from "../../Images/Certificates/1.jpg";
import cert5 from "../../Images/Certificates/2.jpg";
import cert6 from "../../Images/Certificates/3.jpg";
import cert7 from "../../Images/Certificates/4.jpg";
import cert8 from "../../Images/Certificates/5.jpg";
import cert9 from "../../Images/Certificates/cert7.jpg";
import cert10 from "../../Images/Certificates/cert8.jpg";
import cert11 from "../../Images/Certificates/cert9.jpg";





const certificates = [cert1, cert2, cert3, cert4, cert5, cert6, cert7, cert8, cert9, cert10, cert11];


const CertificateGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="bg-[white] py-10 px-5">
      <h2 className="text-2xl font-bold text-center mb-6">Our Certifications</h2>

      {/* Show Carousel on Small Screens */}
      <div className="block md:hidden">
        <Slider {...settings}>
          {certificates.map((src, index) => (
            <div key={index} className="p-2">
              <img
                src={src}
                alt={`Certificate ${index + 1}`}
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Show Grid on Medium and Larger Screens */}
      <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {certificates.map((src, index) => (
          <div key={index} className="p-2 border rounded-lg shadow-md bg-white">
            <img
              src={src}
              alt={`Certificate ${index + 1}`}
              className="w-full h-45 object-cover rounded-md transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateGallery;
