import React from "react";

const OurVision = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* About Us Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold text-green-600">Slyde International Services Limited</span>, we are committed to excellence in professional educational consultancy services. With a deep understanding of global education systems, we provide expert guidance to students seeking admission into prestigious institutions worldwide.

Over the years, our dedication to quality, transparency, and innovation has earned us a reputation as a trusted name in Nigeria and Africa. We believe in shaping bright futures through expert guidance, seamless admissions support, and an unwavering commitment to student success. </p>
        </div>

        {/* Vision Section */}
        <div className="bg-yellow-500 text-black shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>To be recognized as a leading Professional Educational Consultancy Service provider in Nigeria and Africa.</li>
            <li>To offer Corporate Training and Development initiatives tailored to meet the unique needs of clients and organizations through our partner institutions.</li>
          </ul>
        </div>

        {/* Mission Section */}
        <div className="bg-red-500 shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-white mb-2">Our Mission</h3>
          <ul className="list-disc space-y-2 text-white pl-5">
            <li>To act as a bridge across cultures, providing academic support for the next generation.</li>
            <li>Our experienced education counselors are dedicated to advising students on suitable courses and career opportunities based on their background, interests, aptitude, and aspirations.</li>
            <li>We maintain a broad network with education providers, ensuring a diverse range of study options to meet our students' needs.</li>
          </ul>
        </div>

        {/* Objectives Section */}
        <div className="bg-blue-600 text-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-2">Our Objectives</h3>
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
