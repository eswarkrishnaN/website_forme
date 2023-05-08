import "./logs.css"
import {FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram ,AiOutlineLinkedin ,AiOutlineGithub} from "react-icons/ai"

const Logs =  () =>{



    return(<div className="social_logs icons">
        <ul className="social-icons-list">
            <li><a href="some.com" className="facebook">
                <FiFacebook></FiFacebook>
            </a></li>
           <li> <a href="some.com" className="instagram">
                <AiOutlineInstagram></AiOutlineInstagram>
            </a></li>
            <li><a href="some.com" className="linkedin">
                <AiOutlineLinkedin></AiOutlineLinkedin>
            </a></li>
            <li> <a href="v" className="git">
                <AiOutlineGithub></AiOutlineGithub>
            </a></li>
        </ul>
        <p>Copyright © 2023 Eswar Krishna. </p>
        <p>All rights reserved</p>
    </div>)
}

export default Logs