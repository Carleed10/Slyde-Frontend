import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import student from "../Images/testimonial.png"
import student2 from "../Images/testimonial2.png"
import student3 from "../Images/testimonial3.png"
import student4 from "../Images/testimonial4.png"


const testimonials = [
  {
    id: 1,
    name: "Bolaji Ayomide Ogunlowo",
    role: "Wrexham university, Wales, UK",
    image: student,
    text: "This platform helped me achieve my dream of studying abroad. The process was seamless, and the support was incredible!",
  },
  {
    id: 2,
    name: "Seun Sanusi",
    role: "Aberystwyth University, Wales, UK",
    image: student2,
    text: "A wonderful experience! The team guided me through everything and made my journey stress-free.",
  },
  {
    id: 3,
    name: "Sanusi Babafemi",
    role: "Aberystwyth University, Wales, UK",
    image: student3,
    text: "Highly recommend their services! Everything was well-organized, and I got into my dream university.",
  },
  {
    id: 4,
    name: "Makinde Ifeoluwa",
    role: "University of Westminster, London, UK",
    image: student4,
    text: "They made my study abroad experience seamless and stress-free. I'm grateful for their professionalism and support",
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-poppins  font-bold text-gray-800 mb-8">What Our Students Say</h2>
      
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white rounded-lg p-6 flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-32 h-32 rounded-full mb-4 border-2 border-blue-500"
              />
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
              <p className="text-sm mb-50 text-gray-500">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
