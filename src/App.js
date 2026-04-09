
import { Routes, Route } from "react-router-dom";
import Mainpage from "./Compounds/Mainpage";
import Booking from "./Compounds/Booking";
import Navbar from "./Compounds/Navbar";
import Men from "./Compounds/Men";
import Women from "./Compounds/Women";
import Kids from "./Compounds/Kids";
// import logo from './logo.svg';
import React from "react";
import './App.css';
 
const App = () => {
  const [cart, setCart] = React.useState([]);
  return (

  <Routes>   
 <Route path="/" element ={< Mainpage/>}/>
<Route path="/Navbar" element ={< Navbar/>}/>

<Route path="/Mainpage" element ={< Mainpage/>}/>

<Route path="/Women" element ={< Women/>}/>
<Route path="/Kids" element ={< Kids/>}/>/
<Route path="/men" element={<Men cart={cart} setCart={setCart} />} />
 <Route path="/booking" element={<Booking cart={cart} />} />
</Routes>


 ) };


export default App;
