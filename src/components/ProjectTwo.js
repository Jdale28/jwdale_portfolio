import React, { Component } from "react";
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
  @media screen and (max-width: 820px) {
    background-image: none;
    height: 75vh;
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
  }
  p {
    font-size: 16px;
    width: 40vw;
    margin: 1vh 0;
    a {
      text-decoration: none;
      color: rgb(13, 151, 255);
    }
    img {
      display: none;
    }
  }
  @media screen and (max-width: 820px) {
    width: 90vw;
    text-align: center;
    p {
      text-align: center;
      width: 90vw;
    }
    img {
      display: inline-block;
      width: 375px;
      height: auto;
      margin: -40px;
    }
    h3 {
      margin-top: 5vh;
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
  @media screen and (max-width: 820px) {
    width: 25vw;
    text-align: center;
    border: 1px solid black;
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

class ProjectTwo extends Component {
  render() {
    return (
      <ProjectTwoContainer>
        <DescriptionFlex>
          <h3>Inspire</h3>
          <div className="projectImg">
            <img src="https://i.imgur.com/dgWfxpC.png" alt="Inspire" />
          </div>
          <h6>Cheer yourself up with inspirational quotes</h6>
          <p>Challenged to make the world a better place.</p>
          <p>
            With Inspire you select a mood and a quote populates that resonates
            with your mood... and hopefully inspires you.
          </p>
          <p>
            Technologies: HTML5, CSS3, Javascript, jQuery, Nodejs, Express,
            Bootstrap & Modals, Handlebars
          </p>

          <ButtonFlex>
            <Button>
              <a href="https://salty-anchorage-65493.herokuapp.com/">Website</a>
            </Button>
            <Button>
              <a href="https://github.com/Jdale28/inspire-project-2">GitHub</a>
            </Button>
          </ButtonFlex>
        </DescriptionFlex>
      </ProjectTwoContainer>
    );
  }
}

export default ProjectTwo;
