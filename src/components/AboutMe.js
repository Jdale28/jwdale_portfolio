import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  background-color: white;
  color: black;
  .selfie {
  height: 300px;
  width: 300px;
  border: 1px solid black;
  background-image: url('https://i.imgur.com/d9fquU0.jpg');
  background-size: 100%;
}
`;

class AboutMe extends Component {
  render() {
    return (
      <AboutMeContainer>
        <div className="selfie" />
        Hello from About Me
      </AboutMeContainer>
    );
  }
}

export default AboutMe;
