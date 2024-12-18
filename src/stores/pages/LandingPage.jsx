import React from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import "./App.jsx";
const LandingPage = () => {
    return ( 
        <div>
            <Navbar/>
            <Products />
        </div> 
    );
}
 
export default LandingPage;