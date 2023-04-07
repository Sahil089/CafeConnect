import React from "react";
import Cards from "../components/cards";
import Navbar from "../components/Navbar";
import "../styles/main.css"


function Main(){
    return (
        <div className="cards-container">
            <Navbar />

            <Cards/>
           

        </div>
        
    );
}
export default Main