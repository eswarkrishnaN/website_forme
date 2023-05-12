import "./second.css"
import React from "react";
import { useState , useEffect} from "react";


const Second = () =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://192.168.1.10:5000/form');
            const responseData = await response.json();
            setData(responseData[0]);
          };
          getData();

    },[])
    

    return(
        <section className="second">
            <div className="top_left">
                <p>-Nice To Meet You!</p>
                <h2 className="name">Eswar Krishna</h2>
                <p>Creative Thinker</p>
                <button ><a href="https://github.com/  " target="blank">Click to view Some projects</a></button>           
                 </div>
            <div className="top_right">
                <p className="main_name">Hello there! My name is <span>Eswar Krishna </span>
                    .  and I m very passionate and dedicated to my work</p>
                <p className="second_name">
                    With 4 years experience as a Marketing,Photography,Photoshop,Excel
                     I have acquired the skills 
                     and knowledge necessary to 
                     make your project a success.I enjoy every step of the 
                     design process,
                     from discussion and collaboration
                </p>
                <div className="age1">
                    <div><p>Age</p>
                    <span id="spa">25</span></div>
                    <div>
                    <p>BronIn</p>
                    <span id="spa">Vizianagram</span>
                    </div>
                    <div>
                    <p>Mail</p>
                    <span id="spa"><a href="mailto:nshanmukh52@gmail.com" className="mylink">nshanmukh52@gmail.com</a></span>
                    </div>
                    <div>
                    <p>Phone</p>
                    <span id="spa"><a href="tel:+91 8885522676" className="mylink">+91 8885522676</a></span>
                    </div>
                   
                </div>
                <div className="bottom">
                <div className="first_box">
                    <p>{data.exprence}</p>
                    <span>year experence</span>
                </div>
                <div className="second_box">
                    <p>{data.repoes}</p>
                    <span>Codeing </span>
                </div>
                <div className="third_box">
                    <p>{data.git}</p>
                    <span>Git projects</span>
                </div>
            </div>
            </div>

         
        </section>
    )
}

export default Second;