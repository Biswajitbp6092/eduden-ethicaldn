import React from 'react'
import Navbar from './components/home-page/navbar/Navbar'
import Banner from './components/home-page/banner/Banner'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Catagories from './components/home-page/Catagories/Catagories';
import Placement from './components/home-page/Placement/Placement';

const page = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Catagories/>
      <Placement/>
    </div>
  )
}

export default page
