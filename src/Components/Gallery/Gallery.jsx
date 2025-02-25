import React from "react";
import Masonry from "react-masonry-css";

const galleryItems = [
  { id: 1, type: "image", src: "https://source.unsplash.com/random/400x300" },
  { id: 2, type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 3, type: "image", src: "https://source.unsplash.com/random/400x400" },
  { id: 4, type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
  { id: 5, type: "image", src: "https://source.unsplash.com/random/400x500" },
];

const breakpointColumns = {
  default: 3,
  1024: 2,
  768: 1,
};

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
      
      <Masonry breakpointCols={breakpointColumns} className="flex gap-4" columnClassName="masonry-column">
        {galleryItems.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-lg shadow-lg">
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
