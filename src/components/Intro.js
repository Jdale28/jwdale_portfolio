import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  background: url("https://media.giphy.com/media/OK5LK5zLFfdm/giphy.gif")
    no-repeat center center;
  background-size: 100%;
  opacity: 0.8;
  background-position: absolute;
  color: white;
  p {
    opacity: 1;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
  }
  .cursor {
    position: absolute;
    width: 3vh;
    height: 5vh;
    bottom: 2vh;
    left: 50%;
    margin-left: -1vh;
    border-radius: 40%;
    border: 2px solid #888;
    -webkit-animation: intro 1s;
    animation: intro 1s;
  }
  .scroll {
    display: block;
    width: 3px;
    height: 3px;
    margin: 6px auto;
    border-radius: 4px;
    background: #888;
    -webkit-animation: finger 1s infinite;
    animation: finger 1s infinite;
  }
  @keyframes intro {
    0% {
      opacity: 0;
      -webkit-transform: translateY(40px);
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes finger {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
    }
  }
`;

class Intro extends Component {
  render() {
    return (
      <div>
        <IntroContainer>
          <p>Jordan William Dale</p>
          <div className="cursor">
            <div className="scroll" />
          </div>
        </IntroContainer>
      </div>
    );
  }
}

export default Intro;
