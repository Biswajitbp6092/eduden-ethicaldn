import React from "react";

const Help = () => {
  return (
    <section className="bg-black">
      <div className=" w-full h-[400px] relative overflow-hidden pt-[100px] lg:pt-[150px]">
        <img
          className="w-full h-full object-cover"
          src="assets/banner-4.jpg"
          alt=""
        />

        <div className="px-4 lg:px-[100px] absolute inset-0 text-white flex justify-between">
          <div className="">
            <h1>Need Help?</h1>
            <p>
              Join the Learning Party Now – No Boring Stuff Allowed. Join the
              Learning Party Now – No Boring Stuff Allowed. Join the Learning
              Party Now – No Boring Stuff Allowed.
            </p>
          </div>
          <button className="bg-yellow-400 hover:bg-yellow-500 cursor-pointer text-black px-6 py-2 rounded-full text-sm font-semibold transition">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Help;
