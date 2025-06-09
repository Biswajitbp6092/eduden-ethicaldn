"use client";
import React from "react";
import Slider from "react-slick";
import { GoArrowDownRight } from "react-icons/go";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

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
  };

  const bannerContent = [
    {
      id: 1,
      toptitle: "WELCOME TO EDUDEN",
      title: "Where Learning Meets Imagination & Innovation!",
      subtitle:
        "we're your one-stop destination for unlocking your potential and conquering the digital realm with confidence.",
      button: "Discover More",
      images: "/assets/banner-img.jpg",
    },
    {
      id: 2,
      toptitle: "WELCOME TO EDUDEN",
      title: "Where Learning Meets Imagination & Innovation!",
      subtitle:
        "we're your one-stop destination for unlocking your potential and conquering the digital realm with confidence.",
      button: "Discover More",
      images: "/assets/banner-img.jpg",
    },
    {
      id: 3,
      toptitle: "WELCOME TO EDUDEN",
      title: "Where Learning Meets Imagination & Innovation!",
      subtitle:
        "we're your one-stop destination for unlocking your potential and conquering the digital realm with confidence.",
      button: "Discover More",
      images: "/assets/banner-img.jpg",
    },
  ];

  return (
    <div className="w-full h-auto">
      <div className="px-4 lg:px-[100px] w-full mt-[6rem]">
        <Slider {...bannerSetting}>
          {bannerContent.map((banner) => (
            <div key={banner.id} className="relative h-[600px]">
              <img
                src={banner.images}
                alt={banner.title}
                className="w-full h-full object-cover rounded-2xl"
              />

              <div className="absolute inset-0 flex justify-between items-center px-7">
                <div className="max-w-xl">
                  <p className="text-sm border border-white rounded-lg px-3 py-2 text-yellow-300 mb-4 inline-block">
                    {banner.toptitle}
                  </p>
                  <h1 className="text-6xl font-bold mb-4 max-w-xl leading-tight">
                    {banner.title}
                  </h1>
                  <p className="text-base max-w-xl mb-4 text-lg">
                    {banner.subtitle}
                  </p>
                  <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300 flex items-center gap-2 cursor-pointer">
                    {banner.button}
                    <GoArrowDownRight />
                  </button>
                </div>

                <div className="w-[46px] h-[306px] py-5 bg-yellow-300 rounded-full flex flex-col items-center justify-between">
                  <div className="rotate-90 origin-center flex items-center gap-2 text-black font-medium whitespace-nowrap mb-3">
                    follow now
                    <HiOutlineArrowNarrowDown />
                  </div>

                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/facebook.svg"
                      alt="Facebook"
                      className="w-6 h-6 mb-3"
                    />
                  </a>

                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/ig.svg"
                      alt="Instagram"
                      className="w-6 h-6 mb-3"
                    />
                  </a>

                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/youtube.svg"
                      alt="YouTube"
                      className="w-6 h-6 mb-3"
                    />
                  </a>

                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/assets/in.svg"
                      alt="LinkedIn"
                      className="w-6 h-6 mb-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <section className="w-full px-4 md:px-16 py-16 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="flex flex-col items-start w-full md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
              About Us
            </h2>
            <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300">
              Read More
            </button>
          </div>

          <div className="w-full md:w-2/3 text-white text-base leading-relaxed">
            <p className="">
              Well, because we’re not your grandma’s boring old school! At
              Edu-Den, we’re the rebels of education, the mavericks of learning,
              and the champions of fun-filled knowledge. We’ll teach you how to
              slay dragons and code websites, all while cracking jokes and
              sipping on virtual coffee. So, why settle for snooze-worthy
              lectures when you can join the Edu-Den revolution? Let’s make
              learning epic together!
            </p>
            <p className="pt-6">
              Well, because we’re not your grandma’s boring old school! At
              Edu-Den, we’re the rebels of education, the mavericks of learning,
              and the champions of fun-filled knowledge. We’ll teach you how to
              slay dragons and code websites, all while cracking jokes and
              sipping on virtual coffee.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
