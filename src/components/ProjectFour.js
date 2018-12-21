import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


const ProjectFourContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  background-color: black;
  color: white;
  background-image: url("https://i.imgur.com/0qjzdH8.png");
  background-size: 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-x: 95%;
  background-position-y: 50%;
`;

const DescriptionFlex = styled.div`
    margin-left: 5vw;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 50vw;
    p {
        font-size: 16px;
        width: 40vw;
        margin: 1vh 0;
        a {
            text-decoration: none;
            color: rgb(13, 151, 255);
        }
    }
`

class ProjectFour extends Component {
    render() {
        return (
            <ProjectFourContainer>
                <DescriptionFlex>
                <h3>
                    Project Four - Jonny On It collaborative
                </h3>
                <p>
                    For this project we collaborated with General Assembly's User Experience Immersive to create a full stack application for a client, Jonny On It. 
                </p>
                <p>
                    Jonny On It connects homeowners and realtors with service providers in real-time, with options to either schedule services in the future, or have a provider sent to their home within minutes.
                </p>
                <p>
                    We had approximately 5 days to create this working prototype... a deadline that was challenging, but really made us utilize each others strengths to achieve a common objective.
                </p>
                <p>
                    Feel free to check out our efforts here... <a href="https://jonny-on-it-collab.herokuapp.com/"> Jonny On It</a>
                    <br />Please be patient as Heroku (our hosting service) loads! Link to GitHub to check out behind the signs: <a href="https://github.com/Jdale28/jonny_on_it_collab"> Inspire's Repository</a>
                </p>
                <p>
                    Technologies: React, Axios, React-Geosuggest, React-Strap, Material-UI, Django, Serializer, Rest-framework, Python
                </p>
                </DescriptionFlex>
            </ProjectFourContainer>
        );
    }
}

export default ProjectFour;