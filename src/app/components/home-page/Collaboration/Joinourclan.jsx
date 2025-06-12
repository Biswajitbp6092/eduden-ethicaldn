import React from "react";

const Joinourclan = () => {
  return (
    <section className="bg-black w-full h-[629px] pt-[100px] lg:pt-[150px] overflow-hidden relative">
  <img
    className="w-full h-full object-cover opacity-50    "
    src="assets/banner-img-2.jpg"
    alt="Banner Image"
  />

  <div className="absolute inset-0 text-white text-center translate-y-[50%]">
    <div>
      <h6 className="text-xl mb-2 text-yellow-300">Join Our Clan</h6>
      <h1 className="text-3xl lg:text-5xl font-bold mb-4">Unlock Your Inner <br /> Genius at Edu-Den!</h1>
      <p className="text-base lg:text-lg mb-6">Join the Learning Party Now – No Boring Stuff Allowed.</p>
      <button className="bg-yellow-300 text-black px-6 py-2 rounded-full hover:bg-yellow-300 hover:drop-shadow-[0_0_5px_#FFD000] transition cursor-pointer">Enroll Now</button>
    </div>
  </div>
</section>

  );
};

export default Joinourclan;
