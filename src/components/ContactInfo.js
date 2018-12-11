import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  }
  .methodBox {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
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
            {/* <div className="methodBox"> */}
            <div className="contactMethod">
              <img
                src="https://image.freepik.com/free-icon/map-marker_318-49860.jpg"
                alt="Map Pin"
                width="32"
                height="32"
              />{" "}
              Atlanta, Georgia, USA
            </div>
            <div className="contactMethod">
              <img
                src="https://image.flaticon.com/icons/svg/0/191.svg"
                alt="Cell Phone"
                width="32"
                height="32"
              />{" "}
              +1 770 630 1199
            </div>
            <div className="contactMethod">
              <img
                src="https://img.icons8.com/metro/1600/email.png"
                alt="Email Icon"
                width="32"
                height="32"
              />{" "}
              jordan.dale2@gmail.com
            </div>
            <div className="contactMethod">
              <img
                src="https://visualpharm.com/assets/888/Resume-595b40b85ba036ed117dc3ee.svg"
                alt="Resume Icon"
                width="36"
                height="36"
              />{" "}
              View Resume
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="imageBox">
        </div>
        
      </ContactContainer>
    );
  }
}

export default ContactInfo;
