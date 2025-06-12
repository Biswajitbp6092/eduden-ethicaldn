import React from "react";

const Help = () => {
  return (
    <section className="bg-black w-full h-auto pt-[100px] lg:pt-[150px]">
      <div className="relative overflow-hidden w-full h-[400px]">
        <img
          className="w-full h-full object-cover absolute inset-0"
          src="assets/banner-4.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col lg:flex-row text-white item-left lg:items-center justify-center xl:justify-between px-6 lg:px-[100px] h-full">
          <div className="max-w-[600px]">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Need Help?</h1>
            <p className="text-sm lg:text-base opacity-80">
              Join the Learning Party Now – No Boring Stuff Allowed. Join the
              Learning Party Now – No Boring Stuff Allowed. Join the Learning
              Party Now – No Boring Stuff Allowed.
            </p>
          </div>

          <button className="bg-yellow-400 hover:bg-yellow-500 cursor-pointer text-black px-6 py-2 mt-6 lg:mt-0 rounded-full text-sm font-semibold transition self-start lg:self-auto">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Help;
