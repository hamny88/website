import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Typed from "react-typed";
import { computerGreen, amber } from "../../styles/styleConstants";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../../App.css';

const MainWrapper = styled.div`
  height: 80%;
`;

const SubWrapper = styled.div`
  height:66%;
`;
const Quote = styled.div`
  color: white;
  position: relative;
  top: 87%;
  font-size: 22px;
  color: ${computerGreen};
  text-align: center;
  font-family: 'Jura';
`;
const MainContainer = styled.div`
color: white;
height: 100vh;
font-size: 22px;
font-weight: 400;
a {
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration : underline;
    text-underline-offset: 0.2em;
    font-style: italic;
  }
}

.sub-container {
  width: 100%;
    height: 300px;
}
@keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @-webkit-keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  input {
    font-size: 22px;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid ${computerGreen};
      padding: 7px 0;
      margin-top: 15px;
      color: ${computerGreen};
      font-family: 'Jura', sans-serif;    
    }
    input:focus {
      outline: none;
      color: ${computerGreen};
    }
  
    input::placeholder {
      color: ${computerGreen};
      opacity: 1; /* Firefox */
    }
  
    input:focus::placeholder {
      color: transparent;
      transition: 0.5s;
    }

  .typeJs {
    color: ${computerGreen};
    line-height: 121%;
    font-family: 'Jura', sans-serif;
    }
    .greeting {
      position: absolute;
       margin-top: 25px;
      color: ${amber};
      line-height: 121%;
      font-family: 'Jura', sans-serif;

    }

    .iconLink {
      color: ${amber};
      margin-top: 80px;
      line-height: 121%;
      width: fit-content;
      svg {
        padding-right: 6px;
      }
      font-family: 'Press';
    }
   
  }
`;

type MainType = {
  currentUser: string;
  quote: string;
  setCurrentUser: (name: string) => void;
  getQuote: () => void;
};

const Main = ({currentUser, quote, setCurrentUser, getQuote}: MainType) => {
  const [showInput, setShow] = useState(false);
  const [isGreeting, setGreeting] = useState(false);
  const [userName, setName] = useState("");
  const [isMenu, showMenu] = useState(false);
  const [mainQuote, setQuote] = useState("");

  useEffect(() => {
    window.scroll(0,0);
    getQuote();

  },[])

  const onFormSubmit = (e: any) => {
    setGreeting(true);
    setShow(false);
  };

  return (
    <MainContainer>
      <MainWrapper>
      <div className="sub-container">
        <Typed
          className="typeJs"
          strings={[
            "Hello world!<br>I'm Nayoun, Software Developer.<br>Residing in Seoul,South Korea.<br><br>What's your name?",
          ]}
          typeSpeed={35}
          onComplete={function () {
            setShow(true);
            document.addEventListener("submit", onFormSubmit);
          }}
        />
        {showInput === true ? (
          <form className="name-form">
            <input autoComplete="off" id="mainName" className="nameInput" type="text" placeholder="Name" value={userName}
            onChange = {(e) => {
            setName(e.target.value)
            }}
            />
          </form>
        ) : (
          ""
        )}
        {isGreeting ? (
          <>
            <br></br>
            <Typed
              className="greeting"
              strings={[
                `Welcome ${userName}!`,
                "Feel free to browse",
                "👋👋👋👋👋👋👋",
              ]}
              typeSpeed={20}
              backSpeed={20}
              fadeOut={false}
              loop={false}
              onComplete={function () {
                showMenu(true);
              }}
            />
          </>
        ) : (
          ""
        )}
        {isMenu === true ? (
            <div className="iconLink">
            <a href="https://github.com/hamny88">
            <div className="github">
              <ArrowForwardIosIcon />
              Github{' '}
              <GitHubIcon />
              </div> 
            </a>
            <a href="https://www.linkedin.com/in/nayoun-ham-6a3373179/" target="_blank">
            <div className="LinkedIn">
            <ArrowForwardIosIcon />
              LinkedIn {' '}
            <LinkedInIcon />  
            </div>
            </a>
            </div>
            
        ) : (
          ""
        )}
      </div>
      <SubWrapper>
      <Quote>
        <span className="quote">{quote}</span>
      </Quote>
      </SubWrapper>
      
      </MainWrapper>
    </MainContainer>
  );
};

export default Main;
