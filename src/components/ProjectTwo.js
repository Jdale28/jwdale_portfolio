import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


const ProjectTwoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  background-color: black;
  color: white;
`;

class ProjectTwo extends Component {
    render() {
        return (
            <ProjectTwoContainer>
                Hello from Project Two
            </ProjectTwoContainer>
        );
    }
}

export default ProjectTwo;