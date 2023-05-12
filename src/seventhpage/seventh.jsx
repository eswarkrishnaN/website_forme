import "./seventh.css"
import React from "react";
import { useState,useEffect } from "react";

import error from "../error.png"

const Seventh = () =>{

    
    const[datas,Setdata] = useState([])


    useEffect (() =>{
        const getdata = async() =>{
            const response = await fetch("http://192.168.1.10:5000/from/hobbies")
            const responsedata = await response.json();
            Setdata(responsedata)
        };
        getdata();
    },[]);


    

//     const value = [{
//         ocupation:"Travelling",
//         some_text:"I like traveeling i travell more than 3000km in my bike my favorite place is Darzelling"
//     },
//     {
//         ocupation:"Cokking",
//         some_text:"I love cokking . most of time i like to cook chiken biryani and much more.."
//     },{

//         ocupation:"Photogorphy",
//         some_text:" Photography is the most valiable feelling its saves memories for feature"
//     },{
//         ocupation:"Trucking",
//         some_text:"I Climb more than 8 mountains i incerese your postive to get the sucess"
//     },{
//         ocupation:"Swimming",
//         some_text:"I can swim but swimmig can increase your body fitness "
//     },{
//         ocupation:"Reading Books",
//         some_text:"Books are the best way  increase you loyalty"

//     },
//     {
//         ocupation:"GYM",
//         some_text:"Gym are the best way  increase you Fitness"

//     }
// ]
    

    return(
        <div className="main_seventh">
            <div className="heading">
                <p>-Hobbies</p>
                <h1>Every thing about me</h1>
            </div>

          <div className="container_main">
            {datas.length > 0 ?datas.map((value,index) =>(
                <div key={index} className="container">
                <div className="details">
                    <h3 className="head">{value.occupation}</h3>
                    <p className="explation">{value.heading}</p>
                </div>
                
            </div>
            )):<img src={error} alt="server down"></img>}

          </div>

        </div>
    )
}

export default Seventh;