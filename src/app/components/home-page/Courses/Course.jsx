"use client";
import React, { useState } from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { IoIosPeople } from "react-icons/io";
import { LuClock } from "react-icons/lu";
import { FaRegComments } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";

const categories = [
  "Show All",
  "Graphics Design",
  "Ux/UI Design",
  "Web Development",
  "Mobile App Development",
  "Programming",
  "Ethical Hacking",
];

const courses = [
  {
    id: 1,
    category: "Ux/UI Design",
    title: "UI/UX Design for Web and Mobile for Kids",
    subtitle:
      "we're your one-stop destination for unlocking your potential and conquering the digital.",
    price: "$120",
    rating: 5,
    image: "assets/course-img/course-img-1.jpg",
    students: "25",
    duration: "36hr",
    views: "2.5k",
    featured: false,
  },
  {
    id: 2,
    category: "Graphics Design",
    title: "Introduce About Graphic Design for Beginners",
    subtitle:
      "we're your one-stop destination for unlocking your potential and conquering the digital.",
    price: "$120",
    rating: 5,
    image: "assets/course-img/course-img-2.jpg",
    students: "25",
    duration: "36hr",
    views: "2.5k",
    featured: true,
  },
  {
    id: 3,
    category: "Programming",
    title: "Introduction to Python Programming",
    subtitle:
      "we're your one-stop destination for unlocking your potential and conquering the digital.",
    price: "$120",
    rating: 5,
    image: "assets/course-img/course-img-3.jpg",
    students: "25",
    duration: "36hr",
    views: "2.5k",
    featured: false,
  },
  {
    id: 4,
    category: "Cyber Security",
    title: "Data Science and Machine Learning",
    subtitle:
      "we're your one-stop destination for unlocking your potential and conquering the digital.",
    price: "$120",
    rating: 5,
    image: "assets/course-img/course-img-1.jpg",
    students: "25",
    duration: "36hr",
    views: "2.5k",
    featured: false,
  },
  {
    id: 5,
    category: "Ethical Hacking",
    title: "Ethical Hacking and Penetration Testing",
    subtitle:
      "we're your one-stop destination for unlocking your potential and conquering the digital.",
    price: "$120",
    rating: 5,
    image: "assets/course-img/course-img-2.jpg",
    students: "25",
    duration: "36hr",
    views: "2.5k",
    featured: false,
  },
  {
    id: 6,
    category: "Mobile App",
    title: "Network Administration (CCNA)",
    subtitle:
      "we're your one-stop destination for unlocking your potential and conquering the digital.",
    price: "$120",
    rating: 5,
    image: "assets/course-img/course-img-3.jpg",
    students: "25",
    duration: "36hr",
    views: "2.5k",
    featured: false,
  },
  {
    id: 7,
    category: "Web Development",
    title: "Popular course in Web Development",
    subtitle:
      "we're your one-stop destination for unlocking your potential and conquering the digital.",
    price: "$120",
    rating: 5,
    image: "assets/course-img/course-img-1.jpg",
    students: "25",
    duration: "36hr",
    views: "2.5k",
    featured: false,
  },
  {
    id: 8,
    category: "Cyber Security",
    title: "DevOps and Continuous Integration",
    subtitle:
      "we're your one-stop destination for unlocking your potential and conquering the digital.",
    price: "$120",
    rating: 5,
    image: "assets/course-img/course-img-2.jpg",
    students: "25",
    duration: "36hr",
    views: "2.5k",
    featured: false,
  },
];

const Course = () => {
  const [selectedCategory, setSelectedCategory] = useState("Show All");

  const filteredCourses =
    selectedCategory === "Show All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <section className="mt-0 px-4 lg:px-8 xl:px-[100px] w-full bg-black pt-[100px] lg:pt-[150px]">
      <h5 className="text-center pb-2 lg:pb-4 text-yellow-300 flex items-center gap-3 justify-center ">
        <TfiLayoutLineSolid size={32} />
        Popular Courses
        <TfiLayoutLineSolid size={32} />
      </h5>
      <h2 className="text-[2rem] lg:text-6xl font-bold mb-8 text-center text-white pb-4">
        All <span className="border-b-3 border-yellow-300">Courses</span>
      </h2>

      {/* Nav Tabs */}
      <nav className="flex gap-2.5 mb-10 text-md font-semibold flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 transition-all duration-300 ease-in-out ${
              selectedCategory === cat
                ? "bg-yellow-300 text-black rounded-full"
                : "bg-black text-white hover:bg-yellow-300 hover:text-black hover:rounded-full cursor-pointer"
            }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="relative rounded-xl shadow-md overflow-hidden cursor-pointer bg-white group"
          >
            {/* Image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-56 object-cover"
            />

            {/* Price Circle */}
            <div className="absolute top-[180px] right-4 w-20 h-20 bg-yellow-400 text-black font-bold text-lg flex items-center justify-center rounded-full shadow-lg z-10">
              {course.price}
            </div>

            <div className="px-4 pt-10 pb-4 flex flex-col justify-between h-[calc(100%-224px)]">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-sm font-bold bg-yellow-300 text-black">
                  {course.category}
                </span>
                <div className="flex items-center text-yellow-500 text-[1.5rem]">
                  {"★".repeat(course.rating)}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-1 text-black ">
                {course.title}
              </h3>
              {/* Subtitle */}
              <p className="text-sm mb-4 text-gray-700 ">{course.subtitle}</p>
              {/* Bottom Row */}
              <div className="flex justify-between items-center pt-4 border-t border-black text-gray-600 text-sm ">
                <span className="flex items-center gap-1">
                  <IoIosPeople size={20} />
                  {course.students}
                </span>
                <span className="flex items-center gap-1">
                  <LuClock size={20} /> {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <FaRegComments size={20} />
                  {course.views}
                </span>
              </div>
            </div>

            {/* hover overlay */}
            <div className="absolute inset-0 bg-yellow-500 text-black p-4 top-[247px] opacity-0 group-hover:opacity-100 group-hover:top-0 transition-all duration-300 ease-in-out flex flex-col justify-between z-20">
              <div>
                <div className="flex items-center text-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-sm font-bold bg-black text-white font-bold">
                    {course.category}
                  </span>
                  <div className="flex items-center text-black text-[1.5rem]">
                    {"★".repeat(course.rating)}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-sm leading-snug">
                  {course.subtitle} {course.subtitle} {course.subtitle}
                </p>
              </div>

              <div className=" flex justify-between item-center text-center">
                <button className="bg-black px-4 py-1 rounded-full text-white text-md">
                  Enroll Now
                </button>
                <div>
                  <BsArrowRight size={32} className="text-black" />
                </div>
                <div className="bg-black px-4 py-1 rounded-full text-white text-md">
                  {course.price}
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex justify-between items-center pt-4 border-t border-black text-gray-600 text-sm ">
                <span className="flex items-center gap-1">
                  <IoIosPeople size={20} />
                  {course.students}
                </span>
                <span className="flex items-center gap-1">
                  <LuClock size={20} /> {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <FaRegComments size={20} />
                  {course.views}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Course;
