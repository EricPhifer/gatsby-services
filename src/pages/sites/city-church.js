import React from 'react';
import styled from 'styled-components';
import Cta from '../../components/Cta';
import useForm from '../../utils/useForm';
import useContact from '../../utils/useContact';

// Images
import biblevector from '../../assets/images/books-bible-vector.jpg';
import cross from '../../assets/images/carry-cross-daily-man-burden-field.jpg';
import cathedral from '../../assets/images/church-cathedral-stained-glass-windows-pews.jpg';
import history from '../../assets/images/christ-jesus-crucified-cross-redemption-redeemed-salvation-saved-death-history-historical.jpg';
import study from '../../assets/images/church-pews-bible-message-study-sermon.jpg';
import ministry from '../../assets/images/circle-people-together-hands.jpg';

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
    background-image: url(${cross});
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
      background-image: url(${cathedral});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
    .section3Img {
      width: 100%;
      height: 700px;
      background-image: url(${ministry});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
    .section4Img {
      width: 100%;
      height: 700px;
      background-image: url(${study});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
  }
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
      width: 50%;
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
    align-items: center;
    justify-content: center;
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
      height: 500px;
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
    background-image: url(${cross});
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
      background-image: url(${cathedral});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
      @media only screen and (max-width: 900px) {
        height: 500px;
      }
    }
    .section3Img {
      width: 100%;
      height: 223vh;
      background-image: url(${ministry});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
      @media only screen and (max-width: 900px) {
        height: 500px;
      }
    }
    .section4Img {
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
      width: 50%;
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
    align-items: center;
    justify-content: center;
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
      height: 500px;
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
    background-image: url(${cross});
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
    }
    .section2Img {
      width: 100%;
      height: 100vh;
      background-image: url(${cathedral});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
      @media only screen and (max-width: 900px) {
        height: 500px;
      }
    }
    .section3Img {
      width: 100%;
      height: 100vh;
      background-image: url(${ministry});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
      @media only screen and (max-width: 900px) {
        height: 500px;
      }
    }
    .section4Img {
      width: 100%;
      height: 100vh;
      background-image: url(${study});
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
      width: 50%;
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
    align-items: center;
    justify-content: center;
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
      height: 500px;
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
      background-image: url(${cross});
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
      .section2Img {
        width: 100%;
        height: 100%;
        background-image: url(${cathedral});
        background-size: cover;
        background-repeat: norepeat;
        background-position: center center;
        @media only screen and (max-width: 900px) {
          height: 500px;
        }
      }
      .section3Img {
        width: 100%;
        height: 100%;
        background-image: url(${ministry});
        background-size: cover;
        background-repeat: norepeat;
        background-position: center center;
        @media only screen and (max-width: 900px) {
          height: 500px;
        }
      }
      .section4Img {
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
        background-color: var(--red);
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
  const { values, updateValue } = useForm({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });
  const { contact, error, loading, errMessage, submitContact } = useContact({
    values,
  });
  console.log(contact, error, loading, submitContact);
  if (errMessage) {
    return <p>{errMessage}</p>;
  }
    return (
      <>
        <CityChurchStyles>
          <Cta />
          <Navigation>
            <div className="full navBG">
              <div className="center">
                <nav>
                  <ul className='inline center'>
                      <a href='https://services.ericphifer.com/sites/city-church#history'>
                        <li>History</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#worship'>
                        <li>Worship</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#ministry'>
                        <li>Our Ministries</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#study'>
                        <li>Bible Studies</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#contactform'>
                        <li>Contact Us</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#location'>
                        <li>Location</li>
                      </a>
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
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                  <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </div>
              </section>
              <section className='inline' id='worship'>
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
              <section className='inline' id='ministry'>
              <div className='left'>
                  <div className='section3Img' />
                </div>
                <div className='right textSide'>
                  <h3>Our Ministries</h3>
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
                  <div className='section4Img' />
                </div>
              </section>
              <div className='formContainer' id='contactform'>
                <form 
                  className='flex'   
                  method="post"
                  netlify-honeypot="bot-field"
                  data-netlify="true"
                  name="church-contact"
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                  <legend>
                    Have Questions? Need help? Let us know.
                  </legend>
                  <label htmlFor='firstname' className='firstNameLabel hidden'>
                    First Name
                  </label>
                  <fieldset className='inline'>
                    <input 
                      type="text"
                      name="firstname"
                      id="firstname"
                      value={values.firstname}
                      onChange={updateValue}
                      className='required'
                      placeholder='First Name'
                    />
                    <label htmlFor='lastname' className='lastNameLabel hidden'>
                    Last Name
                  </label>
                    <input 
                      type="text"
                      name="lastname"
                      id="lastname"
                      value={values.lastname}
                      onChange={updateValue}
                      className='required'
                      placeholder='Last Name'
                    />
                  </fieldset>
                  <fieldset className='inline'>
                    <label htmlFor='email' className='emailLabel hidden'>
                      Email Address
                    </label>
                    <input 
                      type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={updateValue}
                      className='required'
                      placeholder='Email Address'
                    />
                    <label htmlFor='phone' className='phoneLabel hidden'>
                      Phone Number
                    </label>
                    <input 
                      type="phone"
                      name="phone"
                      id="phone"
                      value={values.phone}
                      onChange={updateValue}
                      className='required'
                      placeholder='Phone Number'
                    />
                  </fieldset>
                  <textarea 
                    name="message"
                    id="message"
                    value={values.message}
                    onChange={updateValue}rows='5' placeholder='How can we help?' 
                  />
                  <button 
                    type='submit' 
                    value='Submit'
                  >
                      Submit
                  </button>
                </form>
              </div>
              <div className='mapContainer' id='location'>
                <h3 className='upgraded cakes'>You can find us at:</h3>
                <div className='address cakes'>
                  <h3>123 Example St</h3>
                  <h3>Goliath Peak, CO 80452</h3>
                </div>
                <div className='map'>
                <iframe src="https://api.jawg.io/maps/6114b2aa-b264-4676-8613-a223490f1ca7/34d24c11-da73-4602-9cae-dc3eaa69b1e9.html?access-token=qbjWqcSa2nN3qdaLVnyV7hQFyFKIF8CpxjM8y7dJFr7lzLmiKVA1EEZK9xmfDrUy" title="Example Map" width="100%" height="100%"></iframe>
                </div>
              </div>
            </div>
        </CityChurchStyles>
        <LandscapeCityChurchStyles>
          <Cta />
          <Navigation>
            <div className="full navBG">
              <div className="center">
                <nav>
                  <ul className='inline center'>
                      <a href={history}>
                        <li>History</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#worship'>
                        <li>Worship</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#ministry'>
                        <li>Our Ministries</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#study'>
                        <li>Bible Studies</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#contactform'>
                        <li>Contact Us</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#location'>
                        <li>Location</li>
                      </a>
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
                          <a href={history}>
                            <li>History</li>
                          </a>
                          <a href='https://services.ericphifer.com/sites/city-church#worship'>
                            <li>Worship</li>
                          </a>
                          <a href='https://services.ericphifer.com/sites/city-church#ministry'>
                            <li>Our Ministries</li>
                          </a>
                          <a href='https://services.ericphifer.com/sites/city-church#study'>
                            <li>Bible Studies</li>
                          </a>
                          <a href='https://services.ericphifer.com/sites/city-church#contactform'>
                            <li>Contact Us</li>
                          </a>
                          <a href='https://services.ericphifer.com/sites/city-church#location'>
                            <li>Location</li>
                          </a>
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
              <div className='overlay' />
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
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </section>
            <section className='responsiveFlex invert center' id='worship'>
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
            <section className='responsiveFlex center' id='ministry'>
            <div className='left'>
                <div className='section3Img' />
              </div>
              <div className='right textSide'>
                <h3>Our Ministries</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </section>
            <section className='responsiveFlex invert center' id='study'>
              <div className='left textSide'>
                <h3>Bible Studies</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
              <div className='right'>
                <div className='section4Img' />
              </div>
            </section>
            <div className='formContainer' id='contactform'>
              <form 
                className='flex'   
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="church-contact"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <legend>
                  Have Questions? Need help? Let us know.
                </legend>
                <label htmlFor='firstname' className='firstNameLabel hidden'>
                  First Name
                </label>
                <fieldset className='inline'>
                  <input 
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={values.firstname}
                    onChange={updateValue}
                    className='required'
                    placeholder='First Name'
                  />
                  <label htmlFor='lastname' className='lastNameLabel hidden'>
                  Last Name
                </label>
                  <input 
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={values.lastname}
                    onChange={updateValue}
                    className='required'
                    placeholder='Last Name'
                  />
                </fieldset>
                <fieldset className='inline'>
                  <label htmlFor='email' className='emailLabel hidden'>
                    Email Address
                  </label>
                  <input 
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={updateValue}
                    className='required'
                    placeholder='Email Address'
                  />
                  <label htmlFor='phone' className='phoneLabel hidden'>
                    Phone Number
                  </label>
                  <input 
                    type="phone"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onChange={updateValue}
                    className='required'
                    placeholder='Phone Number'
                  />
                </fieldset>
                <textarea 
                  name="message"
                  id="message"
                  value={values.message}
                  onChange={updateValue}rows='5' placeholder='How can we help?' 
                />
                <button 
                  type='submit' 
                  value='Submit'
                >
                    Submit
                </button>
              </form>
            </div>
            <div className='mapContainer' id='location'>
              <h3 className='upgraded cakes'>You can find us at:</h3>
              <div className='address cakes'>
                <h3>123 Example St</h3>
                <h3>Goliath Peak, CO 80452</h3>
              </div>
              <div className='map'>
              <iframe src="https://api.jawg.io/maps/6114b2aa-b264-4676-8613-a223490f1ca7/34d24c11-da73-4602-9cae-dc3eaa69b1e9.html?access-token=qbjWqcSa2nN3qdaLVnyV7hQFyFKIF8CpxjM8y7dJFr7lzLmiKVA1EEZK9xmfDrUy" title="Example Map" width="100%" height="100%"></iframe>
              </div>
            </div>
          </div>
        </LandscapeCityChurchStyles>
        <TabletCityChurchStyles>
          <Cta />
          <Navigation>
            <div className="full navBG">
              <div className="center">
                <nav>
                  <ul className='inline center'>
                      <a href={history}>
                        <li>History</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#worship'>
                        <li>Worship</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#ministry'>
                        <li>Our Ministries</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#study'>
                        <li>Bible Studies</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#contactform'>
                        <li>Contact Us</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#location'>
                        <li>Location</li>
                      </a>
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
                          <a href={history}>
                            <li>History</li>
                          </a>
                          <a href='https://services.ericphifer.com/sites/city-church#worship'>
                            <li>Worship</li>
                          </a>
                          <a href='https://services.ericphifer.com/sites/city-church#ministry'>
                            <li>Our Ministries</li>
                          </a>
                          <a href='https://services.ericphifer.com/sites/city-church#study'>
                            <li>Bible Studies</li>
                          </a>
                          <a href='https://services.ericphifer.com/sites/city-church#contactform'>
                            <li>Contact Us</li>
                          </a>
                          <a href='https://services.ericphifer.com/sites/city-church#location'>
                            <li>Location</li>
                          </a>
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
              <div className='overlay' />
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
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </section>
            <section className='responsiveFlex invert center' id='worship'>
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
            <section className='responsiveFlex center' id='ministry'>
            <div className='left'>
                <div className='section3Img' />
              </div>
              <div className='right textSide'>
                <h3>Our Ministries</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
            </section>
            <section className='responsiveFlex invert center' id='study'>
              <div className='left textSide'>
                <h3>Bible Studies</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
              </div>
              <div className='right'>
                <div className='section4Img' />
              </div>
            </section>
            <div className='formContainer' id='contactform'>
              <form 
                className='flex'   
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
                name="church-contact"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <legend>
                  Have Questions? Need help? Let us know.
                </legend>
                <label htmlFor='firstname' className='firstNameLabel hidden'>
                  First Name
                </label>
                <fieldset className='inline'>
                  <input 
                    type="text"
                    name="firstname"
                    id="firstname"
                    value={values.firstname}
                    onChange={updateValue}
                    className='required'
                    placeholder='First Name'
                  />
                  <label htmlFor='lastname' className='lastNameLabel hidden'>
                  Last Name
                </label>
                  <input 
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={values.lastname}
                    onChange={updateValue}
                    className='required'
                    placeholder='Last Name'
                  />
                </fieldset>
                <fieldset className='inline'>
                  <label htmlFor='email' className='emailLabel hidden'>
                    Email Address
                  </label>
                  <input 
                    type="email"
                    name="email"
                    id="email"
                    value={values.email}
                    onChange={updateValue}
                    className='required'
                    placeholder='Email Address'
                  />
                  <label htmlFor='phone' className='phoneLabel hidden'>
                    Phone Number
                  </label>
                  <input 
                    type="phone"
                    name="phone"
                    id="phone"
                    value={values.phone}
                    onChange={updateValue}
                    className='required'
                    placeholder='Phone Number'
                  />
                </fieldset>
                <textarea 
                  name="message"
                  id="message"
                  value={values.message}
                  onChange={updateValue}rows='5' placeholder='How can we help?' 
                />
                <button 
                  type='submit' 
                  value='Submit'
                >
                    Submit
                </button>
              </form>
            </div>
            <div className='mapContainer' id='location'>
              <h3 className='upgraded cakes'>You can find us at:</h3>
              <div className='address cakes'>
                <h3>123 Example St</h3>
                <h3>Goliath Peak, CO 80452</h3>
              </div>
              <div className='map'>
              <iframe src="https://api.jawg.io/maps/6114b2aa-b264-4676-8613-a223490f1ca7/34d24c11-da73-4602-9cae-dc3eaa69b1e9.html?access-token=qbjWqcSa2nN3qdaLVnyV7hQFyFKIF8CpxjM8y7dJFr7lzLmiKVA1EEZK9xmfDrUy" title="Example Map" width="100%" height="100%"></iframe>
              </div>
            </div>
          </div>
        </TabletCityChurchStyles>
        <MobileCityChurchStyles>
            <Cta />
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
                              <a href={history}>
                                <li>History</li>
                              </a>
                              <a href='https://services.ericphifer.com/sites/city-church#worship'>
                                <li>Worship</li>
                              </a>
                              <a href='https://services.ericphifer.com/sites/city-church#ministry'>
                                <li>Our Ministries</li>
                              </a>
                              <a href='https://services.ericphifer.com/sites/city-church#study'>
                                <li>Bible Studies</li>
                              </a>
                              <a href='https://services.ericphifer.com/sites/city-church#contactform'>
                                <li>Contact Us</li>
                              </a>
                              <a href='https://services.ericphifer.com/sites/city-church#location'>
                                <li>Location</li>
                              </a>
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
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                  </div>
                </section>
                <section className='flex invert center' id='worship'>
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
                <section className='flex center' id='ministry'>
                <div className='left'>
                    <div className='section3Img' />
                  </div>
                  <div className='right textSide'>
                    <h3>Our Ministries</h3>
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
                    <div className='section4Img' />
                  </div>
                </section>
                <div className='formContainer' id='contactform'>
                  <form 
                    className='flex'   
                    method="post"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                    name="church-contact"
                  >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />
                    <legend>
                      Have Questions? Need help? Let us know.
                    </legend>
                    <label htmlFor='firstname' className='firstNameLabel hidden'>
                      First Name
                    </label>
                    <fieldset className='flex'>
                      <input 
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={values.firstname}
                        onChange={updateValue}
                        className='required'
                        placeholder='First Name'
                      />
                      <label htmlFor='lastname' className='lastNameLabel hidden'>
                      Last Name
                      </label>
                      <input 
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={values.lastname}
                        onChange={updateValue}
                        className='required'
                        placeholder='Last Name'
                      />
                    </fieldset>
                    <fieldset className='flex'>
                      <label htmlFor='email' className='emailLabel hidden'>
                        Email Address
                      </label>
                      <input 
                        type="email"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={updateValue}
                        className='required'
                        placeholder='Email Address'
                      />
                      <label htmlFor='phone' className='phoneLabel hidden'>
                        Phone Number
                      </label>
                      <input 
                        type="phone"
                        name="phone"
                        id="phone"
                        value={values.phone}
                        onChange={updateValue}
                        className='required'
                        placeholder='Phone Number'
                      />
                    </fieldset>
                    <textarea 
                      name="message"
                      id="message"
                      value={values.message}
                      onChange={updateValue}rows='5' placeholder='How can we help?' 
                    />
                    <button 
                      type='submit' 
                      value='Submit'
                    >
                        Submit
                    </button>
                  </form>
                </div>
              <div className='mapContainer' id='location'>
                <h3 className='upgraded cakes'>You can find us at:</h3>
                <div className='address cakes'>
                  <h3>123 Example St</h3>
                  <h3>Goliath Peak, CO 80452</h3>
                </div>
                <div className='map'>
                  <iframe src="https://api.jawg.io/maps/6114b2aa-b264-4676-8613-a223490f1ca7/34d24c11-da73-4602-9cae-dc3eaa69b1e9.html?access-token=qbjWqcSa2nN3qdaLVnyV7hQFyFKIF8CpxjM8y7dJFr7lzLmiKVA1EEZK9xmfDrUy" title="Example Map" width="100%" height="100%"></iframe>
                </div>
              </div>
            </div>
        </MobileCityChurchStyles>
        </>
    )
}