import React, { Component } from "react";
import styled from "styled-components";

const ProjectOneContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  background-color: #1A090D;
  color: white;
  background-image: url("https://i.imgur.com/6iPJosz.png");
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
  border: #1A090D solid 1px;
  font-weight: bold;
  background-color: #1A090D;
  color: rgba(255, 255, 255, 1);
  a {
    text-decoration: none;
    color: white;
    :hover {
      color: #ACE894;
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

class ProjectOne extends Component {
  render() {
    return (
      <ProjectOneContainer>
        <DescriptionFlex>
          <h3>Connect Four</h3>
          <div className="projectImg">
          <img src="https://i.imgur.com/6iPJosz.png" alt="Jonny On It" />
          </div>
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
              <a href="https://lucid-sammet-b3bfd5.netlify.com/">Website</a>
            </Button>
            <Button>
              <a href="https://github.com/Jdale28/connectFour">GitHub</a>
            </Button>
          </ButtonFlex>
        </DescriptionFlex>
      </ProjectOneContainer>
    );
  }
}

export default ProjectOne;
