import "./fifthpage.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const  Fifth = () =>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1
        }
      };


    return(
        <div className="fifth_main">
           <div className="heading">
                <p>-Projects</p>
                <h1>I Learned</h1>
            </div>
            <Carousel className="scrool" responsive={responsive}>
            <div className="wrapper">
                <img class name="image" src="https://media.healthyfood.com/wp-content/uploads/2016/10/Alana-Scott-Does-portion-size-matter-on-low-FODMAP-diet-26.10.15-600x600.jpg"alt="some">
                </img>
                <p className="smallname"> some</p>
                <h4 className="bigname"><a href="#" alt="">soem wer</a></h4>
            </div>
            <div className="wrapper">
                <img class name="image" src="https://media.healthyfood.com/wp-content/uploads/2016/10/Alana-Scott-Does-portion-size-matter-on-low-FODMAP-diet-26.10.15-600x600.jpg"alt="some">
                </img>
                <p className="smallname"> some</p>
                <h4 className="bigname"><a href="#" alt="">soem wer</a></h4>
            </div>
            <div className="wrapper">
                <img class name="image" src="https://media.healthyfood.com/wp-content/uploads/2016/10/Alana-Scott-Does-portion-size-matter-on-low-FODMAP-diet-26.10.15-600x600.jpg"alt="some">
                </img>
                <p className="smallname"> some</p>
                <h4 className="bigname"><a href="#" alt="">soem wer</a></h4>
            </div>
            <div className="wrapper">
                <img class name="image" src="https://media.healthyfood.com/wp-content/uploads/2016/10/Alana-Scott-Does-portion-size-matter-on-low-FODMAP-diet-26.10.15-600x600.jpg"alt="some">
                </img>
                <p className="smallname"> some</p>
                <h4 className="bigname"><a href="#" alt="">soem wer</a></h4>
            </div>
            <div className="wrapper">
                <img class name="image" src="https://media.healthyfood.com/wp-content/uploads/2016/10/Alana-Scott-Does-portion-size-matter-on-low-FODMAP-diet-26.10.15-600x600.jpg"alt="some">
                </img>
                <p className="smallname"> some</p>
                <h4 className="bigname"><a href="#" alt="">soem wer</a></h4>
            </div>
            </Carousel>
            <button className="button1">Click to view me </button>
            
        </div>
    );
}


export default Fifth ;