import "./small.css";
import image from "../image.png";
import React  from "react";



const Small =() =>{


    
    return(
        <div className="head_div">

          <section className="sec">
          <div className="image">
                <img src={image} alt="wrong_image"></img>
                 </div>

           <div className="postion">
            <div className="under">
            <div className="main_name">
            <h1 className="hi">Hi, I m <span>Eswar Krishna!</span>
            </h1>
            </div>
            <div className="wrapper">
                <h1>Creative  Designer</h1>
            </div>
            <div className="name_india">
                <h1>Based in India</h1>
            </div>
            <div className="pargaaph">
                <p>Seeking a challenging role as a software developer where I can utilize my 
                    </p>
                    <p>technical skills and knowledge to develop innovative software solutions.</p>
                    <button className="btn"> Let s talk</button>
                    <button className="btn2">Contact me</button>
            </div>
            <div className="contat">
                <div className="Vertical_line">
                <p className="phone number">+91 8885522676</p>
                <p className="email number">nshanmukh52@gmail.com</p>
                <p className="place number">Near rk Beach ,Vishiakaptanm</p>
                </div>
                </div>           
            </div>
            </div>


          </section>
        </div>
    )

};

export default Small;
