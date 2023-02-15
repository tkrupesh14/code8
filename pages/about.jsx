import React from 'react'
import About from "../components/About";
import WhatWhy from "../components/WhatWhy.jsx";
import Whodrivesus from "../components/Whodrivesus.js";
import Mentorstats from "../components/Mentorstats.js";
import WhyWithUs from "../components/home/WhyWithUs";


const about = () => {
  return (
    <div className="build bg-black text-white"> 
      {/* Who we are*/}
     
      <About/>
      <WhyWithUs Heading="Why Choose Us?"/>
      <Whodrivesus/>
      <WhatWhy/>
      <Mentorstats/>
      
    </div>
  )
}

export default about