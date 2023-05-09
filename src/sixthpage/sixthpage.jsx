import "./sixthpage.css"
import React from "react";
import starics from "./images/statics.svg"

const Sixthpage = () =>{

 const data = [{
    id:1,
    img: starics,
    heading:"statistics for ..",
    some:"statistics is  heart of the machine learning and datascience ..",
    button:"link",
 },
 {
    id:2,
    img: starics,
    heading:"Satics",
    some:"some data",
    button:"link",
 },
 {
    id:3,
    img: starics,
    heading:"Satics",
    some:"some data",
    button:"link",
 },
 {
    id:4,
    img: starics,
    heading:"Satics",
    some:"some data",
    button:"link",
 },
 {
    id:5,
    img: starics,
    heading:"Satics",
    some:"some data",
    button:"link",
 },{
    id:6,
    img: starics,
    heading:"Satics",
    some:"some data",
    button:"link",
 }
]



    return(
        <div className="main_page">
       
        <div className="head_first">
           
            <h3>My skills</h3>
        </div>
        
        <div className="container">


                 {
                data.map( (value,index ) => (
                    <div key={index} className="inner">
                    <div className="details">
                        <img className="image" src={value.img} alt="image not showing"></img>
                        <p className="explation">{value.heading}</p>
                    </div>
                    <div className="button_text">
                        <p className="readmore">{value.some}</p>
                        <button className="btn" ><a href="#" alt="some">Click to see Details</a></button>                  
                    </div>
                    
                </div>
                ))
            };


          </div>
      


    </div>
    );
} 

export default Sixthpage;