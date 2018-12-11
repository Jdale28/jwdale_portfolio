import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";


const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  font-size: 2rem;
  background-color: black;
  color: white;
`;

class ContactInfo extends Component {
    render() {
        return (
            <ContactContainer>
                Hello from contact info
            </ContactContainer>
        );
    }
}

export default ContactInfo;