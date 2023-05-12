import "./main_thirs.css"
/* eslint-disable */ 

import React from "react";
import { motion} from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import error from "../error.png"


  

const Third = () =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://192.168.1.10:5000/updte/fothpage');
            const responseData = await response.json();
            setData(responseData);
          };
          getData();
    },[])

    //   const [shouldAnimate, setShouldAnimate] = useState(false);
    // const animationRef = useRef(null);
    // useEffect(() => {
    //     const handleScroll = () => {
    //       const scrollPosition = window.scrollY;
    //       const animationPosition = animationRef.current.offsetTop;
    //       const windowHeight = window.innerHeight;
     
    
    //       if (scrollPosition + windowHeight > animationPosition) {
    //         setShouldAnimate(true);
    //       }
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    
    //     return () => window.removeEventListener('scroll', handleScroll);
    //   }, []);
      
    



    return(
        <div className="Third">
            <div className="heading">
                <p className="smallhead">-Experince</p>
                <h1 className="head">Every thing about me</h1>
            </div>

         {/* { <motion.div className="container_main"
          transition={{ delay :0.5 , type: "spring" ,stiffness: 500}}
          initial={{y: 250}}
          animate={{y:shouldAnimate ? -10 : 250}}
          ref={animationRef} > */}
          <div className="container_main">
            {data.length>0 ?data.map((value,index) =>(
                <div key={index} className="container">
                <p className="year"> {value.date} <span>{value.job}</span></p>
              
                <div className="details">
                    <h3 className="head">{value.occupation}</h3>
                    <p className="explation">{value.words}</p>
                </div>
                
            </div>
            )):  <img src={error} alt="server down"></img>}
         </div>
          {/* </motion.div>} */}

        </div>
    )
}

export default Third