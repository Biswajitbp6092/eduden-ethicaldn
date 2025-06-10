import React from 'react'
import { TfiLayoutLineSolid } from 'react-icons/tfi';

const Course = () => {
  const courses = [
  {
    id: 1,
    title: 'React for Beginners',
    heading: 'Master React JS',
    subtitle: 'Learn the basics of React',
    price: '$49',
    rating: '⭐ 4.5',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    title: 'Advanced CSS',
    heading: 'CSS Masterclass',
    subtitle: 'Advanced styling techniques',
    price: '$59',
    rating: '⭐ 4.7',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    title: 'JavaScript Essentials',
    heading: 'Master JS',
    subtitle: 'Understand core concepts',
    price: '$39',
    rating: '⭐ 4.6',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 4,
    title: 'Node.js API',
    heading: 'Build APIs',
    subtitle: 'Create REST APIs with Node',
    price: '$69',
    rating: '⭐ 4.8',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 5,
    title: 'Python for Data Science',
    heading: 'Python DS',
    subtitle: 'Data science with Python',
    price: '$89',
    rating: '⭐ 4.9',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 6,
    title: 'UI/UX Design',
    heading: 'Design Masterclass',
    subtitle: 'UI/UX principles and tools',
    price: '$79',
    rating: '⭐ 4.5',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 7,
    title: 'Full Stack Development',
    heading: 'Become Full Stack Dev',
    subtitle: 'Frontend + Backend',
    price: '$99',
    rating: '⭐ 4.8',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    id: 8,
    title: 'Digital Marketing',
    heading: 'Marketing Masterclass',
    subtitle: 'SEO, SEM, Social Media',
    price: '$69',
    rating: '⭐ 4.6',
    image: 'https://via.placeholder.com/300x200',
  },
];


  return (
    <section className="px-4 lg:px-[100px] w-full bg-black pt-[100px] lg:pt-[150px]">
      <h5 className="text-center pb-4 text-yellow-300 flex items-center gap-3 justify-center">
        <TfiLayoutLineSolid size={32} />
        Popular Courses
        <TfiLayoutLineSolid size={32} />
      </h5>
      <h2 className="text-5xl font-bold pb-8 text-center text-white pb-4">
        All <span className="border-b-3 border-yellow-300">Courses</span>
      </h2>


      <div>
        
      </div>
    </section>
  )
}

export default Course;
