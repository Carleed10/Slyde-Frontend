import React, { useState } from "react";
import Masonry from "react-masonry-css";
import video from "../../Videos/WhatsApp Video 2025-02-19 at 04.59.58_8cd6e759.mp4";
import video2 from "../../Videos/WhatsApp Video 2025-02-19 at 05.00.00_31659340.mp4";
import video3 from "../../Videos/WhatsApp Video 2025-02-19 at 04.59.59_ce82ded5.mp4";
import video4 from "../../Videos/WhatsApp Video 2025-02-27 at 02.52.37_92058904.mp4";
import video5 from "../../Videos/WhatsApp Video 2025-02-19 at 04.59.39_0cfa36f7.mp4";
import image from "../../Images/WhatsApp Image 2025-02-19 at 04.59.47_3fc6f46e.jpg";
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
// import image13 from "../../Images/New folder/WhatsApp Image 2025-02-28 at 13.07.49_a0ba5b7a.jpg";


const galleryItems = [
  { id: 1, type: "image", src: image },
  { id: 2, type: "video", src: video },
  { id: 3, type: "image", src: image2 },
  { id: 4, type: "video", src: video2 },
  { id: 5, type: "image", src: image3 },
  { id: 6, type: "video", src: video3 },
  { id: 7, type: "image", src: image4 },
  { id: 8, type: "video", src: video4 },
  { id: 9, type: "image", src: image5 },
  { id: 10, type: "image", src: image6 },
  { id: 11, type: "image", src: image7 },
  { id: 12, type: "image", src: image8 },
  { id: 13, type: "image", src: image9 },
  { id: 14, type: "image", src: image10 },
  { id: 15, type: "image", src: image11 },
  { id: 16, type: "image", src: image12 },
  { id: 17, type: "video", src: video5 },

  
  // { id: 17, type: "image", src: image13 },
];

const breakpointColumns = {
  default: 4,
  1024: 3,
  768: 2,
  480: 1,
};

const Gallery = () => {
  const [filter, setFilter] = useState("image");

  const filteredItems = galleryItems.filter((item) => item.type === filter);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Filter Buttons */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          className={`px-4 py-2 rounded-md ${filter === "image" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setFilter("image")}
        >
          Images
        </button>
        <button
          className={`px-4 py-2 rounded-md ${filter === "video" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setFilter("video")}
        >
          Videos
        </button>
      </div>

      {/* Masonry Layout */}
      <Masonry breakpointCols={breakpointColumns} className="flex gap-4" columnClassName="masonry-column">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden mt-2 md:mt-6 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            {item.type === "image" ? (
              <img src={item.src} alt="Gallery Item" className="w-full h-auto rounded-lg" loading="lazy" />
            ) : (
              <video controls className="w-full h-auto rounded-lg">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallery;
