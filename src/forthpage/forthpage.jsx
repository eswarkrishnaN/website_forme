import "./forthpage.css";
import {BsArrowRightShort} from "react-icons/bs"
import { useState } from "react";
import Popup from "./popup_pages/first_pop"
import Second from "./popup_pages/second";
import Third from  "./popup_pages/thirdpage/thirdpage"
import Forth from "./popup_pages/forthpage/forthpage";
import Fifth from "./popup_pages/fithpage/fifthpage";
import Sixth from "./popup_pages/sixthpage/sixthpage";


const Fothpage = () =>{

    const[modal, setmodel] = useState(false);
    const[scond, setsecond] = useState(false);
    const[Third1, setthird] = useState(false);
    const[Forth1, setforth] = useState(false);
    const[Fifth1, setsfifth] = useState(false);
    const[Sixth1, setsix] = useState(false);


   


    return(<div className="main">
         <Popup open={modal} onclose={() => setmodel(false)}> </Popup>
         
         <Second open={scond} onclose={() => setsecond(false)}> </Second>
         
         <Third open={Third1} onclose={() => setthird(false)}> </Third>
         <Forth open={Forth1} onclose={() => setforth(false)}> </Forth>
         <Fifth open={Fifth1} onclose={() => setsfifth(false)}> </Fifth>
         <Sixth open={Sixth1} onclose={() => setsfifth(false)}> </Sixth>

        <div className="head">
           
            <h3>My skills</h3>
        </div>
        
        <div className="container_main">
          <div className="container">
                <p className="year"> 01</p>
               
              
                <div className="details">
                    <h3 className="head">Web Development</h3>
                    <p className="explation">I am familer with react ,css and flask most of time i used flask for backend ....</p>
                </div>
                <div className="button_text">
                    <p className="readmore">Read more </p>
                    <button className="btn" onClick={()=> setmodel(true)}><BsArrowRightShort></BsArrowRightShort></button>
                  
                </div>
                
            </div>
            <div className="container">
                <p className="year"> 01</p>
              <div className="details">
                  <h3 className="head">Web Developmet</h3>
                  <p className="explation">I am familer with react ,css and flask most of time i used flask for backend ....</p>
              </div>
              <div className="button_text">
                  <p className="readmore">Read more </p>
                  <button className="btn" onClick={() => setsecond(true)}><BsArrowRightShort></BsArrowRightShort></button>
              </div>
            </div>

            <div className="container">
            <p className="year"> 01</p>
              
              <div className="details">
                  <h3 className="head">Name know</h3>
                  <p className="explation">some text here here</p>
              </div>
              
              <div className="button_text">
                  <p className="readmore">Read more </p>
                  <button className="btn"onClick={() => setthird(true)}><BsArrowRightShort></BsArrowRightShort></button>
              </div>
            </div>

            <div className="container">
            <p className="year"> 01</p>
              
              <div className="details">
                  <h3 className="head">Name know</h3>
                  <p className="explation">some text here here</p>
              </div>
              <div className="button_text">
                  <p className="readmore">Read more </p>
                  <button className="btn" onClick={() => setforth(true)}><BsArrowRightShort></BsArrowRightShort></button>
              </div>
              
            </div>
            <div className="container">
            <p className="year"> 01</p>
              
              <div className="details">
                  <h3 className="head">Name know</h3>
                  <p className="explation">some text here here</p>
              </div>
              <div className="button_text">
                  <p className="readmore">Read more </p>
                  <button className="btn" onClick={() => setsfifth(true)}><BsArrowRightShort></BsArrowRightShort></button>
              </div>
              
                
            </div>


            <div className="container">
            <p className="year"> 01</p>
              
              <div className="details">
                  <h3 className="head">Name know</h3>
                  <p className="explation">some text here here</p>
              </div>
              <div className="button_text">
                  <p className="readmore">Read more </p>
                  <button className="btn" onClick={() => setsix(true)}><BsArrowRightShort></BsArrowRightShort></button>
              </div>
              
                
            </div>




          </div>
      


    </div>)
}

export default Fothpage;