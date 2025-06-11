"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const Placement = () => {
  return (
    <div className="bg-black text-white pt-[100px] lg:pt-[150px] px-4 lg:px-[100px] flex flex-col lg:flex-row justify-between items-center gap-12">
     
      <div className="w-full lg:w-[60%] mb-10 lg:mb-0">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl pb-5 leading-tight lg:w-lg">
          Our Student
          <span className="border-b-2 border-yellow-300"> Placement</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed lg:pr-8">
          Well, because we’re not your grandma’s boring old school! At Edu-Den,
          we’re the rebels of education, the mavericks of learning, and the
          champions of fun-filled knowledge. We’ll teach you how to slay dragons
          and code websites, all while cracking jokes and sipping on virtual
          coffee. So, why settle for snooze-worthy lectures when you can join
          the Edu-Den revolution? Let’s make learning epic together! Well,
          because we’re not your grandma’s boring old school! At Edu-Den, we’re
          the rebels of education, the mavericks of learning.
        </p>
      </div>

    
      <div className="w-full lg:w-[40%] space-y-12">
        <Marquee speed={20} gradient={true} gradientColor='black' pauseOnHover={true} autoFill={true}>
          <img className="h-[24px] sm:h-[28px] md:h-[30px] mx-6" src="assets/amajon.png" alt="Amazon" />
          <img className="h-[24px] sm:h-[28px] md:h-[30px] mx-6" src="assets/vmware.png" alt="VMware" />
          <img className="h-[24px] sm:h-[28px] md:h-[50px] mx-6" src="assets/ey.png" alt="EY" />
        </Marquee>

        <Marquee
          speed={20}
          autoFill={true}
          gradient={true}
          gradientColor='black'
          pauseOnHover={true}
          direction="right"
        >
          <img className="h-[24px] sm:h-[28px] md:h-[30px] mx-6" src="assets/ibm.png" alt="IBM" />
          <img className="h-[24px] sm:h-[28px] md:h-[30px] mx-6" src="assets/tcs.png" alt="TCS" />
          <img className="h-[24px] sm:h-[28px] md:h-[30px] mx-6" src="assets/cisco.png" alt="Cisco" />
        </Marquee>

        <Marquee speed={20} gradient={true} gradientColor='black' pauseOnHover={true}  autoFill={true}>
          <img className="h-[24px] sm:h-[28px] md:h-[30px] mx-6" src="assets/ethicalden.png" alt="EthicalDen" />
          <img className="h-[24px] sm:h-[28px] md:h-[30px] mx-6" src="assets/accenture.png" alt="Accenture" />
        </Marquee>

        <Marquee
          speed={20}
           autoFill={true}
          gradient={true}
          gradientColor='black'
          pauseOnHover={true}        
          direction="right"
        >
          <img className="h-[24px] sm:h-[28px] md:h-[30px] mx-6" src="assets/paloalto.png" alt="Palo Alto" />
          <img className="h-[24px] sm:h-[28px] md:h-[30px] mx-6" src="assets/jio.png" alt="Jio" />
          <img className="h-[24px] sm:h-[28px] md:h-[30px] mx-6" src="assets/deolitte..png" alt="Deloitte" />
        </Marquee>
      </div>
    </div>
  );
};

export default Placement;
