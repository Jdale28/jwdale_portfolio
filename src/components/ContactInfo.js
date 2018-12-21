import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import pdf from '../files/Jordan Dale-Resume.pdf';

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  font-size: 2rem;
  background-color: white;
  color: white;
  .contactFlex {
    margin: 0;
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .contactText {
      color: black;
      margin-left: 10vw;
      margin-top: 15vh;
      margin-bottom: 10vh;
      width: 70%;
      .contactMethod {
        font-family: "calibri";
        font-size: 0.75rem;
        margin-top: 3vh;
      }
      h1 {
        font-family: Helvetica, sans-serif;
        font-size: 2.5rem;
      }
      p {
        margin: 0.5vh 0 0.8vh 0;
      }
      .tagline {
        font-family: "calibri";
        font-size: 1rem;
      }
    }
    a {
      text-decoration: none;
      color: black;
    }
  }
  .imageBox {
    width: 40%;
    height: 100%;
    background-image: url(http://science.sciencemag.org/content/sci/358/6363/605.1/F1.large.jpg?width=800&height=600&carousel=1);
    background-size: 100%;
  }
`;

class ContactInfo extends Component {
  render() {
    return (
      <ContactContainer>
        <div className="contactFlex">
          <div className="contactText">
            <h1>Say Hello</h1>
            <div className="tagline">
              <p>
                Looking to collaborate, or simply interested in learning more
                about me?
              </p>
              <p>Get in touch!</p>
            </div>
            <div className="contactMethod">
              <img
                src="https://i.imgur.com/gaJHfgd.png"
                alt="Map Pin"
                width="32"
                height="32"
              />{" "}
              Atlanta, Georgia, USA
            </div>
            <div className="contactMethod">
              <img
                src="https://i.imgur.com/FcrG2zS.png"
                alt="Cell Phone"
                width="32"
                height="32"
              />{" "}
              +1 770 630 1199
            </div>
            <div className="contactMethod">
              <img
                src="https://i.imgur.com/yb0rxae.png"
                alt="Email Icon"
                width="32"
                height="32"
              />{" "}
              jordan.dale2@gmail.com
            </div>
            <div className="contactMethod">
              <img
                src="https://i.imgur.com/dnBlexF.png"
                alt="Resume Icon"
                width="36"
                height="36"
              />{" "}
              <a href={pdf}>Click for my Resume</a>
            </div>
          </div>
        </div>
        <div className="imageBox" />
      </ContactContainer>
    );
  }
}

export default ContactInfo;
