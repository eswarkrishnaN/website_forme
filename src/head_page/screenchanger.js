/* eslint-disable */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import Small from "./for_samll_mobiles/small"
import Main from "./head"

const MyComponent = ({ history }) => {



    const [screenSize, setScreenSize] = useState(window.innerWidth);

  
    useEffect(() => {
      const handleResize = () => {
        setScreenSize(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    useEffect(() => {
      if (screenSize < 600) {
        history.push(<Small></Small>);
      } else {
        history.push(<Main></Main>);
      }
    }, [screenSize, history]);
  
    return <div>My Component</div>;
  };
  
  const App = () => {
    const history = useHistory();
  
    return (
      <div>
        <MyComponent history={history} />
      </div>
    );
  };
  
  export default App;