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

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins');

  body {
    margin: 0;
    padding: 0;
    font-family: 'montserrat', sans-serif;
    /* font-family: 'Poppins', sans-serif; */
    /* background:  url(https://media.giphy.com/media/l3q2Cy90VMhfoA9BC/giphy.gif) no-repeat center center fixed;  */
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Global />
        <Intro />
        <AboutMe />
        <ProjectOne />
        <ProjectTwo />
        <ProjectThree />
        <ProjectFour />
        <NavBar />
      </div>
      </Router>
    );
  }
}

export default App;
