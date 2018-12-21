import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


const ProjectThreeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  background-color: black;
  color: white;
  background-image: url("https://i.imgur.com/bUaEaiD.png");
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
                <p>
                    Feel free to browse Inspire and maybe even find some inspiration at <a href="https://salty-anchorage-65493.herokuapp.com/"> Inspire</a>
                    <br />Please be patient as Heroku (our hosting service) loads! Link to GitHub to check out behind the signs: <a href="https://github.com/Jdale28/inspire-project-2"> Inspire's Repository</a>
                </p>
            </ProjectThreeContainer>
        );
    }
}

export default ProjectThree;