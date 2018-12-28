import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import { createGlobalStyle } from "styled-components";
import NavBar from "./components/NavBar";
import ProjectOne from './components/ProjectOne';
import AboutMe from './components/AboutMe';
import ProjectTwo from './components/ProjectTwo';
import ProjectThree from './components/ProjectThree';
import ProjectFour from './components/ProjectFour';
import Intro from './components/Intro';
import ScrollableAnchor, { goToTop, goToAnchor} from 'react-scrollable-anchor'



const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins');

  body {
    margin: 0;
    padding: 0;
    font-family: 'montserrat';
    /* font-family: 'Poppins', sans-serif; */
    /* background:  url(https://media.giphy.com/media/l3q2Cy90VMhfoA9BC/giphy.gif) no-repeat center center fixed;  */
  }
`;

class App extends Component {
  render() {
    goToAnchor()
    return (
      <Router>
      <div className="App">
        <Global />
        <a href='#section1'> Go to section 1 </a>
        <a href='#section2'> Go to section 2 </a>
        <Intro/>

        <ScrollableAnchor id={'section1'}>
        <AboutMe />
        </ScrollableAnchor>

        <ScrollableAnchor id={'section2'}>
        <ProjectOne />
        </ScrollableAnchor>
        
        <ProjectTwo />
        <ProjectThree />
        <ProjectFour />
        <NavBar/>
      </div>
      </Router>
    );
  }
}

export default App;
