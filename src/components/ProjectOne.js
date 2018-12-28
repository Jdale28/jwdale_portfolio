import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjectOneContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.8);
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
  h3,
  h6 {
    margin: 0;
    margin-bottom: 1vh;
  }
  p {
    font-size: 16px;
    width: 40vw;
    margin: 1vh 0;
    a {
      text-decoration: none;
      color: rgb(13, 151, 255);
    }
  }
`;

const Button = styled.button`
  font-size: 14px;
  width: 6vw;
  height: 3vh;
  border-radius: 9px;
  border: rgba(14, 151, 255, 1) solid 1px;
  font-weight: bold;
  background-color: rgba(14, 151, 255, 1);
  color: rgba(255, 255, 255, 1);
  :hover {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(14, 151, 255, 1);
  }
  a {
    text-decoration: none;
  }
`;

const ButtonFlex = styled.div`
  display: flex;
  width: 15vw;
  margin-top: 5vh;
  justify-content: space-evenly;
`


class ProjectOne extends Component {
  render() {
    return (
      <ProjectOneContainer>
        <DescriptionFlex>
          <h3>Connect Four</h3>
          <h6>Same game you love, new themes</h6>
          <p>
            Given choices of Jeopardy, Hang Man, Simon and Connect Four, I
            selected Connect Four to push myself. The logic certainly was tough
            to conquer, but I was pleased with what I learned and the final
            result.
          </p>
          <p>Technologies: HTML, CSS, JavaScript</p>
          <ButtonFlex>
            <Button>
              <Link to="https://lucid-sammet-b3bfd5.netlify.com/">
                Live Site
              </Link>
            </Button>
            <Button>
              <Link to="https://github.com/Jdale28/connectFour">GitHub</Link>
            </Button>
          </ButtonFlex>
        </DescriptionFlex>
      </ProjectOneContainer>
    );
  }
}

export default ProjectOne;
