import React from "react";

const OurVision = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
        {/* About Us Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-gray-700 leading-relaxed">
              At <span className="font-semibold text-blue-600">[Your Company Name]</span>, we are dedicated to providing excellence in professional educational consultancy services. Over the years, our commitment to quality and innovation has made us a trusted name in Nigeria and Africa.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://source.unsplash.com/600x400/?education,learning"
              alt="About Us"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://source.unsplash.com/600x400/?vision,goal"
              alt="Vision"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Our Vision</h3>
            <ul className="text-gray-700 space-y-2 list-disc pl-5">
              <li>To be recognized as a leading Professional Educational Consultancy Service provider in Nigeria and Africa.</li>
              <li>To offer Corporate Training and Development initiatives tailored to meet the unique needs of clients and organizations through our partner institutions.</li>
            </ul>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Our Mission</h3>
            <ul className="text-gray-700 space-y-2 list-disc pl-5">
              <li>To act as a bridge across cultures, providing academic support for the next generation.</li>
              <li>Our experienced education counselors are dedicated to advising students on suitable courses and career opportunities based on their background, interests, aptitude, and aspirations.</li>
              <li>We maintain a broad network with education providers, ensuring a diverse range of study options to meet our students' needs.</li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://source.unsplash.com/600x400/?mission,achievement"
              alt="Mission"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>

        {/* Objectives Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://source.unsplash.com/600x400/?success,objective"
              alt="Objectives"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Our Objectives</h3>
            <ul className="text-gray-700 space-y-2 list-disc pl-5">
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
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-2xl mx-auto mt-8">
          <p className="text-gray-700 text-lg font-medium">
            At <span className="font-semibold text-blue-600">[Your Company Name]</span>, we are committed to shaping bright futures through expert guidance and dedicated support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
