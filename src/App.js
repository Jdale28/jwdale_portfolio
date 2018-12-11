import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import headshot from './Jordan_Final_Headshot.jpg';
import './App.css';
import { createGlobalStyle } from "styled-components";
import NavBar from "./components/NavBar";
import ProjectOne from './components/ProjectOne';
import AboutMe from './components/AboutMe';
import ProjectTwo from './components/ProjectTwo';
import ProjectThree from './components/ProjectThree';
import ProjectFour from './components/ProjectFour';

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins');

  body {
    margin: 0;
    padding: 0;
    font-family: 'montserrat', sans-serif;
    /* font-family: 'Poppins', sans-serif; */
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Global />
        <header className="App-header">
          <img src={headshot} className="App-logo" alt="logo" />
          <p>
            Welcome to Jordan's Portfolio
          </p>
        </header>
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
