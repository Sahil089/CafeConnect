import React from "react";
import { Link } from "react-router-dom";
import First from "../components/Middle";
import Button from "../components/Button3D";
import "../styles/home.css"




function Home() {
    return (
        <div className="container">
            <p id='head1' class='header'></p>
<p id='head2' class='header'></p>
<p id='head3' class='header'></p>
<p id='head4' class='header'></p>
<p id='head5' class='header'></p>
            
            <div className="logohome">  
        <Link to="/Map"><First /></Link>  
        <h2>
        Indulge your wanderlust and your taste buds
        </h2>
        <Link id='link' to="/Map"><Button text="Start" to="/Map" /></Link> 
        
        <div class='light x1'></div>
  <div class='light x2'></div>
  <div class='light x3'></div>
  <div class='light x4'></div>
  <div class='light x5'></div>
  <div class='light x6'></div>
  <div class='light x7'></div>
  <div class='light x8'></div>
  <div class='light x9'></div>
    </div>
        </div>
    );
}
export default Home