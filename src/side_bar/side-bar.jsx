import "./side-bar.css";
import Logs from "./socail logs/logs"
import React from "react";


 const Navbar  = () =>{

    return(
        <div className="navbar">
            <div className="logo">
                <img src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"  alt="some_image" className="image"></img>
                <h1>Nandhi Eswar Krishna</h1>
            
           
            <ul className="pages">
                <li >
                    <a href="some.com" className="Home">
                        Home
                    </a>
                </li>
                <li>
                <a href="some.com" className="About">
                    About
                    </a>
                </li>
                <li>
                <a href="some.com" className="Services">
                    Services
                    </a>
                </li>
                <li>
                <a href="some.com" className="Protofoli">
                    Protofoli
                    </a>    
                </li>
                <li>
                <a href="some.com" className="contact">
                    contact
                    </a> 
                </li>
            </ul>
            </div>
            <Logs></Logs>
        </div>
    )
}

export default Navbar;