import "./seventh.css"
import React from "react";



const Seventh = () =>{

    

    const value = [{
        ocupation:"Travelling",
        some_text:"I like traveeling i travell more than 3000km in my bike my favorite place is Darzelling"
    },
    {
        ocupation:"Cokking",
        some_text:"I love cokking . most of time i like to cook chiken biryani and much more.."
    },{

        ocupation:"Photogorphy",
        some_text:" Photography is the most valiable feelling its saves memories for feature"
    },{
        ocupation:"Trucking",
        some_text:"I Climb more than 8 mountains i incerese your postive to get the sucess"
    },{
        ocupation:"Swimming",
        some_text:"I can swim but swimmig can increase your body fitness "
    },{
        ocupation:"Reading Books",
        some_text:"Books are the best way  increase you loyalty"

    },
    {
        ocupation:"GYM",
        some_text:"Gym are the best way  increase you Fitness"

    }
]
    

    return(
        <div className="main_seventh">
            <div className="heading">
                <p>-Hobbies</p>
                <h1>Every thing about me</h1>
            </div>

          <div className="container_main">
            {value.map((value,index) =>(
                <div key={index} className="container">
                <div className="details">
                    <h3 className="head">{value.ocupation}</h3>
                    <p className="explation">{value.some_text}</p>
                </div>
                
            </div>
            ))}

          </div>

        </div>
    )
}

export default Seventh;