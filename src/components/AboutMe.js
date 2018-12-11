import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


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
      height: 500px;
      width: 500px;
      border: 1px solid black;
      background-image: url("/Users/jordandale/WDI-18/jdale_portfolio/jdale_portfolio/src/img/Jordan_Final_Headshot2.jpg");
      background-size: 100%;
  }
`;

class AboutMe extends Component {
    render() {
        return (
            <AboutMeContainer>
                <div className="selfie">
                </div>
                Hello from About Me
            </AboutMeContainer>
        );
    }
}

export default AboutMe;