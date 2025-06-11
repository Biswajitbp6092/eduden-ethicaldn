import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Marquee from "react-fast-marquee";

const Collaboration = () => {
  return (
    <section className="px-4 lg:px-[100px] w-full bg-black pt-[100px] lg:pt-[150px]">
      <h5 className="text-center pb-2 lg:pb-4 text-yellow-300 flex items-center gap-3 justify-center ">
        <TfiLayoutLineSolid size={32} />
        Our Partner
        <TfiLayoutLineSolid size={32} />
      </h5>
      <h2 className="text-[2rem] lg:text-6xl font-bold text-center text-white pb-4">
        Our <span className="border-b-3 border-yellow-300">Collaboration</span>
      </h2>

      <p className="text-white items-center text-left lg:text-center pt-5 xl:px-[150px] text-md leading-loose">
        Well, because we’re not your grandma’s boring old school! At Edu-Den,
        we’re the rebels of education, the mavericks of learning, and the
        champions of fun-filled knowledge. We’ll teach you how to slay dragons
        and code websites, all while cracking jokes and sipping on virtual
        coffee. So, why settle for snooze-worthy lectures when you can join the
        Edu-Den revolution? Let’s make learning epic together!Well, because
        we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels
        of education, the mavericks of learning.
      </p>
      
      <div className="w-full pt-10 flex items-center">
        <Marquee speed={30} gradient={true} gradientColor="black" autoFill={true} pauseOnHover={true}>
          <img className="px-8 h-[30px] " src="assets/collaboration logos/logo-1.png" alt="logo-1" />
          <img className="px-8 h-[30px] " src="assets/collaboration logos/logo-2.png" alt="logo-1" />
          <img className="px-8 h-[60px] " src="assets/collaboration logos/logo-3.png" alt="logo-1" />
          <img className="px-8 h-[60px] " src="assets/collaboration logos/logo-4.png" alt="logo-1" />
        </Marquee>
      </div>
    </section>
    
  );
};

export default Collaboration;
