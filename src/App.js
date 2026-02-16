import { Route, Routes } from "react-router-dom";
import Mainpage from "./Compounds/Mainpage";
import Booking from "./Compounds/Booking";
import Navbar from "./Compounds/Navbar";
import Men from "./Compounds/Men";
import Women from "./Compounds/Women";
import Kids from "./Compounds/Kids";

function App() {
  return (
  <Routes>
<Route path="/" element ={< Mainpage/>}/>
<Route path="/Navbar" element ={< Navbar/>}/>
<Route path="/Booking" element ={< Booking/>}/>
<Route path="/Mainpage" element ={< Mainpage/>}/>
<Route path="/Men" element ={< Men/>}/>
<Route path="/Women" element ={< Women/>}/>
<Route path="/Kids" element ={< Kids/>}/>
  </Routes>
  );
}

export default App;

