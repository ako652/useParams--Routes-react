import React from "react";
import { Link } from "react-router-dom";
import logo from './screenshots/watermelon.png'




export default function Navbar(){
    return(
        <div className="flex justify-around mb-20">
           
           <div> 
            <img src={logo} alt="watermelon" className="w-20" />
           </div> 
           <div className="flex gap-4">
            <Link to='/Products'>Products</Link>
            <Link to='/'> Home</Link>
           </div>
            
        </div>
        
    )
}