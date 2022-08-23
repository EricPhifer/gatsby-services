import React from 'react';
import styled from 'styled-components';
import CtaChurch from '../../components/CtaChurch';
import useForm from '../../utils/useForm';
import useContact from '../../utils/useContact';

// Images
import biblevector from '../../assets/images/city-church/books-bible-vector.jpg';
import cross from '../../assets/images/city-church/carry-cross-daily-man-burden-field.jpg';
import cathedral from '../../assets/images/city-church/church-cathedral-stained-glass-windows-pews.jpg';
import history from '../../assets/images/city-church/christ-jesus-crucified-cross-redemption-redeemed-salvation-saved-death-history-historical.jpg';
import study from '../../assets/images/city-church/church-pews-bible-message-study-sermon.jpg';
import ministry from '../../assets/images/city-church/circle-people-together-hands.jpg';

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
      height: 100rem;
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
      height: 100rem;
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
      height: 100rem;
      background-image: url(${cathedral});
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
    .section3Img {
      width: 100%;
      height: 100rem;
      background-image: url(${ministry});
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
    .section4Img {
      width: 100%;
      height: 100rem;
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
          <CtaChurch />
          <Navigation>
            <div className="full navBG">
              <div className="center">
                <nav>
                  <ul className='inline center'>
                      <a href='https://services.ericphifer.com/sites/city-church#history'>
                        <li>History</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#beliefs'>
                        <li>Beliefs</li>
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
                  <h2>Sundays at 10am</h2>
                </div>
              </div>
              <div className='content'>
                <p>No matter what you believe existence leaves us with questions. Chief among them, what happens when you die?</p>
                <p>Christianity is evidentially and historically rooted in a person: Jesus of Nazareth. Jesus was a real man, who was also God. His purpose was to resolve a problem that man created. Separation from God the Father.</p>
                <p>Man was committed to defy moral and natural order - committed to sin.</p>
                <p>Jesus was born among us, human, in order to show us what is right, to take the debt we owed - death - once for all and proved His deity by rising again after three days.</p>
                <p>Now, through Jesus, all can come before the Creator of existence and speak plainly with a God who sees and knows us.</p>

                <p>Romans 10:9-10 says, “If you declare with your mouth, “Jesus is Lord,” and believe in your heart that God raised him from the dead, you will be saved. For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved.”</p>

                <p>Whether you are a “seasoned” Christian or unsure of what you believe, we hope you will join us this Sunday! We want to walk alongside you wherever you are on your faith journey.</p>

                <p>Sunday School 9:30a</p>
                <p>Sunday Worship 10:30a, 5:30p</p>
                <p>Wednesday Prayer 6:00p</p>
              </div>
              <section className='inline' id='history'>
                <div className='left'>
                  <div className='section1Img' />
                </div>
                <div className='right textSide'>
                  <h3>History</h3>
                  <p>Our founding pastor, Alan Boyd, began serving the community of Shelby, IA in 1985 by holding weekly prayer meetings in his home on Sunday evenings. By 1987 the group had doubled in size with around 30 people assembling for bible study, prayer and worship. Throughout the week the members of Home Church served throughout the community by offering yard work free of charge to their elderly neighbors and hosting monthly dinners to the homeless.</p> 
                  <p>Late in 1987 Home Church pooled their resources and purchased the building, formerly Old Baptist Church, at 54285 Martin Luther King Blvd. Home Church began holding services there in January 1988 with Pastor Boyd at the helm. In 2004 Pastor Boyd and his lovely wife Rae stepped back from the role of pastor and into an eldership role, making way for our current pastor, Shane Spencer.</p> 
                  <p>Home Church cares about our community and continues the outreach programs started in 1987, as well as several others. Our services remain what they have always been; simple and straightforward. We preach the word of God from the word of God, we sing hymns with a piano accompaniment, we pray together. We hope anyone who joins us for a service will feel like they are coming home as they draw nearer to Christ.</p>
                </div>
              </section>
              <section className='inline' id='beliefs'>
                <div className='left textSide'>
                  <h3>Beliefs</h3>
                  <p>{`We believe in a triune God: God the Father, Jesus the Son, and The Holy Spirit. (“The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.” 2 Corinthians 13:14)`}</p> 
                  <p>{`We believe we are saved by grace alone through faith alone in Christ alone. (“It is by grace you have been saved, through faith - and this is not from yourselves, it is the gift of God - not by works, so that no one can boast. For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.” Ephesians 2:8-10)`}</p> 
                  <p>{`We believe the Christian bible is the holy, authoritative, inerrant Word of God. (“All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.” 2 Timothy 3:16-17)`}</p>
                  <p>{`Psalm 33:1-3 commands, “Sing joyfully to the Lord, you righteous; it is fitting for the upright to praise him. Praise the Lord with the harp; make music to him on the ten-stringed lyre. Sing to him a new song; play skillfully, and shout for joy.” With that in mind we invite everyone to join us in singing hymns to the Lord, accompanied often by our piano. We include worship every time we meet together.`}</p>
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
                  <p>Our ministries are a way for us to serve and reach our community, as well as to strengthen and encourage our brothers and sisters in Christ. Each one is open and available to anybody in need.</p>

                  <p>Please email Elder Alan Boyd at homechurchoutreach@snailmail.com for further information on any of the following ministries, or you can visit with him any given Sunday morning. He often wears a sweater vest, regardless of the time of year.</p>
                  <ul>
                    <li>Weeding for The Word - assisting the elderly with routine yard work.</li>
                    <li>Feast for Friends - hosting monthly dinner parties for the homeless.</li>
                    <li>Taxes to Tithes - periodic financial workshops and how tos from a biblical viewpoint.</li>
                    <li>Messages for Missionaries - correspondence with the missionaries Home Church supports.</li>
                    <li>From Atheist to Apologists - discussion and training in a defense of the faith.</li> 
                    <li>Vacation Bible School - annual week-long event for children K-7th grade.</li>
                  </ul>
                </div>
              </section>
              <section className='inline' id='study'>
                <div className='left textSide'>
                  <h3>Bible Studies</h3>
                  <p>{`Our studies run throughout the year as we make our way through the bible with our fellow brothers or sisters in Christ. Please contact Elder Evan Gavries at homechurchstudies@snailmail.com with any questions.`}</p>
                  <ul>
                    <li>{`Men’s Bible Study, Thursdays 6a-7a (Leading in a Lost Land, a study of the book of Joshua)`}</li>
                    <li>{`Women’s Bible Study, Tuesdays 8a-9a (Godly Womanhood, a study of the book of Galatians)`}</li>
                    <li>{`Truth Trackers, Wednesdays 6p-8p (children K-12, scripture memorization and fellowship)`}</li>
                  </ul>
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
          <CtaChurch />
          <Navigation>
            <div className="full navBG">
              <div className="center">
                <nav>
                  <ul className='inline center'>
                      <a href='https://services.ericphifer.com/sites/city-church#history'>
                        <li>History</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#beliefs'>
                        <li>Beliefs</li>
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
                          <a href='https://services.ericphifer.com/sites/city-church#history'>
                            <li>History</li>
                          </a>
                          <a href='https://services.ericphifer.com/sites/city-church#beliefs'>
                            <li>Beliefs</li>
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
                <h2>Sundays at 10am</h2>
              </div>
            </div>
            <div className='content'>
              <p>No matter what you believe existence leaves us with questions. Chief among them, what happens when you die?</p>
              <p>Christianity is evidentially and historically rooted in a person: Jesus of Nazareth. Jesus was a real man, who was also God. His purpose was to resolve a problem that man created. Separation from God the Father.</p>
              <p>Man was committed to defy moral and natural order - committed to sin.</p>
              <p>Jesus was born among us, human, in order to show us what is right, to take the debt we owed - death - once for all and proved His deity by rising again after three days.</p>
              <p>Now, through Jesus, all can come before the Creator of existence and speak plainly with a God who sees and knows us.</p>

              <p>Romans 10:9-10 says, “If you declare with your mouth, “Jesus is Lord,” and believe in your heart that God raised him from the dead, you will be saved. For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved.”</p>

              <p>Whether you are a “seasoned” Christian or unsure of what you believe, we hope you will join us this Sunday! We want to walk alongside you wherever you are on your faith journey.</p>

              <p>Sunday School 9:30a</p>
              <p>Sunday Worship 10:30a, 5:30p</p>
              <p>Wednesday Prayer 6:00p</p>
            </div>
            <section className='responsiveFlex center' id='history'>
              <div className='left'>
                <div className='section1Img' />
              </div>
              <div className='right textSide'>
                <h3>History</h3>
                  <p>Our founding pastor, Alan Boyd, began serving the community of Shelby, IA in 1985 by holding weekly prayer meetings in his home on Sunday evenings. By 1987 the group had doubled in size with around 30 people assembling for bible study, prayer and worship. Throughout the week the members of Home Church served throughout the community by offering yard work free of charge to their elderly neighbors and hosting monthly dinners to the homeless.</p> 
                  <p>Late in 1987 Home Church pooled their resources and purchased the building, formerly Old Baptist Church, at 54285 Martin Luther King Blvd. Home Church began holding services there in January 1988 with Pastor Boyd at the helm. In 2004 Pastor Boyd and his lovely wife Rae stepped back from the role of pastor and into an eldership role, making way for our current pastor, Shane Spencer.</p> 
                  <p>Home Church cares about our community and continues the outreach programs started in 1987, as well as several others. Our services remain what they have always been; simple and straightforward. We preach the word of God from the word of God, we sing hymns with a piano accompaniment, we pray together. We hope anyone who joins us for a service will feel like they are coming home as they draw nearer to Christ.</p>
                </div>
            </section>
            <section className='responsiveFlex invert center' id='beliefs'>
              <div className='left textSide'>
              <h3>Beliefs</h3>
                  <p>{`We believe in a triune God: God the Father, Jesus the Son, and The Holy Spirit. (“The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.” 2 Corinthians 13:14)`}</p> 
                  <p>{`We believe we are saved by grace alone through faith alone in Christ alone. (“It is by grace you have been saved, through faith - and this is not from yourselves, it is the gift of God - not by works, so that no one can boast. For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.” Ephesians 2:8-10)`}</p> 
                  <p>{`We believe the Christian bible is the holy, authoritative, inerrant Word of God. (“All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.” 2 Timothy 3:16-17)`}</p>
                  <p>{`Psalm 33:1-3 commands, “Sing joyfully to the Lord, you righteous; it is fitting for the upright to praise him. Praise the Lord with the harp; make music to him on the ten-stringed lyre. Sing to him a new song; play skillfully, and shout for joy.” With that in mind we invite everyone to join us in singing hymns to the Lord, accompanied often by our piano. We include worship every time we meet together.`}</p>
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
                  <p>Our ministries are a way for us to serve and reach our community, as well as to strengthen and encourage our brothers and sisters in Christ. Each one is open and available to anybody in need.</p>

                  <p>Please email Elder Alan Boyd at homechurchoutreach@snailmail.com for further information on any of the following ministries, or you can visit with him any given Sunday morning. He often wears a sweater vest, regardless of the time of year.</p>
                  <ul>
                    <li>Weeding for The Word - assisting the elderly with routine yard work.</li>
                    <li>Feast for Friends - hosting monthly dinner parties for the homeless.</li>
                    <li>Taxes to Tithes - periodic financial workshops and how tos from a biblical viewpoint.</li>
                    <li>Messages for Missionaries - correspondence with the missionaries Home Church supports.</li>
                    <li>From Atheist to Apologists - discussion and training in a defense of the faith.</li> 
                    <li>Vacation Bible School - annual week-long event for children K-7th grade.</li>
                  </ul>
              </div>
            </section>
            <section className='responsiveFlex invert center' id='study'>
              <div className='left textSide'>
                <h3>Bible Studies</h3>
                <p>{`Our studies run throughout the year as we make our way through the bible with our fellow brothers or sisters in Christ. Please contact Elder Evan Gavries at homechurchstudies@snailmail.com with any questions.`}</p>
                  <ul>
                    <li>{`Men’s Bible Study, Thursdays 6a-7a (Leading in a Lost Land, a study of the book of Joshua)`}</li>
                    <li>{`Women’s Bible Study, Tuesdays 8a-9a (Godly Womanhood, a study of the book of Galatians)`}</li>
                    <li>{`Truth Trackers, Wednesdays 6p-8p (children K-12, scripture memorization and fellowship)`}</li>
                  </ul>
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
          <CtaChurch />
          <Navigation>
            <div className="full navBG">
              <div className="center">
                <nav>
                  <ul className='inline center'>
                      <a href='https://services.ericphifer.com/sites/city-church#history'>
                        <li>History</li>
                      </a>
                      <a href='https://services.ericphifer.com/sites/city-church#beliefs'>
                        <li>Beliefs</li>
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
                          <a href='https://services.ericphifer.com/sites/city-church#history'>
                            <li>History</li>
                          </a>
                          <a href='https://services.ericphifer.com/sites/city-church#beliefs'>
                            <li>Beliefs</li>
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
                <h2>Sundays at 10am</h2>
              </div>
            </div>
            <div className='content'>
              <p>No matter what you believe existence leaves us with questions. Chief among them, what happens when you die?</p>
              <p>Christianity is evidentially and historically rooted in a person: Jesus of Nazareth. Jesus was a real man, who was also God. His purpose was to resolve a problem that man created. Separation from God the Father.</p>
              <p>Man was committed to defy moral and natural order - committed to sin.</p>
              <p>Jesus was born among us, human, in order to show us what is right, to take the debt we owed - death - once for all and proved His deity by rising again after three days.</p>
              <p>Now, through Jesus, all can come before the Creator of existence and speak plainly with a God who sees and knows us.</p>
              <p>Romans 10:9-10 says, “If you declare with your mouth, “Jesus is Lord,” and believe in your heart that God raised him from the dead, you will be saved. For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved.”</p>

              <p>Whether you are a “seasoned” Christian or unsure of what you believe, we hope you will join us this Sunday! We want to walk alongside you wherever you are on your faith journey.</p>

              <p>Sunday School 9:30a</p>
              <p>Sunday Worship 10:30a, 5:30p</p>
              <p>Wednesday Prayer 6:00p</p>
            </div>
            <section className='responsiveFlex center' id='history'>
              <div className='left'>
                <div className='section1Img' />
              </div>
              <div className='right textSide'>
                <h3>History</h3>
                <p>Our founding pastor, Alan Boyd, began serving the community of Shelby, IA in 1985 by holding weekly prayer meetings in his home on Sunday evenings. By 1987 the group had doubled in size with around 30 people assembling for bible study, prayer and worship. Throughout the week the members of Home Church served throughout the community by offering yard work free of charge to their elderly neighbors and hosting monthly dinners to the homeless.</p> 
                  <p>Late in 1987 Home Church pooled their resources and purchased the building, formerly Old Baptist Church, at 54285 Martin Luther King Blvd. Home Church began holding services there in January 1988 with Pastor Boyd at the helm. In 2004 Pastor Boyd and his lovely wife Rae stepped back from the role of pastor and into an eldership role, making way for our current pastor, Shane Spencer.</p> 
                  <p>Home Church cares about our community and continues the outreach programs started in 1987, as well as several others. Our services remain what they have always been; simple and straightforward. We preach the word of God from the word of God, we sing hymns with a piano accompaniment, we pray together. We hope anyone who joins us for a service will feel like they are coming home as they draw nearer to Christ.</p>
              </div>
            </section>
            <section className='responsiveFlex invert center' id='beliefs'>
              <div className='left textSide'>
                <h3>Beliefs</h3>
                <p>{`We believe in a triune God: God the Father, Jesus the Son, and The Holy Spirit. (“The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.” 2 Corinthians 13:14)`}</p> 
                  <p>{`We believe we are saved by grace alone through faith alone in Christ alone. (“It is by grace you have been saved, through faith - and this is not from yourselves, it is the gift of God - not by works, so that no one can boast. For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.” Ephesians 2:8-10)`}</p> 
                  <p>{`We believe the Christian bible is the holy, authoritative, inerrant Word of God. (“All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.” 2 Timothy 3:16-17)`}</p>
                  <p>{`Psalm 33:1-3 commands, “Sing joyfully to the Lord, you righteous; it is fitting for the upright to praise him. Praise the Lord with the harp; make music to him on the ten-stringed lyre. Sing to him a new song; play skillfully, and shout for joy.” With that in mind we invite everyone to join us in singing hymns to the Lord, accompanied often by our piano. We include worship every time we meet together.`}</p>
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
                <p>Our ministries are a way for us to serve and reach our community, as well as to strengthen and encourage our brothers and sisters in Christ. Each one is open and available to anybody in need.</p>

                  <p>Please email Elder Alan Boyd at homechurchoutreach@snailmail.com for further information on any of the following ministries, or you can visit with him any given Sunday morning. He often wears a sweater vest, regardless of the time of year.</p>
                  <ul>
                    <li>Weeding for The Word - assisting the elderly with routine yard work.</li>
                    <li>Feast for Friends - hosting monthly dinner parties for the homeless.</li>
                    <li>Taxes to Tithes - periodic financial workshops and how tos from a biblical viewpoint.</li>
                    <li>Messages for Missionaries - correspondence with the missionaries Home Church supports.</li>
                    <li>From Atheist to Apologists - discussion and training in a defense of the faith.</li> 
                    <li>Vacation Bible School - annual week-long event for children K-7th grade.</li>
                  </ul>
              </div>
            </section>
            <section className='responsiveFlex invert center' id='study'>
              <div className='left textSide'>
                <h3>Bible Studies</h3>
                <p>{`Our studies run throughout the year as we make our way through the bible with our fellow brothers or sisters in Christ. Please contact Elder Evan Gavries at homechurchstudies@snailmail.com with any questions.`}</p>
                  <ul>
                    <li>{`Men’s Bible Study, Thursdays 6a-7a (Leading in a Lost Land, a study of the book of Joshua)`}</li>
                    <li>{`Women’s Bible Study, Tuesdays 8a-9a (Godly Womanhood, a study of the book of Galatians)`}</li>
                    <li>{`Truth Trackers, Wednesdays 6p-8p (children K-12, scripture memorization and fellowship)`}</li>
                  </ul>
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
            <CtaChurch />
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
                              <a href='https://services.ericphifer.com/sites/city-church#history'>
                                <li>History</li>
                              </a>
                              <a href='https://services.ericphifer.com/sites/city-church#beliefs'>
                                <li>Beliefs</li>
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
                    <h2>Sundays at 10am</h2>
                  </div>
                </div>
                <div className='content'>
                  <p>No matter what you believe existence leaves us with questions. Chief among them, what happens when you die?</p>
                  <p>Christianity is evidentially and historically rooted in a person: Jesus of Nazareth. Jesus was a real man, who was also God. His purpose was to resolve a problem that man created. Separation from God the Father.</p>
                  <p>Man was committed to defy moral and natural order - committed to sin.</p>
                  <p>Jesus was born among us, human, in order to show us what is right, to take the debt we owed - death - once for all and proved His deity by rising again after three days.</p>
                  <p>Now, through Jesus, all can come before the Creator of existence and speak plainly with a God who sees and knows us.</p>
                   <p>Romans 10:9-10 says, “If you declare with your mouth, “Jesus is Lord,” and believe in your heart that God raised him from the dead, you will be saved. For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved.”</p>

                  <p>Whether you are a “seasoned” Christian or unsure of what you believe, we hope you will join us this Sunday! We want to walk alongside you wherever you are on your faith journey.</p>

                  <p>Sunday School 9:30a</p>
                  <p>Sunday Worship 10:30a, 5:30p</p>
                  <p>Wednesday Prayer 6:00p</p>
                </div>
                <section className='flex center' id='history'>
                  <div className='left'>
                    <div className='section1Img' />
                  </div>
                  <div className='right textSide'>
                    <h3>History</h3>
                    <p>Our founding pastor, Alan Boyd, began serving the community of Shelby, IA in 1985 by holding weekly prayer meetings in his home on Sunday evenings. By 1987 the group had doubled in size with around 30 people assembling for bible study, prayer and worship. Throughout the week the members of Home Church served throughout the community by offering yard work free of charge to their elderly neighbors and hosting monthly dinners to the homeless.</p> 
                  <p>Late in 1987 Home Church pooled their resources and purchased the building, formerly Old Baptist Church, at 54285 Martin Luther King Blvd. Home Church began holding services there in January 1988 with Pastor Boyd at the helm. In 2004 Pastor Boyd and his lovely wife Rae stepped back from the role of pastor and into an eldership role, making way for our current pastor, Shane Spencer.</p> 
                  <p>Home Church cares about our community and continues the outreach programs started in 1987, as well as several others. Our services remain what they have always been; simple and straightforward. We preach the word of God from the word of God, we sing hymns with a piano accompaniment, we pray together. We hope anyone who joins us for a service will feel like they are coming home as they draw nearer to Christ.</p>
                  </div>
                </section>
                <section className='flex invert center' id='beliefs'>
                  <div className='left textSide'>
                    <h3>Beliefs</h3>
                    <p>{`We believe in a triune God: God the Father, Jesus the Son, and The Holy Spirit. (“The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.” 2 Corinthians 13:14)`}</p> 
                  <p>{`We believe we are saved by grace alone through faith alone in Christ alone. (“It is by grace you have been saved, through faith - and this is not from yourselves, it is the gift of God - not by works, so that no one can boast. For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.” Ephesians 2:8-10)`}</p> 
                  <p>{`We believe the Christian bible is the holy, authoritative, inerrant Word of God. (“All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work.” 2 Timothy 3:16-17)`}</p>
                  <p>{`Psalm 33:1-3 commands, “Sing joyfully to the Lord, you righteous; it is fitting for the upright to praise him. Praise the Lord with the harp; make music to him on the ten-stringed lyre. Sing to him a new song; play skillfully, and shout for joy.” With that in mind we invite everyone to join us in singing hymns to the Lord, accompanied often by our piano. We include worship every time we meet together.`}</p>
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
                    <p>Our ministries are a way for us to serve and reach our community, as well as to strengthen and encourage our brothers and sisters in Christ. Each one is open and available to anybody in need.</p>

                    <p>Please email Elder Alan Boyd at homechurchoutreach@snailmail.com for further information on any of the following ministries, or you can visit with him any given Sunday morning. He often wears a sweater vest, regardless of the time of year.</p>
                    <ul>
                      <li>Weeding for The Word - assisting the elderly with routine yard work.</li>
                      <li>Feast for Friends - hosting monthly dinner parties for the homeless.</li>
                      <li>Taxes to Tithes - periodic financial workshops and how tos from a biblical viewpoint.</li>
                      <li>Messages for Missionaries - correspondence with the missionaries Home Church supports.</li>
                      <li>From Atheist to Apologists - discussion and training in a defense of the faith.</li> 
                      <li>Vacation Bible School - annual week-long event for children K-7th grade.</li>
                    </ul>
                  </div>
                </section>
                <section className='flex invert center' id='study'>
                  <div className='left textSide'>
                    <h3>Bible Studies</h3>
                    <p>{`Our studies run throughout the year as we make our way through the bible with our fellow brothers or sisters in Christ. Please contact Elder Evan Gavries at homechurchstudies@snailmail.com with any questions.`}</p>
                  <ul>
                    <li>{`Men’s Bible Study, Thursdays 6a-7a (Leading in a Lost Land, a study of the book of Joshua)`}</li>
                    <li>{`Women’s Bible Study, Tuesdays 8a-9a (Godly Womanhood, a study of the book of Galatians)`}</li>
                    <li>{`Truth Trackers, Wednesdays 6p-8p (children K-12, scripture memorization and fellowship)`}</li>
                  </ul>
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