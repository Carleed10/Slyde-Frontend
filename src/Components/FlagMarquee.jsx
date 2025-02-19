import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaHome, FaRegBuilding, FaClipboardList, FaCity } from 'react-icons/fa';
import us from "../Images/Us Flag Desktop Background at Maryhaskell.jpeg";
import uk from "../Images/This is an awesome flag.jpeg";
import australia from "../Images/Premium Photo _ Waving flag of australia_ 3d rendering_.jpeg";
import germany from "../Images/german flag - Stock Image.jpeg";
import canada from "../Images/Canada Allows 5,00,000 New Immigrants by 2025.jpeg";
import ireland from "../Images/Cruise from the United States to Ireland.jpeg";
import france from "../Images/Prayers for France.jpeg"
import zealand from "../Images/Awesome New Zealand Flag Wallpapers - WallpaperAccess (1).jpeg";

const flagData = [
  { name: "United States", image: us },
  { name: "United Kingdom", image: uk },
  { name: "Australia", image: australia },
  { name: "Germany", image: germany },
  { name: "Canada", image: canada },
  { name: "Ireland", image: ireland },
  { name: "France", image: france },
  { name: "New Zealand", image: zealand },
];

const FlagMarquee = () => {
  return (
    <div className="h-[25vh] flex items-center justify-center bg-white">
      <Marquee speed={60} gradient={false}>
        <div className="flex items-center gap-10">
          {flagData.map((flag, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={flag.image}
                alt={flag.name}
                className="w-[130px] h-[80px] object-cover rounded-md shadow-md"
              />

            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default FlagMarquee;
