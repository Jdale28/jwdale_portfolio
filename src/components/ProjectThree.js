import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


const ProjectThreeContainer = styled.div`
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

class ProjectThree extends Component {
    render() {
        return (
            <ProjectThreeContainer>
                Hello from Project Three
            </ProjectThreeContainer>
        );
    }
}

export default ProjectThree;