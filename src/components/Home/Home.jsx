import React from 'react'
import Navbar from '../navbar';
import Minibar from '../minibar';
import Homes1 from '../Homes1';
import Footer from '../footer';

function Home() {
  return (
    <div>
      <Minibar/>
      <Navbar/>
      <Homes1/>
      <Footer/>
    </div>
  )
}

export default Home