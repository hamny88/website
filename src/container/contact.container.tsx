import React, { useState, useEffect } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import swal from "sweetalert";

init("user_VcKbEvgNqCWXHlhByqVGU");

const config = {
  serviceID: "service_qwtteyi",
  templateID: "template_3f5hhcq",
  userID: "user_VcKbEvgNqCWXHlhByqVGU",
  AccessToken: "c96c23b7ebef0a50478a6a91924df8ef",
};

const ContactContainer = styled.div`
  height: 105vh;
`;

const Wrapper = styled.div`
  height: 80%;
  .contact-type {
    color: white;
    font-size: 18px;
    margin-top: 50px;
    padding-left: 40px;
  }
  .addressQ {
    margin-top: 50px;
  }
  input,
  textarea {
    font-size: 17px;
    width: 250px;
    border: 0;
    border-bottom: 1px solid #555;
    background-color: transparent;
    color: whitesmoke;
    font-family: "Jura", sans-serif;
    padding-top: 16px;

    &:focus {
      border: none;
      outline: none;
      border-bottom: 1px solid #e74c3c;
    }
  }
  textarea {
    margin-top: 50px;
    width: 50%;
    border: 1px solid #555;
    border-radius: 5px;

    &:focus {
      border: 1px solid #e74c3c;
    }
  }
  .submitBtn {
    color: white;
    font-family: "Jura", sans-serif;
    padding: 10px;
    background-color: rgb(24,24,24);
    cursor: pointer;
    width: 88px;
    margin-top: 30px;
    border: 0.8px solid white;
    text-align: center;
    border-radius: 5px;
    &:hover {
      background-color: white;
      color: black;
    }
  }
  .particles-bg-canvas-self {
    position: relative !important;
  }
`;

const Font = styled.div`
font-family: "Jura", sans-serif;

`
const Title = styled.span`
  font-size: 35px;
  color: white;
  font-family: "Orbitron", sans-serif;
`;

const Blank = styled.div`
  height: 50px;
`;
const Contact = () => {
  const [contactName, setContactName] = useState("");
  const [isEmail, setEmailAddress] = useState("");
  const [isContent, setContent] = useState("");

  const popSwal = (target: string) => {
    swal({
      title: "Error",
      text: target + " is not correct",
      icon: "error",
    });
  };
  const validationCheck = () => {
    var emailRgx = /\w+@\w+.(\w+.\w+)/g;

    if (contactName == "") {
      popSwal("Name");
      return false;
    } else if (!emailRgx.test(isEmail)) {
      popSwal("Email");
      return false;
    } else if (isContent == "") {
      popSwal("Content");
      return false;
    } else {
      return true;
    }
  };

  const send = (e: any) => {
    e.preventDefault();
    if (validationCheck()) {
      const data = {
        name: contactName,
        email: isEmail,
        content: isContent,
      };
      emailjs.send(config.serviceID, config.templateID, data).then(
        function (response) {
          console.log("SUCCESS", response.status, response.text);
          setContactName("");
          setEmailAddress("");
          setContent("");
          swal({
            title: "Success",
            text: "Yoiur email sent successfully!",
            icon: "success",
          });
        },
        function (error) {
          console.log("Failed", error);
        }
      );
    } else {
      console.log("Validation Failed");
    }
  };

  return (
    <ContactContainer className="contatc-container">
      <Wrapper className="contact-wrapper">
        <Title>Contact</Title>
        {/* <TerminalDiv>
          <TerminalController />
        </TerminalDiv> */}
        <div className="particle"></div>
        <div className="contact-type">
          <Font>What's your name?</Font>
          <input
            className="conact-name-input"
            value={contactName}
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setContactName(e.target.value);
            }}
          />
          <Blank />
          <Font>What's your email address?</Font>
          <input
            className="contact-email-input"
            value={isEmail}
            type="text"
            placeholder="email"
            onChange={(e) => {
              setEmailAddress(e.target.value);
            }}
          />
          <div className="content">
            <textarea
              placeholder="content"
              value={isContent}
              className="content-input"
              autoComplete="off"
              cols={50}
              rows={10}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="submitBtn"
            onClick={(e) => {
              send(e);
            }}
          >
            Submit
          </div>
        </div>
      </Wrapper>
    </ContactContainer>
  );
};


export default Contact;
