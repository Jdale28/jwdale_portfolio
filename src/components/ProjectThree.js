import React, { Component } from "react";
import styled from "styled-components";

const ProjectThreeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  background-color: #A8BA9A;
  color: #1A090D;
  background-image: url("https://i.imgur.com/5p14agU.png");
  background-size: 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-x: 95%;
  background-position-y: 50%;
  @media screen and (max-width: 820px) {
    background-image: none;
    height: 75vh;
  }
  @media screen and (max-width: 820px) {
    height: 85vh;
  }
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
    font-family: "Raleway";
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
  img {
    display: none;
  }
  @media screen and (max-width: 820px) {
    width: 90vw;
    text-align: center;
    p {
      text-align: center;
      width: 90vw;
    }
    .projectImg {
      img {
        display: inline-block;
        width: 375px;
        height: auto;
        margin: -40px;
      }
    }
    h3 {
      margin-top: 2vh;
    }
  }
`;

const Button = styled.button`
  font-size: 14px;
  width: 6vw;
  height: 3vh;
  border-radius: 9px;
  font-weight: bold;
  background-color: #A8BA9A;
  border: #A8BA9A solid 1px;
  color: #1A090D;
  a {
    text-decoration: none;
    color: #1A090D;
    :hover {
      color: white;
    }
  }
  @media screen and (max-width: 820px) {
    width: 25vw;
    text-align: center;
    border: 1px solid white;
  }
`;

const ButtonFlex = styled.div`
  display: flex;
  width: 15vw;
  margin-top: 5vh;
  justify-content: space-evenly;
  @media screen and (max-width: 820px) {
    width: 90vw;
    text-align: center;
  }
`;

class ProjectThree extends Component {
  render() {
    return (
      <ProjectThreeContainer>
        <DescriptionFlex>
          <h3>Outperform</h3>
          <div className="projectImg">
          <img src="https://i.imgur.com/5p14agU.png" alt="Jonny On It" />
          </div>
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
