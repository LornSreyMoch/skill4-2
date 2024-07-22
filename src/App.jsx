import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Slider from "./components/Slider";
import Footer from "./components/Footer"
import "./styles/App.css";

export default function Root() {
  return (
     <div id="container">
         <div className="header">
          <Slider />
          </div>
          
         <div className="main">
         <div className="Menu"><Menu /></div>
         
         <div id="detail"><Outlet /></div>
        </div>
        
       
      </div>
   
  );
}



