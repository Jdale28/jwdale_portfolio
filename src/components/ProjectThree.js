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
  background-color: grey;
  color: white;
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