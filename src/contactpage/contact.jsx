import "./contact.css";
import React from "react";


const Contact = () =>{
 


    return(<div className="main_conatct">
        <div className="container ">
            <div className="first">
                 <div className="top_left">
                <p className="head">-Lets Connect!</p>
                <h2 className="name">Get in touch</h2>
                <p className="tail">Im currently avaliable to take on new projects, 
                    so feel free to send me a message about anything 
                    that you want to run past me. 
                    You can contact anytime at 24/7</p>
                <div className="cotact">
                    <p>+91 8885522676</p>
                    <p>nshanmukh52@gmail.com</p>
                    <p>Vishikapatnam,India</p>
                </div>
            </div>
            </div>
             <div className="second">
                <from  className="from">
                <input type="text" placeholder="Enter your name"></input>
                <input type="email" placeholder="Enter your email"></input>
                <textarea  className="textarea" name="message" rows="5" placeholder="Enter your message"></textarea>
                <button className="submite"> Click to send mail</button>
                </from>
            </div> 

             
        </div>
    </div>)
}


export default Contact;