import React, { Component } from "react";
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

class ProjectFour extends Component {
  render() {
    return (
      <ProjectFourContainer>
        <DescriptionFlex>
          <h3>Jonny On It</h3>
          <div className="projectImg">
          <img src="https://i.imgur.com/0qjzdH8.png" alt="Jonny On It" />
          </div>
          <h6>Find the home service you need in a flash</h6>
          <p>
            Collaboration effort with User Experience students for our client
            Christian Ries, CEO of Jonny On It.
          </p>
          <p>
            Technologies: React, Axios, React-Geosuggest, React-Strap,
            Material-UI, Django, Serializer, Rest-framework, Python
          </p>

          <ButtonFlex>
            <Button>
              <a href="https://jonny-on-it-collab.herokuapp.com/">Website</a>
            </Button>
            <Button>
              <a href="https://github.com/Jdale28/jonny_on_it_collab">GitHub</a>
            </Button>
          </ButtonFlex>
        </DescriptionFlex>
      </ProjectFourContainer>
    );
  }
}

export default ProjectFour;
