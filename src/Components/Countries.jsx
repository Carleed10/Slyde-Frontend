import React from "react";
import us from "../Images/download (25).jpeg";
import uk from "../Images/download (24).jpeg";
import australia from "../Images/Two Guys From Germany Decided To Explore This Awesome World, Here Is The Best Of What They’ve Seen So Far (30 Pics).jpeg";
import germany from "../Images/Cologne Cathedrals.jpeg";
import canada from "../Images/Notre-Dame Basilica, Montreal.jpeg";
import ireland from "../Images/9 Secrets of Blarney Castle in Ireland - Fun Blarney Castle Facts.jpeg";
import france from "../Images/Paris, France Travel Guide ✨.jpeg";
import zealand from "../Images/Sky Tower Auckland Restaurant - Orbit 360° & Observation Deck, New Zealand.jpeg";

const countryData = [
  { name: "United States", image: us, bgColor: "bg-blue-500" },
  { name: "Germany", image: germany, bgColor: "bg-red-500" },
  { name: "Canada", image: canada, bgColor: "bg-green-500" },
  { name: "New Zealand", image: zealand, bgColor: "bg-yellow-500" },
  { name: "United Kingdom", image: uk, bgColor: "bg-blue-700" },
  { name: "France", image: france, bgColor: "bg-red-700" },
  { name: "Australia", image: australia, bgColor: "bg-green-700" },
  { name: "Ireland", image: ireland, bgColor: "bg-purple-700" },
];

const Countries = () => {
  return (
    <div className="w-full flex justify-center py-10">
    <div className="w-[85%] flex flex-col items-center text-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Countries We Help You Study In
      </h1>

      <div className="flex flex-wrap justify-between gap-y-14">
        {countryData.map((country, index) => (
          <div
            key={index}
            className={`w-[270px] h-[400px] ${country.bgColor} rounded-lg overflow-hidden shadow-lg`}
          >
            <img
              className="w-full h-[90%] object-cover"
              src={country.image}
              alt={country.name}
            />
            <h3 className="text-center text-white font-semibold text-lg py-2">
              {country.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Countries;
