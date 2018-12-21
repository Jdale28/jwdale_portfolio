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
  background-color: black;
  color: white;
  background-image: url("https://i.imgur.com/6iPJosz.png");
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
                <p>
                    Feel free to browse Inspire and maybe even find some inspiration at <a href="https://salty-anchorage-65493.herokuapp.com/"> Inspire</a>
                    <br />Please be patient as Heroku (our hosting service) loads! Link to GitHub to check out behind the signs: <a href="https://github.com/Jdale28/inspire-project-2"> Inspire's Repository</a>
                </p>
            </ProjectOneContainer>
        );
    }
}

export default ProjectOne;