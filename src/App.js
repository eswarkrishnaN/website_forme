import './App.css';
import Navbar  from './side_bar/side-bar';
import Main  from './head_page/head';
import Second from './second_page/second';
import Third from "./Third_page/Third"
import Fothpage from './forthpage/forthpage';
import Fifth from './fifthpage/fifthpage';
import Sixthpage from './sixthpage/sixthpage';
import Seventhpage from "./seventhpage/seventh"
import Contact from './contactpage/contact';

import React from 'react';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
      <Second></Second>
      <Third></Third>
      <Fothpage></Fothpage>
      <Fifth></Fifth>
      <Sixthpage></Sixthpage>
      <Seventhpage></Seventhpage>
      <Contact></Contact>

    </div>
  );
}

export default App;
