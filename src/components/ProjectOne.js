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
  background-color: blue;
  color: white;
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