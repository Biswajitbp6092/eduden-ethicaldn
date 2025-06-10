import React from 'react'
import Navbar from './components/home-page/navbar/Navbar'
import Banner from './components/home-page/banner/Banner'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Catagories from './components/home-page/Catagories/Catagories';
import Placement from './components/home-page/Placement/Placement';
import Course from './components/home-page/Courses/Course';
import Coursvideo from './components/home-page/Courses/Coursvideo';


const page = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Catagories/>
      <Placement/>
      <Course/>
      <Coursvideo/>
      
    </div>
  )
}

export default page
