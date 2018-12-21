import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


const ProjectOneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  background-color: white;
  color: black;
  background-image: url("https://i.imgur.com/0P7ik23.jpg");
  background-size: 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-x: 95%;
  background-position-y: 50%;
`;

class ProjectOne extends Component {
    render() {
        return (
            <ProjectOneContainer>
                Hello from Project One
            </ProjectOneContainer>
        );
    }
}

export default ProjectOne;