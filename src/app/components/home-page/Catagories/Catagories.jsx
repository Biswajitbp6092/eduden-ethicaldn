import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const Catagories = () => {
  const courses = [
    {
      id: 1,
      title: "Cyber Security",
      subtitle:
        "Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse",
      icon: "assets/course-icon-1.svg",
    },
    {
      id: 2,
      title: "UI/UX Design",
      subtitle:
        "Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse",
      icon: "assets/course-icon-2.svg",
    },
    {
      id: 3,
      title: "Web Development",
      subtitle:
        "Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse",
      icon: "assets/course-icon-3.svg",
    },
    {
      id: 4,
      title: "Graphic Design",
      subtitle:
        "Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse",
      icon: "assets/course-icon-4.svg",
    },
    {
      id: 5,
      title: "Graphic Design",
      subtitle:
        "Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse",
      icon: "assets/course-icon-5.svg",
    },
    {
      id: 6,
      title: "Graphic Design",
      subtitle:
        "Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse",
      icon: "assets/course-icon-6.svg",
    },
    {
      id: 7,
      title: "Graphic Design",
      subtitle:
        "Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse",
      icon: "assets/course-icon-7.svg",
    },
    {
      id: 8,
      title: "Graphic Design",
      subtitle:
        "Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse",
      icon: "assets/course-icon-8.svg",
    },
  ];

  return (
    <section className="px-4 lg:px-8 xl:px-[100px] w-full bg-black pt-[100px] lg:pt-[150px]">
      <h5 className="text-center pb-2 lg:pb-4 text-yellow-300 flex items-center gap-3 justify-center ">
        <TfiLayoutLineSolid size={32} />
        Popular Categories
        <TfiLayoutLineSolid size={32} />
      </h5>
      <h2 className="text-[2rem] lg:text-6xl font-bold mb-8 text-center text-white pb-4">
        Course <span className="border-b-3 border-yellow-300">Catagories</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {courses.map(({ id, icon, title, subtitle }) => (
          <div
            key={id}
            className="group relative flex flex-col items-center text-center py-5 px-4 bg-[#FFFFFF1A] shadow-md hover:bg-yellow-500 hover:bg-opacity-100 transition-all duration-300 ease-in-out rounded-xl cursor-pointer overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-in-out"
              style={{
                backgroundImage: `url('assets/hover-img.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0,
              }}
            ></div>

            <div className="relative z-10 flex flex-col items-center justify-center flex-1">
              <div
                className="mb-5 p-3 bg-yellow-300 rounded-full flex items-center justify-center w-16 h-16 transition-all duration-300 ease-in-out
      group-hover:bg-black"
              >
                <img
                  src={icon}
                  alt={title}
                  className="w-8 h-8 object-contain filter transition-all duration-300 ease-in-out
        group-hover:brightness-0 group-hover:invert"
                />
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-black text-center mb-3 transition-all duration-300 ease-in-out">
                {title}
              </h3>
              <p className="font-normal text-[14px] leading-normal text-center text-white group-hover:text-black mb-5 transition-all duration-300 ease-in-out">
                {subtitle}
              </p>
              <HiArrowLongRight
                size={42}
                className="text-yellow-300 group-hover:text-black transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catagories;
