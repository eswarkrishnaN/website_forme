import Second from "../second_page/second";
import "./side-bar.css";
import Logs from "./socail logs/logs"
import React from "react";
import Main from "../head_page/head";
import Third from "../Third_page/Third";
import Forth from "../forthpage/popup_pages/forthpage/forthpage";
import Fifth from "../fifthpage/fifthpage";


import {BrowserRouter as Router, Route ,Link ,Routes} from "react-router-dom"


const Navbar  = () =>{

    return(
        <div className="navbar">
            <div className="logo">
                <img src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"  alt="some_image" className="image"></img>
                <h1>Nandhi Eswar Krishna</h1>
            
           
            <ul className="pages">
                <li >
                       <Link to="/">Home</Link> 
                
                </li>
                <li>
                      <Link to="/about">About</Link> 
                    
                </li>
                <li>
                <a href="some.com" className="Services">
                         <Link to="/services">Services</Link> 
                    </a>
                </li>
                <li>
                <a href="some.com" className="Protofoli">
                <Link to="/protofolio">prtofolio</Link> 
                    </a>    
                </li>
                <li>
                <a href="some.com" className="contact">
                    <Link to="/Contact">Contact</Link> 
                    </a> 
                </li>
            </ul>
            </div>
            <Logs></Logs>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/about" element={<Second />} />
                <Route path="/protofolio" element={<Third />} />
                <Route path="/Seriveces" element={<Forth />} />
                <Route path="/Contact" element={<Fifth />} />
             


            </Routes>
           
        </div>
    )
}

const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
