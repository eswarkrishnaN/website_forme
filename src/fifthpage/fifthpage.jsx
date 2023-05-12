import "./fifthpage.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { useState ,useEffect } from "react";
import error from "../error.png"

const  Fifth = () =>{

  const [data, setdata] = useState([])

  useEffect(() =>{

    const getdata = async ()=> {
      const response = await fetch('http://192.168.1.10:5000/from/scrool');
      const responseData = await response.json();
      setdata(responseData)

    };
    getdata();
  },[])


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1
        }
      };


    return(
        <div className="fifth_main">
           <div className="heading">
                <p>-Projects</p>
                <h1>I Learned</h1>
            </div>
            <Carousel className="scrool" responsive={responsive}>
           {data.length>0 ?data.map((value,index)=>(<div key={index} className="wrapper">
                <img className="image" src={value.img} alt="some">
                </img>
                <p className="smallname">{value.small}</p>
                <h4 className="bigname"><a href={value.link} alt="">{value.big}</a></h4>
            </div>)): <img src={error} alt="server down"></img>}
            
            </Carousel>
            <button className="button1">Click to view me </button>
            
        </div>
    );
}


export default Fifth ;