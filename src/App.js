import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import ProjectOne from "./components/ProjectOne";
import AboutMe from "./components/AboutMe";
import ProjectTwo from "./components/ProjectTwo";
import ProjectThree from "./components/ProjectThree";
import ProjectFour from "./components/ProjectFour";
import Intro from "./components/Intro";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";
import styled from "styled-components";
import ContactInfo from "./components/ContactInfo";

const Global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans|Raleway');

  body {
    margin: 0;
    padding: 0;
    font-family: 'PT Sans';
  }
`;

const NavBarStyles = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6vh;
  font-size: 2rem;
  background-color: grey;
  font-family: "Raleway";
  text-transform: uppercase;
  z-index: 2;
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
    width: 40vw;
    display: flex;
    justify-content: space-around;
  }
  @media screen and (max-width: 820px) {
    font-size: 1rem;
    width: 100%;
  } 
`;

class App extends Component {
  render() {
    goToAnchor();
    return (
      <Router>
        <div className="App">
          <Global />
          <NavBarStyles>
            <div className="left">
              <a href="#sectTop"> Top </a>
              <a href="#projects"> Projects </a>
              <a href="#contact"> Contact </a>
            </div>
            <div className="right">
              <a href="https://github.com/Jdale28">GitHub</a>
              <a href="https://www.linkedin.com/in/jordan-w-dale/">LinkedIn</a>
            </div>
          </NavBarStyles>
          <ScrollableAnchor id={"sectTop"}>
            <Intro />
          </ScrollableAnchor>

          <AboutMe />

          <ScrollableAnchor id={"projects"}>
            <ProjectFour />
          </ScrollableAnchor>

          <ProjectTwo />
          <ProjectThree />
          <ProjectOne />

          <ScrollableAnchor id={"contact"}>
            <ContactInfo />
          </ScrollableAnchor>
        </div>
      </Router>
    );
  }
}

export default App;
