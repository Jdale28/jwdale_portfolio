import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


const ProjectTwoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  background-color: white;
  color: black;
  background-image: url("https://i.imgur.com/dgWfxpC.png");
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

class ProjectTwo extends Component {
    render() {
        return (
            <ProjectTwoContainer>
                <DescriptionFlex>
                <h3>
                    Inspire
                </h3>
                <p>
                    For our second project we were tasked with creating an app that would attempt to make the world just a little bit better. As an avid reader, I find motivation constantly in the form of quotes and sayings, so I decided to build a web app around them.
                </p>
                <p>
                    Inspire is designed to allow a user to click on a particular mood or feeling and a quote populates designed to resonate with that individual, and maybe even cheer them up or get them out of whatever funk they're in.
                </p>
                <p>
                    In future versions, I aim to tie in an API to provide significantly more quotes for users to choose from; users will be able to save their favorite quotes, and even send them to each other.
                </p>
                <p>
                    Feel free to browse Inspire and maybe even find some inspiration at <a href="https://salty-anchorage-65493.herokuapp.com/"> Inspire</a>
                    <br />Please be patient as Heroku (our hosting service) loads! Link to GitHub to check out behind the scenes: <a href="https://github.com/Jdale28/inspire-project-2"> Inspire's Repository</a>
                </p>
                <p>
                    Technologies: HTML5, CSS3, Javascript, jQuery, Nodejs, Express, Bootstrap & Modals, Handlebars
                </p>
                </DescriptionFlex>
            </ProjectTwoContainer>
        );
    }
}

export default ProjectTwo;