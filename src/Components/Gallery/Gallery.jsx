import React from "react";
import Masonry from "react-masonry-css";
import video from "../../Videos/WhatsApp Video 2025-02-19 at 04.59.58_8cd6e759.mp4"
import video2 from "../../Videos/WhatsApp Video 2025-02-19 at 05.00.00_31659340.mp4"
import video3 from "../../Videos/WhatsApp Video 2025-02-19 at 04.59.59_ce82ded5.mp4"
import video4 from "../../Videos/WhatsApp Video 2025-02-27 at 02.52.37_92058904.mp4"
import image from "../../Images/WhatsApp Image 2025-02-19 at 04.59.47_3fc6f46e.jpg"
import image2 from "../../Images/WhatsApp Image 2025-02-19 at 04.59.48_24f33a82.jpg"
import image3 from "../../Images/WhatsApp Image 2025-02-19 at 04.59.52_864f0408.jpg"
import image4 from "../../Images/WhatsApp Image 2025-02-19 at 04.59.54_ae8d0641.jpg"
import image5 from "../../Images/WhatsApp Image 2025-02-19 at 04.59.56_4f89b9e5.jpg"






const galleryItems = [
  { id: 1, type: "image", src: image},
  { id: 2, type: "video", src: video },
  { id: 3, type: "image", src: image2 },
  { id: 4, type: "video", src: video2 },
  { id: 5, type: "image", src: image3 },
  { id: 6, type: "video", src: video3 },
  { id: 7, type: "image", src: image4},
  { id: 8, type: "video", src: video4 },


];

const breakpointColumns = {
  default: 3,
  1024: 2,
  768: 1,
};

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      
      <Masonry breakpointCols={breakpointColumns} className="flex gap-4" columnClassName="masonry-column">
        {galleryItems.map((item) => (
          <div key={item.id} className="overflow-hidden mt-2 md:mt-6 rounded-lg shadow-lg">
            {item.type === "image" ? (
              <img src={item.src} alt="Gallery Item" className="w-full h-auto" />
            ) : (
              <video controls className="w-full h-auto">
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
