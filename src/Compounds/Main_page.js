import React from 'react'
import Navbar from "./Navbar";
import Display from "./Display";
import Service from "./Service";


function Main_page() {
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
    </div>
  )
}

export default Main_page;