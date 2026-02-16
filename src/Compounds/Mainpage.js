import React from 'react'
import Navbar from "./Navbar";
import Display from "./Display";
import Service from "./Service";
import About from "./About";


function Mainpage() {
  return (
    <div className="Main-page">
       <div className="Main-page1">
         <Navbar />
        </div>
    <div className="Main-page2">
      <Display />
      </div>
    <div className="Main-page3">
      <Service/>
      </div>
       <div className="Main-page3">
      <About/>
      </div>
    </div>
  )
}

export default Mainpage;