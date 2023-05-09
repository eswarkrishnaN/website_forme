import "./Third.css"
import React from "react";
import { motion} from "framer-motion";
import { useEffect, useRef, useState } from 'react';



const Third = () =>{

    const [shouldAnimate, setShouldAnimate] = useState(false);
    const animationRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const animationPosition = animationRef.current.offsetTop;
          const windowHeight = window.innerHeight;
     
    
          if (scrollPosition + windowHeight > animationPosition) {
            setShouldAnimate(true);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      
    

    const value = [{

        year:"-2019-2022",
        span:"Zoom digital press",
        ocupation:"Ocuppation name",
        some_text:"The term stream is often used when discussing data within systems like Kafka. Most often, a stream is considered to be a single topic of data, regardless of the number of partitions. This represents a single stream of data moving from the producers to the consumers. This way of referring discussing st"
    },
    {

        year:"-2019-2022",
        span:"Zoom digital press",
        ocupation:"Ocuppation name",
        some_text:"The term stream is often used when discussing data within systems like Kafka. Most often, a stream is considered to be a single topic of data, regardless of the number of partitions. This represents a single stream of data moving from the producers to the consumers. This way of referring discussing st"
    },{

        year:"-2019-2022",
        span:"Zoom digital press",
        ocupation:"Ocuppation name",
        some_text:"The term stream is often used when discussing data within systems like Kafka. Most often, a stream is considered to be a single topic of data, regardless of the number of partitions. This represents a single stream of data moving from the producers to the consumers. This way of referring discussing st"
    },{

        year:"-2019-2022",
        span:"Zoom digital press",
        ocupation:"Ocuppation name",
        some_text:"The term stream is often used when discussing data within systems like Kafka. Most often, a stream is considered to be a single topic of data, regardless of the number of partitions. This represents a single stream of data moving from the producers to the consumers. This way of referring discussing st"
    }]
    

    return(
        <div className="Third">
            <div className="heading">
                <p>-Experince</p>
                <h1>Every thing about me</h1>
            </div>

         { <motion.div className="container_main"
          transition={{ delay :0.5 , type: "spring" ,stiffness: 500}}
          initial={{y: 250}}
          animate={{y:shouldAnimate ? -10 : 250}}
          ref={animationRef}
        
          
          >
            {value.map((value,index) =>(
                <div key={index} className="container">
                <p className="year"> {value.year} <span>{value.span}</span></p>
              
                <div className="details">
                    <h3 className="head">{value.ocupation}</h3>
                    <p className="explation">{value.some_text}</p>
                </div>
                
            </div>
            ))}

          </motion.div>}

        </div>
    )
}

export default Third