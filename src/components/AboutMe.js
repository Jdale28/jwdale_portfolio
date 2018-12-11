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
`;

class AboutMe extends Component {
    render() {
        return (
            <AboutMeContainer>
                Hello from About Me
            </AboutMeContainer>
        );
    }
}

export default AboutMe;