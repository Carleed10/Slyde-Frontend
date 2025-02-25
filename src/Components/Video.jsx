import React from "react";

const Video = () => {
  return (
    <div className="flex justify-center items-center px-4 py-8">
      <div className="w-[90%] lg:w-[80%] xl:w-[70%]">
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/1lZ09OskoGM"
            title="Uk Student Visa"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
