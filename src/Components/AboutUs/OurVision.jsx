import React from "react";
import aboutImage from "../../Images/Study Abroad Tips.jpg"; // Replace with your actual image path

const OurVision = () => {
  return (
    <section className="bg-[white] py-12 px-6">
      <div className="w-[95%] md:w-[85%] mx-auto flex flex-col gap-12">

        {/* About Us Section with Image */}
        <div className="bg-white flex justify-between flex-col md:flex-row items-center md:items-start gap-6">

          {/* Text Section */}
          <div className="w-full md:w-[50%]">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-gray-700 leading-relaxed">
              At <span className="font-semibold text-green-600">Slyde International Services Limited</span>, we are committed to excellence in professional educational consultancy services. With a deep understanding of global education systems, we provide expert guidance to students seeking admission into prestigious institutions worldwide.
              <br /><br />
              Over the years, our dedication to quality, transparency, and innovation has earned us a reputation as a trusted name in Nigeria and Africa. We believe in shaping bright futures through expert guidance, seamless admissions support, and an unwavering commitment to student success.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-[40%]">
            <img src={aboutImage} alt="About Us" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>

        {/* Vision Section */}
        <div className="">
          <h3 className="text-3xl font-bold text-[rgb(239,68,68)] mb-2">Our Vision</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>To be recognized as a leading Professional Educational Consultancy Service provider in Nigeria and Africa.</li>
            <li>To offer Corporate Training and Development initiatives tailored to meet the unique needs of clients and organizations through our partner institutions.</li>
          </ul>
        </div>

        {/* Mission Section */}
        <div className="">
          <h3 className="text-3xl font-bold  text-[rgb(168,85,247)] mb-2">Our Mission</h3>
          <ul className="list-disc space-y-2 text-black pl-5">
            <li>To act as a bridge across cultures, providing academic support for the next generation.</li>
            <li>Our experienced education counselors are dedicated to advising students on suitable courses and career opportunities based on their background, interests, aptitude, and aspirations.</li>
            <li>We maintain a broad network with education providers, ensuring a diverse range of study options to meet our students' needs.</li>
          </ul>
        </div>

        {/* Objectives Section */}
        <div className="">
          <h3 className="text-3xl font-bold text-[rgb(59,130,246)] mb-2">Our Objectives</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>To attract and develop the most talented students and staff worldwide.</li>
            <li>To expand our consultancy services to meet the growing needs of prospective students.</li>
            <li>To establish our organization as a leader in Nigeria and Africa.</li>
            <li>To communicate the value of foreign education, highlighting its purpose and benefits.</li>
            <li>To remain committed to:
              <ul className="pl-5 space-y-1 list-disc">
                <li>Helping students obtain the best possible course offers.</li>
                <li>Providing guidance at every stage of their academic journey.</li>
                <li>Prioritizing students' educational interests at all times.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg font-medium">
            At <span className="font-semibold text-green-600">Slyde International Services Limited</span>, we are committed to shaping bright futures through expert guidance and dedicated support.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurVision;
