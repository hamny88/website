import React, { useEffect, useRef,useState } from "react";
import "react-typed/dist/animatedCursor.css";
import Slider from "react-slick";
import styled from 'styled-components';
import { connect } from 'react-redux';
import { myWebActionCreators, RootState } from './modules/myWeb';
import Main from "./container/Main/main";
import NewAboutMe from "./container/newAboutMe.container";
import Contact from "./container/contact.container";
import GlobalStyle from "./GlobalStyle";

type myWebAppType = {
  currentUser: string;
  quote: string;
};

type myWebType = ReturnType<typeof mapStateToProps>&
  typeof dispatchProps &
  myWebAppType;

const mapStateToProps = (state: RootState) => ({
  currentUser : state.currentUser,
  quote: state.quote,

});

const dispatchProps = {
  getQuote: myWebActionCreators.getQuote,
  setCurrentUser: myWebActionCreators.setCurrentUser,
}

const Container = styled.div`
margin: 0;
background-color: rgb(24, 24,24);
padding: 60px 40px 0px 60px;
.slick-dots {
  display: flex !important;
  top: 10%;
  right: 0%;
  width: 0% !important;
  bottom: 0px !important;
  flex-direction: column !important;
  align-items: flex-end !important;
}
.slick-dots li button:before {
  color: gray !important;
}
.slick-dots li button:after {
  color: white !important;
}

.slick-arrow{
  display: none !important;
}

`;


function App( {currentUser, quote, setCurrentUser, getQuote} : myWebType) {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    draggable: true,
  };
  return (
    <>
    <GlobalStyle />
    <Container>
      <Slider {...settings} >
      <Main 
        quote={quote}
        currentUser = {currentUser}
        setCurrentUser = {setCurrentUser}
        getQuote = {getQuote}
        ></Main>
      <NewAboutMe></NewAboutMe>
      <Contact></Contact>
      </Slider>
      
    </Container>
    </>
  );
}

export default connect(mapStateToProps, dispatchProps)(App);
