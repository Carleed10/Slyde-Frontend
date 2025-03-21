import React, { useState } from "react";
import Masonry from "react-masonry-css";

// Import Videos
import video1 from "../../Videos/WhatsApp Video 2025-02-19 at 04.59.58_8cd6e759.mp4";
import video2 from "../../Videos/WhatsApp Video 2025-02-19 at 05.00.00_31659340.mp4";
import video3 from "../../Videos/WhatsApp Video 2025-02-19 at 04.59.59_ce82ded5.mp4";
import video4 from "../../Videos/WhatsApp Video 2025-02-27 at 02.52.37_92058904.mp4";
import video5 from "../../Videos/WhatsApp Video 2025-02-19 at 04.59.39_0cfa36f7.mp4";
import video6 from "../../Videos/v1.mp4";
import video7 from "../../Videos/v2.mp4";
import video8 from "../../Videos/v3.mp4";
import video9 from "../../Videos/v4.mp4";

// Import Images
import image1 from "../../Images/WhatsApp Image 2025-02-19 at 04.59.47_3fc6f46e.jpg";
import image2 from "../../Images/WhatsApp Image 2025-02-19 at 04.59.48_24f33a82.jpg";
import image3 from "../../Images/WhatsApp Image 2025-02-19 at 04.59.52_864f0408.jpg";
import image4 from "../../Images/WhatsApp Image 2025-02-19 at 04.59.54_ae8d0641.jpg";
import image5 from "../../Images/WhatsApp Image 2025-02-19 at 04.59.56_4f89b9e5.jpg";
import image6 from "../../Images/New folder/WhatsApp Image 2025-02-27 at 09.49.21_df6ed78e.jpg";
import image7 from "../../Images/New folder/WhatsApp Image 2025-02-28 at 13.07.50_d21775fc.jpg";
import image8 from "../../Images/New folder/WhatsApp Image 2025-02-27 at 09.49.23_21fd41d3.jpg";
import image9 from "../../Images/New folder/WhatsApp Image 2025-02-28 at 13.07.50_6c2be682.jpg";
import image10 from "../../Images/New folder/WhatsApp Image 2025-02-28 at 13.07.49_2b7dd0ab.jpg";
import image11 from "../../Images/New folder/WhatsApp Image 2025-02-27 at 09.49.23_e07e1d75.jpg";
import image12 from "../../Images/New folder/WhatsApp Image 2025-02-28 at 13.07.50_0ed6af39.jpg";
import image13 from "../../Images/New folder/WhatsApp Image 2025-02-27 at 09.49.22_152a010c.jpg";
import image14 from "../../Images/1.jpg";
import image15 from "../../Images/2.jpg";
import image16 from "../../Images/3.jpg";
import image17 from "../../Images/4.jpg";
import image18 from "../../Images/5.jpg";
import image19 from "../../Images/6.jpg";
import image20 from "../../Images/7.jpg";
import image21 from "../../Images/8.jpg";
import image22 from "../../Images/9.jpg";
import image23 from "../../Images/10.jpg";
import image24 from "../../Images/11.jpg";
import image25 from "../../Images/12.jpg";
import image26 from "../../Images/13.jpg";
import image27 from "../../Images/14.jpg";

// Import Visa Images
import visa1 from "../../Images/New folder/WhatsApp Image 2025-02-27 at 08.48.10_36dca76e.jpg";
import visa2 from "../../Images/New folder/WhatsApp Image 2025-02-27 at 08.49.38_81e4c85f.jpg";
import visa3 from "../../Images/New folder/WhatsApp Image 2025-02-27 at 08.49.09_7168c29b.jpg";
import visa4 from "../../Images/Visa/vv1.jpg";
import visa5 from "../../Images/Visa/vv2.jpg";
import visa6 from "../../Images/Visa/vv3.jpg";
import visa7 from "../../Images/Visa/vv4.jpg";
import visa8 from "../../Images/Visa/vv5.jpg";
import visa9 from "../../Images/Visa/vv6.jpg";
import visa10 from "../../Images/Visa/vv8.jpg";
import visa11 from "../../Images/Visa/vv9.jpg";
import visa12 from "../../Images/Visa/visa.jpg";
import visa13 from "../../Images/Visa/visa2.jpg";
import visa14 from "../../Images/Visa/visa3.jpg";
import visa15 from "../../Images/Visa/visa4.jpg";


// Gallery Items
const galleryItems = [
  { id: 1, type: "image", src: image1 },
  { id: 2, type: "video", src: video1 },
  { id: 3, type: "image", src: image2 },
  { id: 4, type: "video", src: video2 },
  { id: 5, type: "image", src: image3 },
  { id: 6, type: "video", src: video3 },
  { id: 7, type: "image", src: image4 },
  { id: 8, type: "video", src: video4 },
  { id: 9, type: "image", src: image5 },
  { id: 10, type: "video", src: video5 },
  { id: 11, type: "image", src: image6 },
  { id: 12, type: "image", src: image7 },
  { id: 13, type: "image", src: image8 },
  { id: 14, type: "image", src: image9 },
  { id: 15, type: "visa", src: visa1 },
  { id: 16, type: "visa", src: visa2 },
  { id: 17, type: "visa", src: visa3 },
  { id: 18, type: "visa", src: visa4 },
  { id: 19, type: "image", src: image10 },
  { id: 20, type: "image", src: image11 },
  { id: 21, type: "video", src: video6 },
  { id: 22, type: "video", src: video7 },
  { id: 23, type: "video", src: video8 },
  { id: 24, type: "video", src: video9 },
  { id: 25, type: "visa", src: visa5 },
  { id: 26, type: "visa", src: visa6 },
  { id: 27, type: "visa", src: visa7 },
  { id: 28, type: "visa", src: visa8 },
  { id: 29, type: "visa", src: visa9 },
  { id: 30, type: "visa", src: visa10 },
  { id: 31, type: "visa", src: visa11 },
  { id: 32, type: "visa", src: visa5 },
{ id: 33, type: "image", src: image12 },
{ id: 34, type: "image", src: image13 },
{ id: 35, type: "image", src: image14},
{ id: 36, type: "image", src: image15 },
{ id: 37, type: "image", src: image16 },
{ id: 38, type: "image", src: image17 },
{ id: 39, type: "image", src: image18 },
{ id: 40, type: "image", src: image19 },
{ id: 41, type: "image", src: image20 },
{ id: 42, type: "image", src: image21 },
{ id: 43, type: "image", src: image22 },
{ id: 44, type: "image", src: image23 },
{ id: 45, type: "image", src: image24 },
{ id: 46, type: "image", src: image25 },
{ id: 47, type: "image", src: image26 },
{ id: 48, type: "image", src: image27 },
{ id: 49, type: "visa", src: visa12 },
{ id: 50, type: "visa", src: visa13},
{ id: 51, type: "visa", src: visa14 },
{ id: 52, type: "visa", src: visa15 },

];

// Masonry Breakpoints
const breakpointColumns = {
  default: 4,
  1024: 3,
  768: 2,
  480: 1,
};

// Gallery Component
const Gallery = () => {
  const [filter, setFilter] = useState("image");

  const filteredItems = galleryItems.filter((item) => item.type === filter);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Filter Buttons */}
      <div className="flex justify-center mb-6 space-x-4">
        {["image", "video", "visa"].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-md ${filter === type ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            onClick={() => setFilter(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Masonry Layout */}
      <Masonry breakpointCols={breakpointColumns} className="flex gap-4" columnClassName="masonry-column">
        {filteredItems.map((item) => (
          <div key={item.id} className="overflow-hidden mt-2 rounded-lg shadow-lg transition-transform hover:scale-105">
            {item.type === "video" ? (
              <video controls className="w-full h-auto rounded-lg">
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <img src={item.src} alt="Gallery Item" className="w-full h-auto rounded-lg" loading="lazy" />
            )}
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
