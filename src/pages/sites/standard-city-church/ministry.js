import React from 'react';
import styled from 'styled-components';
import CtaStandardChurch from '../../../components/CtaStandardChurch';

// Images
import biblevector from '../../../assets/images/books-bible-vector.jpg';
import history from '../../../assets/images/christ-jesus-crucified-cross-redemption-redeemed-salvation-saved-death-history-historical.jpg';
import study from '../../../assets/images/church-pews-bible-message-study-sermon.jpg';
import ministry from '../../../assets/images/circle-people-together-hands.jpg';
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
    background-image: url(${ministry});
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
    margin-left: -9rem;
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
    .section2Img {
      width: 100%;
      height: 700px;
      background-image: url(${study});
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
    background-image: url(${ministry});
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
    font-size: 4rem;
    text-transform: uppercase;
    text-shadow: 1px 0 5px var(--white), 0 1px 5px var(--white), -1px 0 5px var(--white), 0 -1px 5px var(--white);
    letter-spacing: 2rem;
  }
  h2 {
    font-size: 1.7rem;
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
    .section2Img {
      width: 100%;
      height: 223vh;
      background-image: url(${study});
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
    background-image: url(${ministry});
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
    margin-left: -9rem;
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
    .section2Img {
      width: 100%;
      height: 100vh;
      background-image: url(${study});
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
    position: absolute;
    h1 {
      margin-left: 0;
      font-size: 4rem;
      letter-spacing: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
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
      background-image: url(${ministry});
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
      margin-left: 1rem;
      font-family: Georgia;
      font-weight: bold;
      color: maroon;
      font-size: 2.5rem;
      text-transform: uppercase;
      text-shadow: 1px 0 5px var(--white), 0 1px 5px var(--white), -1px 0 5px var(--white), 0 -1px 5px var(--white);
      letter-spacing: 1rem;
    }
    h2 {
      max-width: 250px;
      margin: 0 auto;
      font-size: 1.35rem;
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
      h3 {
        padding: 2rem 0 0 2rem;
        font-size: 3rem;
      }
      p {
        padding: 0 2rem;
        font-size: 1.5rem;
      }
    }
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
    .section2Img {
      width: 100%;
      height: 100%;
      background-image: url(${study});
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
                <h1>Ministries</h1>
                <h2>The Bible indicates to followers of Christ that we should be sharing about what God has done and will do. These are our efforts to live up to that call.</h2>
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
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </section>
            <section className='inline' id='study'>
              <div className='left textSide'>
                <h3>Bible Studies</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
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
                <h1>Ministries</h1>
                <h2>The Bible indicates to followers of Christ that we should be sharing about what God has done and will do. These are our efforts to live up to that call.</h2>
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
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </section>
            <section className='responsiveFlex invert center' id='study'>
              <div className='left textSide'>
                <h3>Worship</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
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
                <h1>Ministries</h1>
                <h2>The Bible indicates to followers of Christ that we should be sharing about what God has done and will do. These are our efforts to live up to that call.</h2>
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
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </section>
            <section className='responsiveFlex invert center' id='study'>
              <div className='left textSide'>
                <h3>Worship</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
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
                  <h1>Ministries</h1>
                  <h2>The Bible indicates to followers of Christ that we should be sharing about what God has done and will do. These are our efforts to live up to that call.</h2>
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
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </section>
            <section className='flex invert center' id='study'>
              <div className='left textSide'>
                <h3>Bible Studies</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
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