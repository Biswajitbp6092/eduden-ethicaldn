'use client';
import React from 'react';
import Slider from 'react-slick';
import { GoArrowDownRight } from 'react-icons/go';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute bottom-10 right-10 z-10 cursor-pointer text-white"
    onClick={onClick}
  >
    <FaArrowRightLong />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute bottom-10 left-10 z-10 cursor-pointer text-white"
    onClick={onClick}
  >
    <FaArrowLeftLong />
  </div>
);

const Banner = () => {
  const bannerSetting = {
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const bannerContent = [
    {
      id: 1,
      toptitle: 'WELCOME TO EDUDEN',
      title: 'Where Learning Meets Imagination & Innovation!',
      subtitle:
        "we're your one-stop destination for unlocking your potential and conquering the digital realm with confidence.",
      button: 'Discover More',
      images: '/assets/banner-img.jpg',
    },
    {
      id: 2,
      toptitle: 'WELCOME TO EDUDEN',
      title: 'Where Learning Meets Imagination & Innovation!',
      subtitle:
        "we're your one-stop destination for unlocking your potential and conquering the digital realm with confidence.",
      button: 'Discover More',
      images: '/assets/banner-img.jpg',
    },
    {
      id: 3,
      toptitle: 'WELCOME TO EDUDEN',
      title: 'Where Learning Meets Imagination & Innovation!',
      subtitle:
        "we're your one-stop destination for unlocking your potential and conquering the digital realm with confidence.",
      button: 'Discover More',
      images: '/assets/banner-img.jpg',
    },
  ];

  return (
    <div className="w-full h-auto bg-black overflow-hidden">
      <div className="px-4 lg:px-8 xl:px-[100px] w-full pt-[1rem]">
        <Slider {...bannerSetting}>
          {bannerContent.map((banner) => (
            <div key={banner.id} className="relative h-[600px]">
              <img
                src={banner.images}
                alt={banner.title}
                className="w-full h-full object-cover rounded-2xl transform scale-x-[-1]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>

              <div className="absolute inset-0 flex justify-between items-center px-7">
                <div className="max-w-xl">
                  <p className="text-sm border border-white rounded-lg px-3 py-2 text-yellow-300 mb-4 inline-block">
                    {banner.toptitle}
                  </p>
                  <h1 className="text-[2rem] lg:text-6xl font-bold mb-4 max-w-xl leading-tight text-white">
                    {banner.title}
                  </h1>
                  <p className="text-base max-w-xl mb-4 text-lg text-white">
                    {banner.subtitle}
                  </p>
                  <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 hover:drop-shadow-[0_0_5px_#FFD000] transition duration-300 flex items-center gap-2 cursor-pointer">
                    {banner.button}
                    <GoArrowDownRight />
                  </button>
                </div>

                <div className="hidden md:flex w-[46px] h-[320px] bg-yellow-400 flex flex-col justify-between items-center rounded-full">
                  <div className="rotate-90 whitespace-nowrap pl-[6rem] font-bold">
                    follow now
                  </div>

                  <div className="flex flex-col items-center gap-2 py-2">
                    <HiOutlineArrowNarrowDown size={40} className="pb-4" />
                    <a href="#" target="_blank" rel="">
                      <img
                        src="/assets/facebook.svg"
                        alt="Facebook"
                        className="w-7 h-7 cursor-pointer transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_5px_#000000]"
                      />
                    </a>
                    <a href="#" target="_blank" rel="">
                      <img
                        src="/assets/ig.svg"
                        alt="Instagram"
                        className="w-7 h-7 cursor-pointer transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_5px_#000000]"
                      />
                    </a>
                    <a href="#" target="_blank" rel="">
                      <img
                        src="/assets/youtube.svg"
                        alt="YouTube"
                        className="w-7 h-7 cursor-pointer transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_5px_#000000]"
                      />
                    </a>
                    <a href="#" target="_blank" rel="">
                      <img
                        src="/assets/in.svg"
                        alt="LinkedIn"
                        className="w-7 h-7 cursor-pointer transition duration-300 hover:scale-110 hover:drop-shadow-[0_0_5px_#000000]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
