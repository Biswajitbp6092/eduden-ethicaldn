"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";

const Coursvideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    // Cleanup
    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  return (
    <section className="mt-0 w-full bg-black pt-[100px] lg:pt-[150px]">
      <div className="w-full h-200px lg:h-[600px] overflow-hidden relative flex justify-center items-center">
        <video
          ref={videoRef}
          controls={false}
          poster="assets/course-img/video-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source
            src="assets/course-img/1 Minute Video - Doggie.mp4"
            type="video/mp4"
          />
        </video>

        <button
          onClick={handlePlayPause}
          className="absolute  flex items-center justify-center transition hover:scale-110 cursor-pointer"
        >
          {isPlaying ? (
            <FaCirclePause size={52} color="#ffffff" />
          ) : (
            <FaCirclePlay size={52} color="#ffffff" />
          )}
        </button>
      </div>
    </section>
  );
};

export default Coursvideo;
