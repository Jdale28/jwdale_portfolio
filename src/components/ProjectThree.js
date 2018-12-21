import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProjectThreeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  background-color: black;
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
  }
  h6 {
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

class ProjectThree extends Component {
  render() {
    return (
      <ProjectThreeContainer>
        <DescriptionFlex>
          <h3 className="header">Outperform</h3>
          <h6 className="header">Performance Review Manager</h6>
          <p>
            For our third project  we were tasked with incorporating React into whatever type of app we wanted. I chose to do a business-related app which would attempt to improve the manager-employee performance review process.
          </p>
          <p>
            Typically, those reviews are done at the last minute. With Outperform, the goal would be to allow managers to add employee responsibilities periodically and check in more frequently than once or twice a year.
          </p>
          <p>
            Given this was our first foray into React, there is a lot that I wanted to incorporate but simply didn't have time for. In future versions, I'd like to incorporate Mail Chimp (or similar service) to send alerts when employers submit reviews, as well as authentication and login.
          </p>
          <p>
            Feel free to check out Outperform here...
            <a href="https://jwdale-project3.herokuapp.com/"> Outperform</a>
            <br />
            Link to GitHub to check out behind the scenes:
            <a href="https://github.com/Jdale28/WDI-project3">
              
              Outperform's Repository
            </a>
          </p>
          <p>
            Technologies: HTML5, CSS3, Javascript, Nodejs, Express, React,
            Bootstrap & Modals
          </p>
        </DescriptionFlex>
      </ProjectThreeContainer>
    );
  }
}

export default ProjectThree;
