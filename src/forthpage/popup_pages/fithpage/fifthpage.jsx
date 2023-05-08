import "./fifthpage.css"

const Fifth = (props) =>{

     if(!props.open) return null

    return(

        <div className="popup"  >
            <div className="pop">
                <img  classname="image"  src="https://th.bing.com/th/id/R.a574d4dd8b239cb55e7c0144a0c1300f?rik=zG7Y2ZHmVLms3w&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f2%2fb%2fb%2f357801.jpg&ehk=dBMEZHcNMvaRDtrZYWclTcGVhP3MbGYJ6WX%2fBkhLSZQ%3d&risl=&pid=ImgRaw&r=0" alt=""></img>
                <p>here some value we made that we add some text where should i work values you me</p>
            <button onClick={props.onclose}>close</button>
            {/* {props.children} */}
            </div>

           
            
        </div>
    );


    
}

export default Fifth;