import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ContactInfo from "./ContactInfo";

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  font-size: 2rem;
  background-color: grey;
  font-family: 'montserat';
  text-transform: uppercase;
  a {
    text-decoration: none;
    padding-left: 2vw;
    color: white;
    &:hover {
      color: red;
    }
  }
  .left {
    width: 15vw;
  }
  .right {
    margin-right: 2vw;
    width: 25vw;
    display: flex;
    justify-content: space-around;
  }
`;

class NavBar extends Component {
  render() {
    return (
      <div>
        <ContactInfo/>
        <NavBarStyles>
          <div className="left">
            <Link to="/">Top</Link>
            <Link to="/">Projects</Link>
            {/* <Link to="/">Contact</Link> */}
          </div>
          <div className="right">
            <a href="https://github.com/Jdale28">GitHub</a>
            <a href="https://www.linkedin.com/in/jordan-w-dale/">LinkedIn</a>
          </div>
          
        </NavBarStyles>
      </div>
    );
  }
}

export default NavBar;
