"use client";
import React from "react";
import Slider from "react-slick";
import { GoArrowDownRight } from "react-icons/go";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";

const Banner = () => {
  const bannerSetting = {
    dots: true,
    arow: true,
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
    <div className="w-full h-auto bg-black">
      <div className="px-4 lg:px-[100px] w-full pt-[5rem]">
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
                  <h1 className=" text-[2rem] lg:text-6xl font-bold mb-4 max-w-xl leading-tight text-white">
                    {banner.title}
                  </h1>
                  <p className="text-base max-w-xl mb-4 text-lg text-white">
                    {banner.subtitle}
                  </p>
                  <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300 flex items-center gap-2 cursor-pointer">
                    {banner.button}
                    <GoArrowDownRight />
                  </button>
                </div>

                <div className=" hidden lg:flex w-[46px] h-[306px] py-5 bg-yellow-300 rounded-full flex flex-col items-center justify-between">
                  <div className="rotate-90 origin-center text-center flex items-center gap-2 text-black font-medium whitespace-nowrap">
                    follow now
                    <HiOutlineArrowNarrowDown className="-rotate-90" />
                  </div>

                  <div className="flex flex-col gap-3 ">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/assets/facebook.svg"
                        alt="Facebook"
                        className="w-6 h-6"
                      />
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/assets/ig.svg"
                        alt="Instagram"
                        className="w-6 h-6"
                      />
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/assets/youtube.svg"
                        alt="YouTube"
                        className="w-6 h-6"
                      />
                    </a>

                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        src="/assets/in.svg"
                        alt="LinkedIn"
                        className="w-6 h-6"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <section className="w-full px-4 md:px-16 pt-[100px] lg:pt-[150px] bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="flex flex-col items-start w-full md:w-1/3">
            <h2 className="text-[2rem] lg:text-6xl font-bold text-white lg:mb-10">
              About Us
            </h2>
            <button className=" hidden md:block bg-yellow-400 text-black font-semibold px-6 py-2 mt-5 rounded-full hover:bg-yellow-500 transition duration-300">
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
          <button className="self-start block md:hidden bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition duration-300">
            Read More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
