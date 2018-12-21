import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


const ProjectOneContainer = styled.div`
  display: flex;
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

class ProjectOne extends Component {
    render() {
        return (
            <ProjectOneContainer>
                <DescriptionFlex>
                <h3>
                    Project One - Connect Four
                </h3>
                <p>
                    For our first project I was presented with four choices of games to create: Jeopardy, Hang Man, Simon, and Connect Four. Connect Four was described as the most challenging, so I selected it in order to challenge myself. 
                </p>
                <p>
                    In the beginning I definitely struggled on this project. It was challenging to work out the logic of winning, how to create a game design that linked up with your logic, and most of all... following the principles of clean, DRY (Dont Repeat Yourself) code.
                </p>
                <p>
                    I was pleased to create a working game, and even added some flair in the form of themes, and have plans for future iterations to create a defensive AI, and potentially even a 3-player mode.
                </p>
                <p>
                    Feel free to check out the game here... <a href="https://lucid-sammet-b3bfd5.netlify.com/"> Jordan's Connect Four</a>
                    <br />Link to GitHub to check out behind the scenes: <a href="https://github.com/Jdale28/connectFour"> Connect Four's Repository</a>
                </p>
                <p>
                    Technologies: HTML, CSS, JavaScript
                </p>
                </DescriptionFlex>
            </ProjectOneContainer>
        );
    }
}

export default ProjectOne;