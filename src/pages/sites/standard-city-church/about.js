import React from 'react';
import styled from 'styled-components';
import CtaStandardChurch from '../../../components/CtaStandardChurch';

// Images
import biblevector from '../../../assets/images/city-church/books-bible-vector.jpg';
import pews from '../../../assets/images/city-church/church-pews-sanctuary-reduced.jpg';
import pastor from '../../../assets/images/city-church/pastor-example.png';
import bible from '../../../assets/images/city-church/quiet-time-bible-coffee-study.jpg';
import { Link } from 'gatsby';

const CityChurchStyles = styled.div`
  width: calc(100vw - 100px);
  margin-left: 100px;
  background-color: var(--white);
  .flex {
    display: flex;
    flex-flow: column wrap;
  }
  .inline {
    display: inline-flex;
  }
  .center {
    justify-content: center;
    align-items: center;
  }
  .cityChurchBody {
    position: relative;
  }
  .overlay {
    width: 100%;
    height: 500px;
    position: absolute;
    background-color: rgba(255,255,255,0.3);
    z-index: 5;
  }
  .background {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-image: url(${biblevector});
    background-size: cover;
    background-repeat: repeat;
    background-position: center center;
    opacity: 0.4;
  }
  .headerImg {
    width: 100%;
    height: 500px;
    background-image: url(${pews});
    background-size: cover;
    background-repeat: norepeat;
    background-position: center center;
    z-index: 4;
  }
  .wordContainer {
    max-width: 500px;
    margin: 0 auto;
    position: absolute;
    z-index: 5;
    .increase {
      font-size: 3rem;
    }
  }
  h1, h2 {
    text-align: center;
    color: var(--black);
  }
  h1 {
    font-family: Georgia;
    font-weight: bold;
    color: maroon;
    font-size: 6rem;
    text-transform: uppercase;
    text-shadow: 1px 0 5px var(--white), 0 1px 5px var(--white), -1px 0 5px var(--white), 0 -1px 5px var(--white);
    letter-spacing: 3rem;
  }
  h2 {
    font-size: 2rem;
    text-shadow: 1px 0 1px var(--white), 0 1px 1px var(--white), -1px 0 1px var(--white), 0 -1px 1px var(--white);
  }
  .content {
    width: 100%;
    height: 100%;
    padding: 7rem 0;
    background-color: rgba(0,0,0,0.5);
    p {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem 2rem;
      color: var(--white);
      font-size: 2rem;
    }
  }
  section {
    width: 100%;
    .left, .right {
      width: 50%;
    }
    .textSide {
      background-color: var(--white);
      opacity: 0.7;
    }
    h3 {
      padding: 2rem 0 0 2rem;
      font-size: 3rem;
    }
    p {
      padding: 0 2rem;
      font-size: 2rem;
    }
    .section1Img {
      width: 100%;
      height: 700px;
      background-image: url(${pastor});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
    .section2Img {
      width: 100%;
      height: 100%;
      background-image: url(${bible});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
  } 
  .hidden {
    display: none;
  }
  /* Hide menu on small screens */
  @media only screen and (max-width: 1080px) {
    display: none;
  }
  @media only screen and (max-height: 485px) {
    display: none;
  }
`;

const LandscapeCityChurchStyles = styled.div`
  /* Show compressed menu on short screens and landscape mode */
  @media only screen and (min-height: 486px) {
    display: none;
  }
  @media only screen and (orientation: portrait) {
    display: none;
  }
  width: calc(100vw - 50px);
  margin-left: 50px;
  background-color: var(--white);
  .flex {
    display: flex;
    flex-flow: column wrap;
  }
  .inline {
    display: inline-flex;
  }
  .responsiveFlex {
    display: inline-flex;
    @media only screen and (max-width: 900px) {
      display: flex;
      flex-flow: column wrap;
    }
  }
  .invert {
    @media only screen and (max-width: 900px) {
      flex-flow: column-reverse wrap;
    }
  }
  .center {
    justify-content: center;
    align-items: center;
  }
  .cityChurchBody {
    position: relative;
  }
  .background {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-image: url(${biblevector});
    background-size: cover;
    background-repeat: repeat;
    background-position: center center;
    opacity: 0.4;
  }
  .headerImg {
    width: 100%;
    height: 500px;
    background-image: url(${pews});
    background-size: cover;
    background-repeat: norepeat;
    background-position: center center;
    z-index: 4;
  }
  .overlay {
    width: 100%;
    height: 500px;
    position: absolute;
    background-color: rgba(255,255,255,0.3);
    z-index: 5;
  }
  .wordContainer {
    max-width: 450px;
    height: auto;
    margin: 0 auto;
    position: absolute;
    z-index: 5;
    .increase {
      font-size: 3rem;
    }
  }
  h1, h2 {
    text-align: center;
    color: var(--black);
  }
  h1 {
    font-family: Georgia;
    font-weight: bold;
    color: maroon;
    font-size: 6rem;
    text-transform: uppercase;
    text-shadow: 1px 0 5px var(--white), 0 1px 5px var(--white), -1px 0 5px var(--white), 0 -1px 5px var(--white);
    letter-spacing: 3rem;
  }
  h2 {
    text-shadow: 1px 0 1px var(--white), 0 1px 1px var(--white), -1px 0 1px var(--white), 0 -1px 1px var(--white);
  }
  .content {
    width: 100%;
    height: 100%;
    padding: 7rem 0;
    background-color: rgba(0,0,0,0.5);
    p {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem 2rem;
      color: var(--white);
      font-size: 2rem;
    }
  }
  section {
    width: 100%;
    .left, .right {
      width: 50%;
      @media only screen and (max-width: 900px) {
        width: 100%;
      }
    }
    .textSide {
      height: 223vh;
      background-color: var(--white);
      opacity: 0.7;
      @media only screen and (max-width: 900px) {
        max-height: 550px;
      }
    }
    h3 {
      padding: 2rem 0 0 2rem;
      font-size: 3rem;
    }
    p {
      padding: 0 2rem;
      font-size: 2rem;
    }

    // Image Styles
    .section1Img {
      width: 100%;
      height: 223vh;
      background-image: url(${pastor});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
      @media only screen and (max-width: 900px) {
        height: 500px;
      }
    }
    .section2Img {
      width: 100%;
      height: 223vh;
      background-image: url(${bible});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
      @media only screen and (max-width: 900px) {
        height: 500px;
      }
    }
  }

  .hidden {
    display: none;
  }
  @media only screen and (max-width: 900px) {
    width: calc(100vw - 50px);
    margin-left: 50px;
  }
`;
const TabletCityChurchStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 1081px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  @media only screen and (max-height: 485px) {
    display: none;
  }
  width: calc(100vw - 100px);
  margin-left: 100px;
  background-color: var(--white);
  .flex {
    display: flex;
    flex-flow: column wrap;
  }
  .inline {
    display: inline-flex;
  }
  .responsiveFlex {
    display: inline-flex;
    @media only screen and (max-width: 900px) {
      display: flex;
      flex-flow: column wrap;
    }
  }
  .invert {
    @media only screen and (max-width: 900px) {
      flex-flow: column-reverse wrap;
    }
  }
  .center {
    justify-content: center;
    align-items: center;
  }
  .cityChurchBody {
    position: relative;
  }
  .background {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-image: url(${biblevector});
    background-size: cover;
    background-repeat: repeat;
    background-position: center center;
    opacity: 0.4;
  }
  .headerImg {
    width: 100%;
    height: 500px;
    background-image: url(${pews});
    background-size: cover;
    background-repeat: norepeat;
    background-position: center center;
    z-index: 4;
  }
  .overlay {
    width: 100%;
    height: 500px;
    position: absolute;
    background-color: rgba(255,255,255,0.3);
    z-index: 5;
  }
  .wordContainer {
    max-width: 450px;
    margin: 0 auto;
    position: absolute;
    z-index: 5;
    .increase {
      font-size: 3rem;
    }
  }
  h1, h2 {
    text-align: center;
    color: var(--black);
  }
  h1 {
    font-family: Georgia;
    font-weight: bold;
    color: maroon;
    font-size: 6rem;
    text-transform: uppercase;
    text-shadow: 1px 0 5px var(--white), 0 1px 5px var(--white), -1px 0 5px var(--white), 0 -1px 5px var(--white);
    letter-spacing: 3rem;
  }
  h2 {
    font-size: 2rem;
    text-shadow: 1px 0 1px var(--white), 0 1px 1px var(--white), -1px 0 1px var(--white), 0 -1px 1px var(--white);
  }
  .content {
    width: 100%;
    height: 100%;
    padding: 7rem 0;
    background-color: rgba(0,0,0,0.5);
    p {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem 2rem;
      color: var(--white);
      font-size: 2rem;
    }
  }
  section {
    width: 100%;
    .left, .right {
      width: 50%;
      @media only screen and (max-width: 900px) {
        width: 100%;
      }
    }
    .textSide {
      height: 100vh;
      background-color: var(--white);
      opacity: 0.7;
      @media only screen and (max-width: 900px) {
        height: auto;
      }
      @media only screen and (min-height: 486px) and (max-height: 773px)  {
        height: 160vh;
      }
    }
    h3 {
      padding: 2rem 0 0 2rem;
      font-size: 3rem;
    }
    p {
      padding: 0 2rem;
      font-size: 2rem;
    }

    // Image Styles
    .section1Img {
      width: 100%;
      height: 100vh;
      background-image: url(${pastor});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
      @media only screen and (max-width: 900px) {
        height: 500px;
      }
      @media only screen and (min-height: 486px) and (max-height: 773px)  {
        height: 160vh;
      }
    }
    .section2Img {
      width: 100%;
      height: 100vh;
      background-image: url(${bible});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
      @media only screen and (max-width: 900px) {
        height: 500px;
      }
      @media only screen and (min-height: 486px) and (max-height: 773px) {
        height: 160vh;
      }
    }
  }

  .hidden {
    display: none;
  }
  @media only screen and (min-width: 900px) and (max-height: 485px) {
    width: calc(100vw - 50px);
  }
  @media only screen and (max-width: 900px) {
    width: calc(100vw - 50px);
    margin-left: 50px;
  }
`;

const MobileCityChurchStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  @media only screen and (max-height: 485px) {
    display: none;
  }
    width: calc(100vw - 50px);
    margin-left: 50px;
    background-color: var(--white);
    .flex {
      display: flex;
      flex-flow: column wrap;
    }
    .inline {
      display: inline-flex;
    }
    .responsiveFlex {
      display: inline-flex;
      @media only screen and (max-width: 900px) {
        display: flex;
        flex-flow: column wrap;
      }
    }
    .invert {
      flex-flow: column-reverse wrap;
    }
    .center {
      justify-content: center;
      align-items: center;
    }
    .cityChurchBody {
      position: relative;
    }
    .background {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      background-image: url(${biblevector});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
      opacity: 0.4;
    }
    .headerImg {
      width: 100%;
      height: 500px;
      background-image: url(${pews});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
      z-index: 4;
    }
    .overlay {
      width: 100%;
      height: 500px;
      position: absolute;
      background-color: rgba(255,255,255,0.3);
      z-index: 5;
    }
    .wordContainer {
      max-width: 500px;
      margin: 0 auto;
      position: absolute;
      z-index: 5;
    }
    h1, h2 {
      text-align: center;
      color: var(--black);
    }
    h1 {
      font-family: Georgia;
      font-weight: bold;
      color: maroon;
      font-size: 3rem;
      text-transform: uppercase;
      text-shadow: 1px 0 5px var(--white), 0 1px 5px var(--white), -1px 0 5px var(--white), 0 -1px 5px var(--white);
      letter-spacing: 2rem;
    }
    h2 {
      max-width: 300px;
      margin: 0 auto;
      font-size: 1.4rem;
      text-shadow: 1px 0 1px var(--white), 0 1px 1px var(--white), -1px 0 1px var(--white), 0 -1px 1px var(--white);
    }
    .increase {
      font-size: 2.25rem;
    }
    .content {
      width: 100%;
      height: 100%;
      padding: 7rem 0;
      background-color: rgba(0,0,0,0.5);
      p {
        max-width: 600px;
        margin: 0 auto;
        padding: 1rem 2rem;
        color: var(--white);
        font-size: 1.9rem;
      }
    }
    section {
      width: 100%;
      .left, .right {
        width: 100%;
      }
      .textSide {
        background-color: var(--white);
        opacity: 0.7;
      }
      h3 {
        padding: 2rem 0 0 2rem;
        font-size: 3rem;
      }
      p {
        padding: 0 2rem;
        font-size: 1.5rem;
      }
  
      // Image Styles
      .section1Img {
        width: 100%;
        height: 100%;
        background-image: url(${pastor});
        background-size: cover;
        background-repeat: norepeat;
        background-position: center center;
        @media only screen and (max-width: 900px) {
          height: 500px;
        }
      }
      .section2Img {
        width: 100%;
        height: 100%;
        background-image: url(${bible});
        background-size: cover;
        background-repeat: norepeat;
        background-position: center center;
        @media only screen and (max-width: 900px) {
          height: 500px;
        }
      }
    }
  
    // Contact Form Styles
    .formContainer {
      width: 100%;
      background-color: rgba(0,0,0,0.5);
      padding: 5rem 0;
      form {
        max-width: 600px;
        margin: 5rem auto;
      }
      legend {
        padding-bottom: 1rem;
        font-size: 2.5rem;
        text-align: center;
        color: var(--white);
        text-shadow: 1px 0 3px var(--black), 0 1px 3px var(--black), -1px 0 3px var(--black), 0 -1px 3px var(--black);
      }
      fieldset {
        padding: 0;
        border: none;
      }
      input {
        width: calc(100% - 32px);
        margin: 0.5rem;
        padding: 1rem;
      }
      textarea {
        margin: 0.5rem;
        padding: 1rem;
      }
      button {
        margin: 0.5rem;
        background-color: lightgreen;
        color: var(--black);
        font-size: 2.5rem;
        &:hover {
          background-color: #e4e4e4;
        }
      }
    }
    .mapContainer {
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      background-color: rgba(0,0,0,0.5);
      padding: 3rem 0;
      .upgraded {
        text-transform: uppercase;
      }
      .cakes {
        padding-bottom: 1rem;
      }
      h3 {
        color: var(--white);
      }
      .address {
        text-align: left;
      }
      .map {
        width: 80%;
        height: 300px;
      }
    }
    .hidden {
      display: none;
    }
`;

const Navigation = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 7;
  .full {
    width: 100vw;
    position: relative;
  }
  nav ul {
    list-style-type: none;
    margin-right: 7.7rem;
    padding: 0;
    a {
      padding: 1.3rem;
      font-size: 2rem;
      color: var(--black);
      text-shadow: 1px 0 3px var(--white), -1px 0 3px var(--white), 0 1px 3px var(--white), 0 -1px 3px var(--white);
      cursor: pointer;
      transition: all 1s ease;
      &:hover {
        color: crimson;
      
      }
      &[aria-current='page'] {
        color: crimson;
      }
    }
  }
  .navBG {
    background-color: rgba(255,255,255,0.3);
    z-index: 1;
  }
  .inline {
    display: inline-flex;
  }
  .flex {
    display: flex;
    flex-flow: column nowrap;
    margin: 0;
    padding: 0;
  }
  .center {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  @media only screen and (max-width: 1080px) {
    .navBG {
      z-index: 0;
    }
  }

  /* Hide menu on small screens */
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const MobileNavigation = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 7;
  #menuToggle {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 25px;
    right: 25px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  #menuToggle input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    bottom: 5px;
    right: 5px;
  }
  #menuToggle span {
    display: flex;
    position: relative;
    width: 40px;
    height: 5px;
    margin-bottom: 5px;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 5px 0;
    background: var(--black);
    box-shadow: 1px 0 3px var(--white), 0 1px 3px var(--white), -1px 0 3px var(--white), 0 -1px 3px var(--white);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }
  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-6px, -12px);
  }
  #menuToggle input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  #menuToggle input:checked ~ span:nth-last-child(3) {
    transform: rotate(-45deg) translate(1px, 0);
  }
  #menu {
    height: 100vh;
    width: 50%;
    margin: 0;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    box-shadow: 0 0 10px #85888c;
    transform-origin: 0% 0%;
    transform: translate(100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    overflow-y: auto;
    @media only screen and (max-width: 500px) {
      width: 75%;
    }
  }
  #menu li {
    transition-delay: 2s;
  }
  #menu button {
    background-color: transparent;
    margin: 0;
    padding: 0;
    box-shadow: none;
    text-shadow: 1px 1px 5px #c2c2c2;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  ul {
    list-style-type: none;
    max-width: 75%;
    display: flex;
    flex-flow: row wrap;
    margin: 10rem auto 0;
    padding: 0;
    justify-content: center;
    button {
      width: 100%;
        a {
        font-size: 3rem;
        font-weight: bold;
      }
    }
  }
  nav {
    background-color: burlywood; 
  }
  nav ul {
    list-style-type: none;
    padding: 0;
    a {
      padding: 2rem;
      font-size: 2rem;
      color: var(--white);
      cursor: pointer;
      transition: all 2s ease;
      &:hover {
        color: var(--red);
        text-shadow: 1px 0 0 var(--white), -1px 0 0 var(--white), 0 1px 0 var(--white), 0 -1px 0 var(--white);
      }
      &[aria-current='page'] {
        border-bottom: 2px solid var(--red);
      }
    }
    @media only screen and (max-width: 325px) {
      a {
        font-size: 1.8rem;
      }
    }
  }
  .navBG {
    width: 100%;
    height: 100%;
    background-color: burlywood;
    box-shadow: 3px 5px 10px #000;
    z-index: 1;
  }
  .inline {
    display: inline-flex;
  }
  .flex {
    display: flex;
    flex-flow: column nowrap;
  }
  .center {
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  /* Hide menu on small screens */
  @media only screen and (min-width: 900px) {
    display: none;
  }
`;

export default function CityChurch() {
  const [checked, setChecked] = React.useState(false || '');
    return (
      <>
        <CityChurchStyles>
          <CtaStandardChurch />
          <Navigation>
            <div className="full navBG">
              <div className="center">
                <nav>
                  <ul className='inline center'>
                    <Link to='/sites/standard-city-church/'>
                      <li>Home</li>
                    </Link>
                    <Link to='/sites/standard-city-church/about'>
                      <li>About Us</li>
                    </Link>
                    <Link to='/sites/standard-city-church/contact'>
                      <li>Contact Us</li>
                    </Link>
                    <Link to='/sites/standard-city-church/events'>
                      <li>Events</li>
                    </Link>
                    <Link to='/sites/standard-city-church/ministry'>
                      <li>Ministries</li>
                    </Link>
                  </ul>
                </nav>
              </div>
            </div>
          </Navigation>
          <div className='background' />
          <div className='cityChurchBody'>
            <div className='header flex center'>
              <div className='headerImg' />
              <div className='wordContainer'>
                <h1>About Us</h1>
                <h2>Every church starts somewhere and has a set of beliefs that should always be based on our foundational text: the Bible. This is our story.</h2>
              </div>
            </div>
            <div className='content'>
              <p>Our founding pastor, Alan Gavry, began serving the community of Shelby, IA in 1985 by holding weekly prayer meetings in his home on Sunday evenings. By 1987 the group had doubled in size with around 30 people assembling for bible study, prayer and worship. Throughout the week the members of Home Church served throughout the community by offering yard work free of charge to their elderly neighbors and hosting monthly dinners to the homeless.</p>
              <p>Late in 1987 Home Church pooled their resources and purchased the building, formerly Old Baptist Church, at 54285 Martin Luther King Blvd. Home Church began holding services there in January 1988 with Pastor Gavry at the helm. In 2004 Pastor Gavry and his lovely wife Rae stepped back from the role of pastor and into an eldership role, making way for our current pastor, Shane Spencer.</p>
              <p>Home Church cares about our community and continues the outreach programs started in 1987, as well as several others. Our services remain what they have always been; simple and straightforward. We preach the word of God from the word of God, we sing hymns with a piano accompaniment, we pray together. We hope anyone who joins us for a service will feel like they are coming home as they draw nearer to Christ.</p>
            </div>
          <section className='inline' id='pastor'>
            <div className='left'>
              <div className='section1Img' />
            </div>
            <div className='right textSide'>
              <h3>Our Pastor</h3>
              <p>Shane Spencer has been leading Home Church since 2004. Originally from Shelby, Pastor Spencer knows our community and has a heart to help people know Jesus. He graduated from Bible College with a double master&apos;s of divinity and apologetics in 2000. After a brief time in Ecuador working as a missionary, Pastor Spencer returned to Shelby and served as a children&apos;s pastor under Pastor Gavry. With his passion for people to understand why they believe what they believe, he began our current ministry, From Atheist to Apologist, with our children&apos;s group, welcoming their many questions and teaching them how to think through and defend their faith.</p> 
              <p>When Pastor Gavry&apos;s health began to turn in mid 2004, Pastor Spencer graciously stepped into the lead pastoral role. He still consults with Pastor Gavry on a regular basis, wanting to continue Home Church&apos;s tradition of teaching the bible faithfully.</p> 
            </div>
          </section>
          <section className='inline' id='beliefs'>
            <div className='left textSide'>
              <h3>Our Beliefs</h3>
              <p>We believe in a triune God: God the Father, Jesus the Son, and The Holy Spirit. (“The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.” 2 Corinthians 13:14)</p>
              <p>We believe we are saved by grace alone through faith alone in Christ alone. (“It is by grace you have been saved, through faith - and this is not from yourselves, it is the gift of God - not by works, so that no one can boast. For we are God&apos;s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.” Ephesians 2:8-10)</p>
              <p>We believe the Christian bible is the holy, authoritative, inerrant Word of God. (“All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.” 2 Timothy 3:16-17)</p>
              <p>Psalm 33:1-3 commands, “Sing joyfully to the Lord, you righteous; it is fitting for the upright to praise him. Praise the Lord with the harp; make music to him on the ten-stringed lyre. Sing to him a new song; play skillfully, and shout for joy.” With that in mind we invite everyone to join us in singing hymns to the Lord, accompanied often by our piano. We include worship every time we meet together.</p>
            </div>
            <div className='right'>
              <div className='section2Img' />
            </div>
          </section>
        </div>
        </CityChurchStyles>
        <LandscapeCityChurchStyles>
          <CtaStandardChurch />
          <Navigation>
            <div className="full navBG">
              <div className="center">
                <nav>
                  <ul className='inline center'>
                    <Link to='/sites/standard-city-church/'>
                      <li>Home</li>
                    </Link>
                    <Link to='/sites/standard-city-church/about'>
                      <li>About Us</li>
                    </Link>
                    <Link to='/sites/standard-city-church/contact'>
                      <li>Contact Us</li>
                    </Link>
                    <Link to='/sites/standard-city-church/events'>
                      <li>Events</li>
                    </Link>
                    <Link to='/sites/standard-city-church/ministry'>
                      <li>Ministries</li>
                    </Link>
                  </ul>
                </nav>
              </div>
            </div>
          </Navigation>
          <MobileNavigation>
            <div id="menuToggle">
              <input 
                type="checkbox" 
                checked={checked}
                onClick={() => {setChecked(old => !old)}} 
              />
              <span />
              <span />
              <span />
              <div id="menu" className="menuContainer">
                <div className="navBG">
                  <div className="center">
                    <nav>
                      <ul className='flex center'>
                        <Link to='/sites/standard-city-church/'>
                          <li>Home</li>
                        </Link>
                        <Link to='/sites/standard-city-church/about'>
                          <li>About Us</li>
                        </Link>
                        <Link to='/sites/standard-city-church/contact'>
                          <li>Contact Us</li>
                        </Link>
                        <Link to='/sites/standard-city-church/events'>
                          <li>Events</li>
                        </Link>
                        <Link to='/sites/standard-city-church/ministry'>
                          <li>Ministries</li>
                        </Link>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </MobileNavigation>
          <div className='background' />
          <div className='cityChurchBody'>
            <div className='header flex center'>
              <div className='headerImg' />
              <div className='wordContainer'>
                <h1>About Us</h1>
                <h2>Every church starts somewhere and has a set of beliefs that should always be based on our foundational text: the Bible. This is our story.</h2>
              </div>
            </div>
            <div className='content'>
                <p>We started out with Pastor Gavry in 1993 and a heart to know Jesus and share our confident hope with others.</p>
                <p>Since then the Lord has built up this church to be supporting 15 ministries across the world including 3 here in Colorado.</p>
            </div>
          <section className='responsiveFlex' id='pastor'>
            <div className='left'>
              <div className='section1Img' />
            </div>
            <div className='right textSide'>
              <h3>Our Pastor</h3>
              <p>Shane Spencer has been leading Home Church since 2004. Originally from Shelby, Pastor Spencer knows our community and has a heart to help people know Jesus. He graduated from Bible College with a double master&apos;s of divinity and apologetics in 2000. After a brief time in Ecuador working as a missionary, Pastor Spencer returned to Shelby and served as a children&apos;s pastor under Pastor Gavry. With his passion for people to understand why they believe what they believe, he began our current ministry, From Atheist to Apologist, with our children&apos;s group, welcoming their many questions and teaching them how to think through and defend their faith.</p> 
            </div>
          </section>
          <section className='responsiveFlex invert' id='beliefs'>
            <div className='left textSide'>
              <h3>Our Beliefs</h3>
              <p>We believe in a triune God: God the Father, Jesus the Son, and The Holy Spirit. (“The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.” 2 Corinthians 13:14)</p>
              <p>We believe we are saved by grace alone through faith alone in Christ alone. (“It is by grace you have been saved, through faith - and this is not from yourselves, it is the gift of God - not by works, so that no one can boast. For we are God&apos;s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.” Ephesians 2:8-10)</p>
              <p>We believe the Christian bible is the holy, authoritative, inerrant Word of God. (“All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.” 2 Timothy 3:16-17)</p>
              <p>Psalm 33:1-3 commands, “Sing joyfully to the Lord, you righteous; it is fitting for the upright to praise him. Praise the Lord with the harp; make music to him on the ten-stringed lyre. Sing to him a new song; play skillfully, and shout for joy.” With that in mind we invite everyone to join us in singing hymns to the Lord, accompanied often by our piano. We include worship every time we meet together.</p>
            </div>
            <div className='right'>
              <div className='section2Img' />
            </div>
          </section>
        </div>
        </LandscapeCityChurchStyles>
        <TabletCityChurchStyles>
          <CtaStandardChurch />
          <Navigation>
            <div className="full navBG">
              <div className="center">
                <nav>
                  <ul className='inline center'>
                    <Link to='/sites/standard-city-church/'>
                      <li>Home</li>
                    </Link>
                    <Link to='/sites/standard-city-church/about'>
                      <li>About Us</li>
                    </Link>
                    <Link to='/sites/standard-city-church/contact'>
                      <li>Contact Us</li>
                    </Link>
                    <Link to='/sites/standard-city-church/events'>
                      <li>Events</li>
                    </Link>
                    <Link to='/sites/standard-city-church/ministry'>
                      <li>Ministries</li>
                    </Link>
                  </ul>
                </nav>
              </div>
            </div>
          </Navigation>
          <MobileNavigation>
            <div id="menuToggle">
              <input 
                type="checkbox" 
                checked={checked}
                onClick={() => {setChecked(old => !old)}} 
              />
              <span />
              <span />
              <span />
              <div id="menu" className="menuContainer">
                <div className="navBG">
                  <div className="center">
                    <nav>
                      <ul className='flex center'>
                        <Link to='/sites/standard-city-church/'>
                          <li>Home</li>
                        </Link>
                        <Link to='/sites/standard-city-church/about'>
                          <li>About Us</li>
                        </Link>
                        <Link to='/sites/standard-city-church/contact'>
                          <li>Contact Us</li>
                        </Link>
                        <Link to='/sites/standard-city-church/events'>
                          <li>Events</li>
                        </Link>
                        <Link to='/sites/standard-city-church/ministry'>
                          <li>Ministries</li>
                        </Link>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </MobileNavigation>
          <div className='background' />
          <div className='cityChurchBody'>
            <div className='header flex center'>
              <div className='headerImg' />
              <div className='wordContainer'>
                <h1>About Us</h1>
                <h2>Every church starts somewhere and has a set of beliefs that should always be based on our foundational text: the Bible. This is our story.</h2>
              </div>
            </div>
            <div className='content'>
                <p>We started out with Pastor Gavry in 1993 and a heart to know Jesus and share our confident hope with others.</p>
                <p>Since then the Lord has built up this church to be supporting 15 ministries across the world including 3 here in Colorado.</p>
            </div>
          <section className='responsiveFlex' id='pastor'>
            <div className='left'>
              <div className='section1Img' />
            </div>
            <div className='right textSide'>
              <h3>Our Pastor</h3>
              <p>When Pastor Gavry&apos;s health began to turn in mid 2004, Pastor Spencer graciously stepped into the lead pastoral role. He still consults with Pastor Gavry on a regular basis, wanting to continue Home Church&apos;s tradition of teaching the bible faithfully.</p> 
            </div>
          </section>
          <section className='responsiveFlex invert' id='beliefs'>
            <div className='left textSide'>
              <h3>Our Beliefs</h3>
              <p>We believe in a triune God: God the Father, Jesus the Son, and The Holy Spirit. (“The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.” 2 Corinthians 13:14)</p>
              <p>We believe we are saved by grace alone through faith alone in Christ alone. (“It is by grace you have been saved, through faith - and this is not from yourselves, it is the gift of God - not by works, so that no one can boast. For we are God&apos;s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.” Ephesians 2:8-10)</p>
              <p>We believe the Christian bible is the holy, authoritative, inerrant Word of God. (“All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.” 2 Timothy 3:16-17)</p>
              <p>Psalm 33:1-3 commands, “Sing joyfully to the Lord, you righteous; it is fitting for the upright to praise him. Praise the Lord with the harp; make music to him on the ten-stringed lyre. Sing to him a new song; play skillfully, and shout for joy.” With that in mind we invite everyone to join us in singing hymns to the Lord, accompanied often by our piano. We include worship every time we meet together.</p>
            </div>
            <div className='right'>
              <div className='section2Img' />
            </div>
          </section>
        </div>
        </TabletCityChurchStyles>
        <MobileCityChurchStyles>
            <CtaStandardChurch />
            <MobileNavigation>
              <div id="menuToggle">
                  <input 
                    type="checkbox" 
                    checked={checked}
                    onClick={() => {setChecked(old => !old)}} 
                  />
                  <span />
                  <span />
                  <span />
                  <div id="menu" className="menuContainer">
                    <div className="navBG">
                      <div className="center">
                        <nav>
                          <ul className='flex center'>
                            <Link to='/sites/standard-city-church/'>
                              <li>Home</li>
                            </Link>
                            <Link to='/sites/standard-city-church/about'>
                              <li>About Us</li>
                            </Link>
                            <Link to='/sites/standard-city-church/contact'>
                              <li>Contact Us</li>
                            </Link>
                            <Link to='/sites/standard-city-church/events'>
                              <li>Events</li>
                            </Link>
                            <Link to='/sites/standard-city-church/ministry'>
                              <li>Ministries</li>
                            </Link>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </MobileNavigation>
              <div className='background' />
              <div className='cityChurchBody'>
                <div className='header flex center'>
                  <div className='headerImg' />
                  <div className='wordContainer'>
                    <h1>About Us</h1>
                    <h2>Every church starts somewhere and has a set of beliefs that should always be based on our foundational text: the Bible. This is our story.</h2>
                  </div>
                </div>
                <div className='content'>
                    <p>We started out with Pastor Gavry in 1993 and a heart to know Jesus and share our confident hope with others.</p>
                    <p>Since then the Lord has built up this church to be supporting 15 ministries across the world including 3 here in Colorado.</p>
                </div>
              <section className='responsiveFlex' id='pastor'>
                <div className='left'>
                  <div className='section1Img' />
                </div>
                <div className='right textSide'>
                  <h3>Our Pastor</h3>
                  <p>When Pastor Gavry&apos;s health began to turn in mid 2004, Pastor Spencer graciously stepped into the lead pastoral role. He still consults with Pastor Gavry on a regular basis, wanting to continue Home Church&apos;s tradition of teaching the bible faithfully.</p> 
                </div>
              </section>
              <section className='responsiveFlex invert' id='beliefs'>
                <div className='left textSide'>
                  <h3>Our Beliefs</h3>
                  <p>We believe in a triune God: God the Father, Jesus the Son, and The Holy Spirit. (“The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.” 2 Corinthians 13:14)</p>
                  <p>We believe we are saved by grace alone through faith alone in Christ alone. (“It is by grace you have been saved, through faith - and this is not from yourselves, it is the gift of God - not by works, so that no one can boast. For we are God&apos;s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.” Ephesians 2:8-10)</p>
                  <p>We believe the Christian bible is the holy, authoritative, inerrant Word of God. (“All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.” 2 Timothy 3:16-17)</p>
                  <p>Psalm 33:1-3 commands, “Sing joyfully to the Lord, you righteous; it is fitting for the upright to praise him. Praise the Lord with the harp; make music to him on the ten-stringed lyre. Sing to him a new song; play skillfully, and shout for joy.” With that in mind we invite everyone to join us in singing hymns to the Lord, accompanied often by our piano. We include worship every time we meet together.</p>
                </div>
                <div className='right'>
                  <div className='section2Img' />
                </div>
              </section>
            </div>
          </MobileCityChurchStyles>
        </>
    )
}