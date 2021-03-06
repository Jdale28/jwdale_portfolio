import React, { Component } from "react";
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
    background-image: url("https://i.imgur.com/fODAmUz.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 820px) {
    height: 65vh;
    .selfie {
      display: none;
    }
  }
  @media screen and (max-width: 820px) {
    height: 105vh;
  }
  @media screen and (max-width: 670px) {
    height: 115vh;
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
    font-family: "Raleway";
  }
  @media screen and (max-width: 820px) {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 90vw;
    text-align: center;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 14px;
    }
    .selfieTwo {
      margin-left: 20vw;
      height: 20vh;
      width: 50vw;
      background-image: url("https://i.imgur.com/fODAmUz.jpg");
      background-size: 100%;
      background-repeat: no-repeat;
    }
  }
  @media screen and (max-width: 820px) {
    .selfieTwo {
      height: 30vh;
    }
  }
`;



class AboutMe extends Component {
  render() {
    return (
      <AboutMeContainer>
        <div className="selfie" />
        <AboutFlex>
          <h1>About Me</h1>
          <div className="selfieTwo" />
          <p>
            My name is Jordan Dale. I'm a full stack web developer based in
            Atlanta.
          </p>
          <p>
            I recently finished 500+ hours of intense, deadline-driven training
            through General Assembly's Web Developer Immersive course.
          </p>
          <p>
            With a background as a financial advisor, I bring an empathetic,
            trustworthy demeanor to team environments that’s coupled with the
            data-driven, analytical mind of solo projects.
          </p>
          <p>
            My language specialities include:
            <p>
              {" "}
              ReactJS, Node.js, HTML5, CSS3, JavaScript, MongoDB/Mongoose,
              Django, Python, and more.{" "}
            </p>
            <p> Currently expanding my knowledge of Java and AngularJS.</p>
          </p>
          <p>
            I'm eager to grow, learn, and constantly refining techniques and
            adding more to my repertoire.
          </p>
          <p>
            I am currently looking for full time positions or opportunities for
            collaboration and additional practice.
          </p>
        </AboutFlex>
      </AboutMeContainer>
    );
  }
}

export default AboutMe;
