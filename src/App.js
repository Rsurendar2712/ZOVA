import { Route, Routes } from "react-router-dom";
import Main_page from "./Compounds/Main_page";
import Booking from "./Compounds/Booking";
import Navbar from "./Compounds/Navbar";
import Men from "./Compounds/Men";

function App() {
  return (
  <Routes>
<Route path="/" element ={< Main_page/>}/>
<Route path="/Navbar" element ={< Navbar/>}/>
<Route path="/Booking" element ={< Booking/>}/>
<Route path="/Main_page" element ={< Main_page/>}/>
<Route path="/Men" element ={< Men/>}/>

  </Routes>
  );
}

export default App;

