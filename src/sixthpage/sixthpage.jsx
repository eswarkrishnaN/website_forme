import "./sixthpage.css"
import React from "react";
import { useState ,useEffect } from "react";
import error from "../error.png"

const Sixthpage = () =>{

    const[datas,Setdata] = useState([])


    useEffect (() =>{
        const getdata = async() =>{
            const response = await fetch("http://192.168.1.10:5000/from/myskills")
            const responsedata = await response.json();
            Setdata(responsedata)
        };
        getdata();
    },[]);

    


//  const data = [{
//     id:1,
//     img: starics,
//     heading:"statistics for ..",
//     some:"statistics is  heart of the machine learning and datascience ..",
//     button:"link",
//  },
//  {
//     id:2,
//     img: starics,
//     heading:"Satics",
//     some:"some data",
//     button:"link",
//  },
//  {
//     id:3,
//     img: starics,
//     heading:"Satics",
//     some:"some data",
//     button:"link",
//  },
//  {
//     id:4,
//     img: starics,
//     heading:"Satics",
//     some:"some data",
//     button:"link",
//  },
//  {
//     id:5,
//     img: starics,
//     heading:"Satics",
//     some:"some data",
//     button:"link",
//  },{
//     id:6,
//     img: starics,
//     heading:"Satics",
//     some:"some data",
//     button:"link",
//  }
// ]



    return(
        <div className="main_page">
       
        <div className="head_first">
           
            <h3>My skills</h3>
        </div>
        
        <div className="container">


                 {
                    datas.length >0 ?
                datas.map( (value,index ) => (
                    <div key={index} className="inner">
                    <div className="details">
                        <img className="image" src={value.img} alt="image not showing"></img>
                    

                        <p className="explation">{value.small}</p>
                    </div>
                    <div className="button_text">
                        <p className="readmore">{value.heading}</p>
                        <button className="btn" ><a href={value.link} alt="some" target="blank">Click to see Details</a></button>                  
                    </div>
                    
                </div>
                )) : <img src={error} alt="server down"></img>
            };


          </div>
      


    </div>
    );
} 

export default Sixthpage;