import React from 'react'
import { TfiLayoutLineSolid } from 'react-icons/tfi';

const Course = () => {
  return (
    <section className="px-4 lg:px-[100px] w-full bg-black pt-[100px] lg:pt-[150px]">
      <h5 className="text-center pb-4 text-yellow-300 flex items-center gap-3 justify-center">
        <TfiLayoutLineSolid size={32} />
        Popular Courses
        <TfiLayoutLineSolid size={32} />
      </h5>
      <h2 className="text-5xl font-bold mb-8 text-center text-white pb-4">
        All <span className="border-b-3 border-yellow-300">Courses</span>
      </h2>
    </section>
  )
}

export default Course;
