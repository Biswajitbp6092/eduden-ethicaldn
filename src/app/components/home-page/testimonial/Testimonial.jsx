"use client";
import React from "react";
import Slider from "react-slick";
import { GoStarFill } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const testimonial = [
    {
      id: 1,
      name: "Nazmul Islam",
      profesion: "Graphics Designer",
      image: "assets/clint-img.jpg",
      rating: 5,
      text: "Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesentEx urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent",
    },
    {
      id: 2,
      name: "Biswajit Biswas",
      profesion: "Web Developer",
      image: "assets/clint-img.jpg",
      rating: 5,
      text: "Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesentEx urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent",
    },
    {
      id: 3,
      name: "Joy Sutradhar",
      profesion: "UI/UX Designer",
      image: "assets/clint-img.jpg",
      rating: 5,
      text: "Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesentEx urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="w-full h-auto pt-[100px] lg:pt-[150px] bg-black">
      <div className="w-full h-auto lg:h-[500px] py-[4rem] lg:py[0px] relative overflow-hidden ">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src="assets/Testimonial-img.jpg"
          alt="Testimonial Background"
        />

        <div className="relative z-10 h-full flex items-center justify-center px-4 lg:px-8 xl:px-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
            {/* Left: Testimonial Slider */}

            <div className="max-w-xl order-2 md:order-1">
              <Slider {...settings}>
                {testimonial.map((test) => (
                  <div
                    key={test.id}
                    className="bg-[#1F1F1F] rounded-lg p-8 shadow-lg"
                  >
                    <div className="flex items-center justify-between text-center">
                      <FaQuoteLeft size={32} color="#ffffff" />
                      <div className="flex text-yellow-600 text-2xl">
                        {[...Array(test.rating)].map((_, index) => (
                          <GoStarFill key={index} />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm py-6">{test.text}</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={test.image}
                        alt={test.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-white font-semibold text-xl">
                          {test.name}
                        </h4>
                        <p className="text-yellow-400 text-base">
                          {test.profesion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Right: Text Content */}
            <div className="text-white max-w-xl order-1 md:order-2">
              <h5 className="text-yellow-400 text-2xl mb-2">Testimonial</h5>
              <h2 className=" text-4xl lg:text-[50px] font-bold mb-4 leading-snug">
                What students say
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Ex urna finibus natoque auctor pretium etiam consequat eleifend
                himenaeos mauris placerat ridiculus odio praesent Ex urna
                finibus natoque auctor pretium etiam consequat eleifend
                himenaeos mauris placerat ridiculus odio praesent.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-300 hover:drop-shadow-[0_0_5px_#FFD000] cursor-pointer text-black px-6 py-2 rounded-full text-sm font-semibold transition">
                View All Testimonial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
