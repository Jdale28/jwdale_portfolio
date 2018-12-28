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
import styled from "styled-components";



const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins');

  body {
    margin: 0;
    padding: 0;
    font-family: 'montserrat';
  }
`;

const NavBarStyles = styled.div`
  /* opacity: 0.8; */
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6vh;
  font-size: 2rem;
  background-color: grey;
  font-family: 'montserat';
  text-transform: uppercase;
  a {
    text-decoration: none;
    padding-left: 2vw;
    color: white;
    &:hover {
      color: rgb(0, 0, 0, 0.4);
    }
  }
  .left {
    display: flex;
    flex-direction: row;
    width: 15vw;
  }
  .right {
    margin-right: 2vw;
    width: 25vw;
    display: flex;
    justify-content: space-around;
  }
`;


class App extends Component {
  render() {
    goToAnchor()
    return (
      <Router>
      <div className="App">
        <Global />
        <NavBarStyles>
          <div className="left">
          <a href='#top'> Top </a>
          <a href='#projects'> Projects </a>
          </div>
          <div className="right">
            <a href="https://github.com/Jdale28">GitHub</a>
            <a href="https://www.linkedin.com/in/jordan-w-dale/">LinkedIn</a>
          </div>
          
        </NavBarStyles>
        <ScrollableAnchor id={'top'}>
        <Intro/>
        </ScrollableAnchor>
        

        <AboutMe />

        <ScrollableAnchor id={'projects'}>
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
