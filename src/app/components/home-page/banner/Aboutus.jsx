import React from 'react'

const Aboutus = () => {
  return (
    <section className="px-4 md:px-8 xl:px-[100px] w-full bg-black pt-[100px] lg:pt-[150px]">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="flex flex-col items-start w-full md:w-1/3">
            <h2 className="text-[2rem] lg:text-6xl font-bold text-white lg:mb-10">
              About Us
            </h2>
            <button className="hidden md:block bg-yellow-400 text-black font-semibold px-6 py-2 mt-5 rounded-full hover:bg-yellow-300 hover:drop-shadow-[0_0_5px_#FFD000] transition duration-300 cursor-pointer">
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
  )
}

export default Aboutus
