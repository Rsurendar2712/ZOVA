import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import Display from "./Display";
import Service from "./Service";
import About from "./About";


function Mainpage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location]);

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