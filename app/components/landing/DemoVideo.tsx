"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import DemoThumbnail from "../../../assets/DemoThumbnail.png";


const DemoVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleLoadVideo = () => {
    setIsVideoLoaded(true);
  };

  const VIDEO_ID = "1i1l75xb6WkWZEw48kVHASAe2sB3WSZRA"; // your Google Drive file ID
  const VIDEO_EMBED_URL = `https://drive.google.com/file/d/${VIDEO_ID}/preview`;

  return (
    <div id="demo" className="w-full border-b border-[#252525] py-2 ">
      <div className="w-full border border-dashed border-[#252525] p-8 relative ">
        {/* Left pattern */}
        <div
          style={{
            height: "100%",
            borderRight: "1px dashed #252525",
            backgroundImage:
              "repeating-linear-gradient(315deg, #252525 0, #252525 1px, transparent 0, transparent 50%)",
            backgroundSize: "10px 10px",
          }}
          className="w-[30px] lg:w-[50px] absolute left-0 top-0 hidden lg:block"
        />

        {/* Right pattern */}
        <div
          style={{
            height: "100%",
            borderLeft: "1px dashed #252525",
            backgroundImage:
              "repeating-linear-gradient(315deg, #252525 0, #252525 1px, transparent 0, transparent 50%)",
            backgroundSize: "10px 10px",
          }}
          className="w-[30px] lg:w-[50px] absolute right-0 top-0 hidden lg:block"
        />

        <div className="relative w-full lg:w-[70%] mx-auto overflow-hidden rounded-2xl aspect-video">
          {!isVideoLoaded ? (
            <button
              onClick={handleLoadVideo}
              type="button"
              className="absolute inset-0 w-full h-full group cursor-pointer"
              aria-label="Play video"
            >
              {/* Assignment Thumbnail */}
              <Image
                src={DemoThumbnail}
                alt="Demo video "
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-2xl">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>
            </button>
          ) : (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={VIDEO_EMBED_URL}
              title="Assignment Demo Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoVideo;
