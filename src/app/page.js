import React from 'react'
import Navbar from './components/home-page/navbar/Navbar'
import Banner from './components/home-page/banner/Banner'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Catagories from './components/home-page/Catagories/Catagories';
import Placement from './components/home-page/Placement/Placement';
import Course from './components/home-page/Courses/Course';
import Coursvideo from './components/home-page/Courses/Coursvideo';
import Collaboration from './components/home-page/Collaboration/Collaboration';
import Joinourclan from './components/home-page/Collaboration/Joinourclan';
import Events from './components/home-page/events/Events';


const page = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Catagories/>
      <Placement/>
      <Course/>
      <Coursvideo/>
      <Collaboration/>
      <Joinourclan/>
      <Events/>
      
    </div>
  )
}

export default page
