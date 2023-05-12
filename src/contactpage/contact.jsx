import "./contact.css";
import React from "react";
import { useState } from "react";

/* eslint-disable */ 

const Contact = () =>{
 
    const [text,settext] =useState('')
    const [email,setemail] = useState('')
    const [textarea,settextare] = useState('')
    console.log(text)
    console.log(email)
    console.log(textarea)


    const submite_value =  async(event) =>{
      event.preventDefault();
        const  data = [text,email,textarea]
        const response = await fetch("http://192.168.1.10:5000/from/email",{

            method: 'Post',
            headers :{
              'Content-type' :'application/json'
            },
            body:JSON.stringify(data)
        });

        settext('')
        setemail('')
        settextare('')
    }

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
                <from   className="from"  onSubmit={submite_value}>
                <input value ={text} type="text" placeholder="Enter your name"  onChange={(event) => settext(event.target.value)} required></input>
                <input value={email} type="email" placeholder="Enter your email" onChange={(event)=>setemail(event.target.value)} required></input>
                <textarea  value={textarea} className="textarea" name="message" rows="5" placeholder="Enter your message" onChange={(event) => settextare(event.target.value)} required></textarea>
                <button className="submite" type="submit"> Click to send mail</button>
                </from>
            </div> 

             
        </div>
    </div>)
}


export default Contact;