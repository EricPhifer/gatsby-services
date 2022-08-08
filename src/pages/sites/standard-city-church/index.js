import React from 'react';
import styled from 'styled-components';
import CtaStandardChurch from '../../../components/CtaStandardChurch';

// Images
import biblevector from '../../../assets/images/books-bible-vector.jpg';
import cathedral from '../../../assets/images/church-cathedral-stained-glass-windows-pews.jpg';
import history from '../../../assets/images/christ-jesus-crucified-cross-redemption-redeemed-salvation-saved-death-history-historical.jpg';
import { Link } from 'gatsby';

const StandardCityChurchStyles = styled.div`
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
    background-image: url(${cathedral});
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
    .buttonAlign {
      width: 100%;
      display: flex;
      justify-content: end;
      .buttonesque {
        margin-right: 2rem;
        margin-bottom: 2rem;
        padding: 1rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: purple;
        color: var(--white);
        border-radius: 20px;
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
    .section1Img {
      width: 100%;
      height: 700px;
      background-image: url(${history});
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

const LandscapeStandardCityChurchStyles = styled.div`
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
    background-image: url(${cathedral});
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
    }
    .buttonAlign {
      width: 100%;
      display: flex;
      justify-content: end;
      .buttonesque {
        margin-right: 2rem;
        margin-bottom: 2rem;
        padding: 1rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: purple;
        color: var(--white);
        border-radius: 20px;
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
      background-image: url(${history});
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
    position: absolute;
  }
`;
const TabletStandardCityChurchStyles = styled.div`
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
    background-image: url(${cathedral});
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
    .buttonAlign {
      width: 100%;
      display: flex;
      justify-content: end;
      .buttonesque {
        margin-right: 2rem;
        margin-bottom: 2rem;
        padding: 1rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: purple;
        color: var(--white);
        border-radius: 20px;
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
      background-image: url(${history});
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
  }
  .hidden {
    display: none;
  }
  @media only screen and (min-width: 900px) and (max-height: 485px) {
    width: calc(100vw - 50px);
    margin-left: 50px;
  }
  @media only screen and (max-width: 900px) {
    width: calc(100vw - 50px);
    margin-left: 50px;
    position: absolute;
  }
`;

const MobileStandardCityChurchStyles = styled.div`
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
      background-image: url(${cathedral});
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
      font-size: 1.75rem;
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
        font-size: 1.5rem;
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
      .buttonAlign {
        width: 100%;
        display: flex;
        justify-content: end;
        .buttonesque {
          margin-right: 2rem;
          margin-bottom: 2rem;
          padding: 1rem 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: purple;
          color: var(--white);
          border-radius: 20px;
        }
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
        background-image: url(${history});
        background-size: cover;
        background-repeat: norepeat;
        background-position: center center;
        @media only screen and (max-width: 900px) {
          height: 500px;
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

export default function StandardCityChurch() {
  const [checked, setChecked] = React.useState(false || '');
    return (
      <>
        <StandardCityChurchStyles>
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
                  <h1>City Church</h1>
                  <h2>Come join us!</h2>
                  <h2>Sundays from 9-10 and 11-12</h2>
                </div>
              </div>
              <div className='content'>
                  <p>Jesus tells his followers in Luke 9 to "take up your cross daily" and in Matthew 11 He says "my yoke is easy and my burden is light".</p>
                  <p>If you believe in Jesus alone for your salvation then his followers have a responsibility to follow what He says and as we follow we find that Jesus carries those responsibilities along side us.</p>
              </div>
              <section className='inline' id='history'>
                <div className='left'>
                  <div className='section1Img' />
                </div>
                <div className='right textSide'>
                  <h3>History</h3>
                  <p>One of the amazing things about Christianity is that it's falsifiable. Wait, what does that mean? That means that it can be evidentially determined to be true or false.</p> 
                  <p>How? Since Christianity follows the life and teaching of Jesus, it hinges upon an actual historical figure who lived, died and rose again. If any of these facts can be determined evidentially as false, then Christianity is false.</p> 
                  <p>As a believer, this may be a shocking realization and even sound heretical, but Paul says the very same in 1 Corinthians 15:14 - "if Christ has not been raised, our preaching is useless and so is our faith".</p>
                  <div className='buttonAlign'>
                    <a href='https://ericphifer.com/sites/standard-city-church/ministry#history' className='buttonesque'>Learn More</a> 
                  </div>
                </div>
              </section>
            </div>
        </StandardCityChurchStyles>
        <LandscapeStandardCityChurchStyles>
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
                <h1>City Church</h1>
                <h2 className='increase'>Come join us!</h2>
                <h2>Sundays 9-10am &amp; 11am-12pm</h2>
              </div>
            </div>
            <div className='content'>
                <p>Jesus tells his followers in Luke 9 to "take up your cross daily" and in Matthew 11 He says "my yoke is easy and my burden is light".</p>
                <p>If you believe in Jesus alone for your salvation then his followers have a responsibility to follow what He says and as we follow we find that Jesus carries those responsibilities along side us.</p>
            </div>
            <section className='responsiveFlex center' id='history'>
              <div className='left'>
                <div className='section1Img' />
              </div>
              <div className='right textSide'>
                  <h3>History</h3>
                  <p>One of the amazing things about Christianity is that it's falsifiable. Wait, what does that mean? That means that it can be evidentially determined to be true or false.</p> 
                  <p>How? Since Christianity follows the life and teaching of Jesus, it hinges upon an actual historical figure who lived, died and rose again. If any of these facts can be determined evidentially as false, then Christianity is false.</p> 
                  <p>As a believer, this may be a shocking realization and even sound heretical, but Paul says the very same in 1 Corinthians 15:14 - "if Christ has not been raised, our preaching is useless and so is our faith".</p>
                  <div className='buttonAlign'>
                    <a href='https://ericphifer.com/sites/standard-city-church/ministry#history' className='buttonesque'>Learn More</a> 
                  </div>
                </div>
            </section>
          </div>
        </LandscapeStandardCityChurchStyles>
        <TabletStandardCityChurchStyles>
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
                <h1>City Church</h1>
                <h2 className='increase'>Come join us!</h2>
                <h2>Sundays 9-10am &amp; 11am-12pm</h2>
              </div>
            </div>
            <div className='content'>
                <p>Jesus tells his followers in Luke 9 to "take up your cross daily" and in Matthew 11 He says "my yoke is easy and my burden is light".</p>
                <p>If you believe in Jesus alone for your salvation then his followers have a responsibility to follow what He says and as we follow we find that Jesus carries those responsibilities along side us.</p>
            </div>
            <section className='responsiveFlex center' id='history'>
              <div className='left'>
                <div className='section1Img' />
              </div>
              <div className='right textSide'>
                  <h3>History</h3>
                  <p>One of the amazing things about Christianity is that it's falsifiable. Wait, what does that mean? That means that it can be evidentially determined to be true or false.</p> 
                  <p>How? Since Christianity follows the life and teaching of Jesus, it hinges upon an actual historical figure who lived, died and rose again. If any of these facts can be determined evidentially as false, then Christianity is false.</p> 
                  <p>As a believer, this may be a shocking realization and even sound heretical, but Paul says the very same in 1 Corinthians 15:14 - "if Christ has not been raised, our preaching is useless and so is our faith".</p>
                  <div className='buttonAlign'>
                    <a href='https://ericphifer.com/sites/standard-city-church/ministry#history' className='buttonesque'>Learn More</a> 
                  </div>
                </div>
            </section>
          </div>
        </TabletStandardCityChurchStyles>
        <MobileStandardCityChurchStyles>
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
                    <h1>City Church</h1>
                    <h2 className='increase'>Come join us!</h2>
                    <h2>Sundays from 9-10am and 11am-12pm</h2>
                  </div>
                </div>
                <div className='content'>
                  <p>Jesus tells his followers in Luke 9 to "take up your cross daily" and in Matthew 11 He says "my yoke is easy and my burden is light".</p>
                  <p>If you believe in Jesus alone for your salvation then his followers have a responsibility to follow what He says and as we follow we find that Jesus carries those responsibilities along side us.</p>
              </div>
                <section className='flex center' id='history'>
                  <div className='left'>
                    <div className='section1Img' />
                  </div>
                  <div className='right textSide'>
                    <h3>History</h3>
                    <p>One of the amazing things about Christianity is that it's falsifiable. Wait, what does that mean? That means that it can be evidentially determined to be true or false.</p> 
                    <p>How? Since Christianity follows the life and teaching of Jesus, it hinges upon an actual historical figure who lived, died and rose again. If any of these facts can be determined evidentially as false, then Christianity is false.</p> 
                    <p>As a believer, this may be a shocking realization and even sound heretical, but Paul says the very same in 1 Corinthians 15:14 - "if Christ has not been raised, our preaching is useless and so is our faith".</p>
                    <div className='buttonAlign'>
                      <a href='https://ericphifer.com/sites/standard-city-church/ministry#history' className='buttonesque'>Learn More</a> 
                    </div>
                  </div>
                </section>
             </div>
        </MobileStandardCityChurchStyles>
        </>
    )
}