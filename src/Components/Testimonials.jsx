import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This platform helped me achieve my dream of studying abroad. The process was seamless, and the support was incredible!",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Business Analyst",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "A wonderful experience! The team guided me through everything and made my journey stress-free.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Marketing Specialist",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "Highly recommend their services! Everything was well-organized, and I got into my dream university.",
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Students Say</h2>
      
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-blue-500"
              />
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
