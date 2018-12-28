import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjectThreeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  background-color: grey;
  color: white;
  background-image: url("https://i.imgur.com/5p14agU.png");
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
`;

class ProjectThree extends Component {
  render() {
    return (
      <ProjectThreeContainer>
        <DescriptionFlex>
          <h3>Outperform</h3>
          <h6>Employee performance review manager</h6>
          <p>
            Performance reviews are tedious, streamline the process with
            Outperform through effective organization and alerts
          </p>
          <p>
            Technologies: HTML5, CSS3, Javascript, Nodejs, Express, React,
            Bootstrap & Modals
          </p>

          <ButtonFlex>
            <Button>
              <a href="https://jwdale-project3.herokuapp.com/">Website</a>
            </Button>
            <Button>
              <a href="https://github.com/Jdale28/WDI-project3">GitHub</a>
            </Button>
          </ButtonFlex>
        </DescriptionFlex>
      </ProjectThreeContainer>
    );
  }
}

export default ProjectThree;
