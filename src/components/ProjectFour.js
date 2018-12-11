import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


const ProjectFourContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  background-color: black;
  color: white;
`;

class ProjectFour extends Component {
    render() {
        return (
            <ProjectFourContainer>
                Hello from Project Four
            </ProjectFourContainer>
        );
    }
}

export default ProjectFour;