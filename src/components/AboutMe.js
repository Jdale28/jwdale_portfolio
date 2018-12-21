import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  background-color: white;
  color: black;
  .selfie {
    height: 39vh;
    width: 22vw;
    border: 1px solid black;
    background-image: url("https://i.imgur.com/d9fquU0.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
`;
const AboutFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 55vw;
  p {
    font-size: 18px;
    margin: 1vh;
  }
  h1 {
    margin-bottom: 2vh;
  }
`

class AboutMe extends Component {
  render() {
    return (
      <AboutMeContainer>
        <div className="selfie" />
        <AboutFlex><h1>About Me</h1>
        <p>I'm a full stack web developer based in Atlanta</p>
        <p>
        I dive into each project with a voracious desire to understand and
        solve each hurdle that arises. I pair that desire with a creative eye
        that constantly asks how to make a design more intuitive and the user
        experience more gratifying.
        </p>
        <p>
        With a background as a financial advisor, I bring an empathetic,
        trustworthy demeanor to team environments that’s coupled with the
        data-driven, analytical mind of solo projects.
        </p>
        <p>
        An eye for design and detail. Eager to grow, learn, and constantly
        refining techniques and adding more to my repertoire.
        </p></AboutFlex>
      </AboutMeContainer>
    );
  }
}

export default AboutMe;
