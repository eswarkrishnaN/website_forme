import "./second.css"
import React from "react";

const Second = () =>{

    return(
        <section className="second">
            <div className="top_left">
                <p>-Nice To Meet You!</p>
                <h2 className="name">Eswar Krishna</h2>
                <p>Creative Thinker</p>
                <button>Searching</button>
            </div>
            <div className="top_right">
                <p className="main_name">Hello there! My name is <span>Eswar Krishna </span>
                    .  and I m very passionate and dedicated to my work</p>
                <p className="second_name">
                    With 20 years experience as a 
                    professional a graphic designer,
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
                    <p>3+</p>
                    <span>year experence</span>
                </div>
                <div className="second_box">
                    <p>6+</p>
                    <span>Projects pratices</span>
                </div>
                <div className="third_box">
                    <p>10+</p>
                    <span>Git projects</span>
                </div>
            </div>
            </div>

         
        </section>
    )
}

export default Second;