import "./first_pop.css"

const Popup = (props) =>{

     if(!props.open) return null

    return(

        <div className="popup"  >
            <div className="pop">
                <img src="https://th.bing.com/th/id/OIP.9Wc9w2u5s_-CgzEEjvHn3QHaE7?pid=ImgDet&rs=1" alt=""></img>
                <p>here some value we made that</p>
            <button onClick={props.onclose}>Close</button>
            {/* {props.children} */}
            </div>

           
            
        </div>
    );


    
}

export default Popup;