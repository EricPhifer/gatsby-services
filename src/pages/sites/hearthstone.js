import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import CtaHearthstone from '../../components/CtaHearthstone';
import useForm from '../../utils/useForm';
import useContact from '../../utils/useContact';

// Images
import wall from '../../assets/images/hearthstone/wall-bg-hearthstone.png';
import logo from '../../assets/images/hearthstone/hearthstone-logo.png';
import fedex from '../../assets/images/hearthstone/FedEx_logo_orange-purple.png';
import ups from '../../assets/images/hearthstone/ups-logo-png-transparent.png';
import usps from '../../assets/images/hearthstone/usps-transparent-logo.png';
import facebook from '../../assets/images/hearthstone/facebook-logo.png';
import GalleryScroll from '../../components/GalleryScroll';
import owner from '../../assets/images/hearthstone/face-of-smiling-woman.jpg';

const HearthstoneStyles = styled.div`
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
  .hearthstoneBody {
    position: relative;
  }
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(255,255,255,0.3);
    z-index: 5;
  }
  .background {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-image: url(${wall});
    background-size: cover;
    background-repeat: repeat;
    background-position: center center;
  }
  .header {
    height: 80vh;
  }
  .wordContainer {
    margin: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    position: absolute;
    top: 10rem;
    z-index: 5;
    .increase {
      font-size: 3rem;
    }
  }
  h1, h2 {
    text-align: center;
    color: var(--black);
  }
  .welcome {
    margin: 0;
    font-size: 10rem;
  }
  h1 {
    font-family: cursive;
    font-weight: bold;
    color: darkorchid;
    font-size: 5rem;
    text-align: left;
    text-transform: uppercase;
    text-shadow: 1px 0 5px lavendar, 0 1px 5px lavendar, -1px 0 5px lavendar, 0 -1px 5px lavendar;
    letter-spacing: 1rem;
  }
  h2 {
    margin-top: 2rem;
    color: var(--white);
    text-shadow: 1px 0 1px var(--black), 0 1px 1px var(--black), -1px 0 1px var(--black), 0 -1px 1px var(--black);
    font-size: 2.7rem;
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
  .shippingLogos {
    width: 100%;
    height: 30rem;
    margin-top: 30rem;
    .logoContainer {
      margin-right: 2rem;
    }
    .fedex {
      width: 400px;
      height: 11rem;
      background-image: url(${fedex});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
    .ups {
      width: 15rem;
      height: 18.5rem;
      background-image: url(${ups});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
    .usps {
      width: 25rem;
      height: 30rem;
      background-image: url(${usps});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
  }

  // Content Sections
  .eventSection {
    width: 100%;
    min-height: 5rem;
    padding: 2rem 0;
    background-color: rgba(0,0,0,0.5);
    h3, p {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem 2rem;
      color: var(--white);
    }
    h3 {
      color: antiquewhite;
    }
  }

  .aboutSection {
    .ownerImg {
      max-width: 700px;
      height: 45rem;
      margin: 0 auto;
      background-image: url(${owner});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
    p {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem 2rem;
      font-size: 2rem;
    }
  }

  // Contact Form
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

const LandscapeHearthstoneStyles = styled.div`
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
  .hearthstoneBody {
    position: relative;
  }
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(255,255,255,0.3);
    z-index: 5;
  }
  .background {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-image: url(${wall});
    background-size: cover;
    background-repeat: repeat;
    background-position: center center;
  }
  .header {
    height: 80vh;
  }
  .wordContainer {
    margin: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    position: absolute;
    top: 10rem;
    z-index: 5;
    .increase {
      font-size: 3rem;
    }
  }
  h1, h2 {
    text-align: center;
    color: var(--black);
  }
  .welcome {
    margin: 0;
    font-size: 10rem;
  }
  h1 {
    font-family: cursive;
    font-weight: bold;
    color: darkorchid;
    font-size: 5rem;
    text-align: left;
    text-transform: uppercase;
    text-shadow: 1px 0 5px lavendar, 0 1px 5px lavendar, -1px 0 5px lavendar, 0 -1px 5px lavendar;
    letter-spacing: 1rem;
  }
  h2 {
    margin-top: 2rem;
    color: var(--white);
    text-shadow: 1px 0 1px var(--black), 0 1px 1px var(--black), -1px 0 1px var(--black), 0 -1px 1px var(--black);
    font-size: 2.7rem;
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
  .shippingLogos {
    width: 100%;
    height: 30rem;
    margin-top: 30rem;
    .logoContainer {
      margin-right: 2rem;
    }
    .fedex {
      width: 400px;
      height: 11rem;
      background-image: url(${fedex});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
    .ups {
      width: 15rem;
      height: 18.5rem;
      background-image: url(${ups});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
    .usps {
      width: 25rem;
      height: 30rem;
      background-image: url(${usps});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
  }

  // Content Sections
  .eventSection {
    width: 100%;
    min-height: 5rem;
    padding: 2rem 0;
    background-color: rgba(0,0,0,0.5);
    h3, p {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem 2rem;
      color: var(--white);
    }
    h3 {
      color: antiquewhite;
    }
  }

  .aboutSection {
    .ownerImg {
      max-width: 700px;
      height: 45rem;
      margin: 0 auto;
      background-image: url(${owner});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
    p {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem 2rem;
      font-size: 2rem;
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
const TabletHearthstoneStyles = styled.div`
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
  .hearthstoneBody {
    position: relative;
  }
  .overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(255,255,255,0.3);
    z-index: 5;
  }
  .background {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-image: url(${wall});
    background-size: cover;
    background-repeat: repeat;
    background-position: center center;
  }
  .header {
    height: 80vh;
  }
  .wordContainer {
    margin: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    position: absolute;
    top: 10rem;
    z-index: 5;
    .increase {
      font-size: 3rem;
    }
  }
  h1, h2 {
    text-align: center;
    color: var(--black);
  }
  .welcome {
    margin: 0;
    font-size: 10rem;
  }
  h1 {
    font-family: cursive;
    font-weight: bold;
    color: darkorchid;
    font-size: 5rem;
    text-align: left;
    text-transform: uppercase;
    text-shadow: 1px 0 5px lavendar, 0 1px 5px lavendar, -1px 0 5px lavendar, 0 -1px 5px lavendar;
    letter-spacing: 1rem;
  }
  h2 {
    max-width: 900px;
    margin-top: 2rem;
    color: var(--white);
    text-shadow: 1px 0 1px var(--black), 0 1px 1px var(--black), -1px 0 1px var(--black), 0 -1px 1px var(--black);
    font-size: 2.7rem;
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
  .shippingLogos {
    width: 100%;
    height: 30rem;
    margin-top: 30rem;
    .logoContainer {
      margin-right: 2rem;
    }
    .fedex {
      width: 300px;
      height: 8rem;
      background-image: url(${fedex});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
    .ups {
      width: 11rem;
      height: 13.5rem;
      background-image: url(${ups});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
    .usps {
      width: 20rem;
      height: 20rem;
      background-image: url(${usps});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
  }

  // Content Sections
  .eventSection {
    width: 100%;
    min-height: 5rem;
    padding: 2rem 0;
    background-color: rgba(0,0,0,0.5);
    h3, p {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem 2rem;
      color: var(--white);
    }
    h3 {
      color: antiquewhite;
    }
  }

  .aboutSection {
    .ownerImg {
      max-width: 700px;
      height: 45rem;
      margin: 0 auto;
      background-image: url(${owner});
      background-size: cover;
      background-repeat: norepeat;
      background-position: center center;
    }
    p {
      max-width: 600px;
      margin: 0 auto;
      padding: 1rem 2rem;
      font-size: 2rem;
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
    .header {
        height: 55vh;
    }
    .welcome {
        font-size: 7rem;
    }
    .title {
        font-size: 3rem;
    }
    h2 {
        max-width: 500px;
        font-size: 2.2rem;
    }
    .shippingLogos {
        height: 13rem;
        margin-top: 30rem;
        .fedex {
            width: 18rem;
            height: 5rem;
        }
        .ups {
            width: 6rem;
            height: 7rem;
        }
        .usps {
            width: 10rem;
            height: 10rem;
        }
    }
  }
`;

const MobileHearthstoneStyles = styled.div`
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
    .hearthstoneBody {
      position: relative;
    }
    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(255,255,255,0.3);
      z-index: 5;
    }
    .background {
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      background-image: url(${wall});
      background-size: cover;
      background-repeat: repeat;
      background-position: center center;
    }
    .header {
      height: 80vh;
    }
    .wordContainer {
      margin: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      position: absolute;
      top: 10rem;
      z-index: 5;
      .increase {
        font-size: 3rem;
      }
    }
    h1, h2 {
      text-align: center;
      color: var(--black);
    }
    .welcome {
      margin: 0;
      font-size: 10rem;
    }
    h1 {
      font-family: cursive;
      font-weight: bold;
      color: darkorchid;
      font-size: 5rem;
      text-align: left;
      text-transform: uppercase;
      text-shadow: 1px 0 5px lavendar, 0 1px 5px lavendar, -1px 0 5px lavendar, 0 -1px 5px lavendar;
      letter-spacing: 1rem;
    }
    h2 {
      margin-top: 2rem;
      color: var(--white);
      text-shadow: 1px 0 1px var(--black), 0 1px 1px var(--black), -1px 0 1px var(--black), 0 -1px 1px var(--black);
      font-size: 2.7rem;
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
    .shippingLogos {
      width: 100%;
      height: 30rem;
      margin-top: 30rem;
      .logoContainer {
        margin-right: 2rem;
      }
      .fedex {
        width: 400px;
        height: 11rem;
        background-image: url(${fedex});
        background-size: cover;
        background-repeat: norepeat;
        background-position: center center;
      }
      .ups {
        width: 15rem;
        height: 18.5rem;
        background-image: url(${ups});
        background-size: cover;
        background-repeat: norepeat;
        background-position: center center;
      }
      .usps {
        width: 25rem;
        height: 30rem;
        background-image: url(${usps});
        background-size: cover;
        background-repeat: norepeat;
        background-position: center center;
      }
    }
  
    // Content Sections
    .eventSection {
      width: 100%;
      min-height: 5rem;
      padding: 2rem 0;
      background-color: rgba(0,0,0,0.5);
      h3, p {
        max-width: 600px;
        margin: 0 auto;
        padding: 1rem 2rem;
        color: var(--white);
      }
      h3 {
        color: antiquewhite;
      }
    }
  
    .aboutSection {
      .ownerImg {
        max-width: 700px;
        height: 45rem;
        margin: 0 auto;
        background-image: url(${owner});
        background-size: cover;
        background-repeat: norepeat;
        background-position: center center;
      }
      p {
        max-width: 600px;
        margin: 0 auto;
        padding: 1rem 2rem;
        font-size: 2rem;
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
  .left {
    position: absolute;
    left: 0;
    top: 0;
  }
  .right {
    position: absolute;
    top: 1rem;
    right: 12rem;
  }
  .logo {
    width: 140px;
    height: 70px;
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }   
  .facebook {
    width: 40px;
    height: 50px;
    background-image: url(${facebook});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
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
    background-color: rgba(153,50,204,0.2);
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
  .logo {
    width: 100%;
    height: 100%;
    background-image: url(${logo});
    background-size: cover;
    background-repeat: norepeat;
    background-position: center center;
  }   
  .facebook {
    width: 100%;
    height: 100%;
    background-image: url(${facebook});
    background-size: cover;
    background-repeat: norepeat;
    background-position: center center;
  }
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

export default function Hearthstone() {
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
        <HearthstoneStyles>
          <CtaHearthstone />
          <Navigation>
            <div className="full navBG">
              <Link to='/' className='left'>
                <div className='logo' />
              </Link>
              <div className="center">
                <nav>
                  <ul className='inline center'>
                    <a href='https://services.ericphifer.com/sites/city-church#gifts'>
                      <li>Gifts</li>
                    </a>
                    <a href='https://services.ericphifer.com/sites/city-church#events'>
                      <li>Events</li>
                    </a>
                    <a href='https://services.ericphifer.com/sites/city-church#about'>
                      <li>About Us</li>
                    </a>
                    <a href='https://services.ericphifer.com/sites/city-church#contact'>
                      <li>Contact Us</li>
                    </a>
                    <a href='https://services.ericphifer.com/sites/city-church#location'>
                      <li>Location</li>
                    </a>
                  </ul>
                </nav>
              </div>
              <a href='facebook.com' className='right'>
                <div className='facebook' />
              </a>
            </div>
          </Navigation>
            <div className='background' />
            <div className='hearthstoneBody'>
              <div className='header flex center'>
                <div className='wordContainer'>
                  <h1 className='welcome'>Welcome</h1>
                  {/* <h1 className='to'>to</h1> */}
                  <h1 className='title'> to Hearthstone</h1>
                  <h2>We handle packing and shipping through all major shipping companies!</h2>
                </div>
                <div className='shippingLogos inline center'>
                  <div className='logoContainer'>
                    <div className='fedex' />
                  </div>
                  <div className='logoContainer'>
                    <div className='ups' />
                  </div>
                  <div className='logoContainer'>
                    <div className='usps' />
                  </div>
                </div>
              </div>
              <div className='content'>
                <p>Hearthstone started 16 years ago as grassroots startup working out of our garage. Since then we've grown to have a storefront with nearly 80 different products! </p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
              </div>
              <section className='productSection' id='gifts'>
                <h2>Gifts</h2>
                <GalleryScroll />
              </section>
              <section className='eventSection' id='events'>
                <h2>Events</h2>
                <div className='artClass'>
                  <h3>Art Classes</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                  <h3>Learn a Craft</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                  <h3>Business Networking Event</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                </div>
              </section>
              <section className='aboutSection' id='about'>
                <h2>About Us</h2>
                <div className='owner'>
                  <div className='ownerImg' />
                  <p>Owner Clara Dean has been making unique products for over 16 years. She started out making small purses for her 3 nieces and found that enough people liked them they started to sell!</p>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
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
        </HearthstoneStyles>
        <LandscapeHearthstoneStyles>
          <CtaHearthstone />
          <Navigation>
            <div className="full navBG">
              <div className="center">
                <nav>
                  <ul className='inline center'>
                    <a href='https://services.ericphifer.com/sites/city-church#gifts'>
                      <li>Gifts</li>
                    </a>
                    <a href='https://services.ericphifer.com/sites/city-church#events'>
                      <li>Events</li>
                    </a>
                    <a href='https://services.ericphifer.com/sites/city-church#about'>
                      <li>About Us</li>
                    </a>
                    <a href='https://services.ericphifer.com/sites/city-church#contact'>
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
                        <a href='https://services.ericphifer.com/sites/city-church#gifts'>
                          <li>Gifts</li>
                        </a>
                        <a href='https://services.ericphifer.com/sites/city-church#events'>
                          <li>Events</li>
                        </a>
                        <a href='https://services.ericphifer.com/sites/city-church#about'>
                          <li>About Us</li>
                        </a>
                        <a href='https://services.ericphifer.com/sites/city-church#contact'>
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
            <div className='hearthstoneBody'>
              <div className='header flex center'>
                <div className='wordContainer'>
                  <h1 className='welcome'>Welcome</h1>
                  {/* <h1 className='to'>to</h1> */}
                  <h1 className='title'> to Hearthstone</h1>
                  <h2>We handle packing and shipping through all major shipping companies!</h2>
                </div>
                <div className='shippingLogos inline center'>
                  <div className='logoContainer'>
                    <div className='fedex' />
                  </div>
                  <div className='logoContainer'>
                    <div className='ups' />
                  </div>
                  <div className='logoContainer'>
                    <div className='usps' />
                  </div>
                </div>
              </div>
              <div className='content'>
                <p>Hearthstone started 16 years ago as grassroots startup working out of our garage. Since then we've grown to have a storefront with nearly 80 different products! </p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
              </div>
              <section className='productSection' id='gifts'>
                <h2>Gifts</h2>
                <GalleryScroll />
              </section>
              <section className='eventSection' id='events'>
                <h2>Events</h2>
                <div className='artClass'>
                  <h3>Art Classes</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                  <h3>Learn a Craft</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                  <h3>Business Networking Event</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                </div>
              </section>
              <section className='aboutSection' id='about'>
                <h2>About Us</h2>
                <div className='owner'>
                  <div className='ownerImg' />
                  <p>Owner Clara Dean has been making unique products for over 16 years. She started out making small purses for her 3 nieces and found that enough people liked them they started to sell!</p>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
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
        </LandscapeHearthstoneStyles>
        <TabletHearthstoneStyles>
          <CtaHearthstone />
          <Navigation>
            <div className="full navBG">
              <div className="center">
                <nav>
                  <ul className='inline center'>
                    <a href='https://services.ericphifer.com/sites/city-church#gifts'>
                      <li>Gifts</li>
                    </a>
                    <a href='https://services.ericphifer.com/sites/city-church#events'>
                      <li>Events</li>
                    </a>
                    <a href='https://services.ericphifer.com/sites/city-church#about'>
                      <li>About Us</li>
                    </a>
                    <a href='https://services.ericphifer.com/sites/city-church#contact'>
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
                        <a href='https://services.ericphifer.com/sites/city-church#gifts'>
                          <li>Gifts</li>
                        </a>
                        <a href='https://services.ericphifer.com/sites/city-church#events'>
                          <li>Events</li>
                        </a>
                        <a href='https://services.ericphifer.com/sites/city-church#about'>
                          <li>About Us</li>
                        </a>
                        <a href='https://services.ericphifer.com/sites/city-church#contact'>
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
            <div className='hearthstoneBody'>
              <div className='header flex center'>
                <div className='wordContainer'>
                  <h1 className='welcome'>Welcome</h1>
                  {/* <h1 className='to'>to</h1> */}
                  <h1 className='title'> to Hearthstone</h1>
                  <h2>We handle packing and shipping through all major shipping companies!</h2>
                </div>
                <div className='shippingLogos inline center'>
                  <div className='logoContainer'>
                    <div className='fedex' />
                  </div>
                  <div className='logoContainer'>
                    <div className='ups' />
                  </div>
                  <div className='logoContainer'>
                    <div className='usps' />
                  </div>
                </div>
              </div>
              <div className='content'>
                <p>Hearthstone started 16 years ago as grassroots startup working out of our garage. Since then we've grown to have a storefront with nearly 80 different products! </p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
              </div>
              <section className='productSection' id='gifts'>
                <h2>Gifts</h2>
                <GalleryScroll />
              </section>
              <section className='eventSection' id='events'>
                <h2>Events</h2>
                <div className='artClass'>
                  <h3>Art Classes</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                  <h3>Learn a Craft</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                  <h3>Business Networking Event</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                </div>
              </section>
              <section className='aboutSection' id='about'>
                <h2>About Us</h2>
                <div className='owner'>
                  <div className='ownerImg' />
                  <p>Owner Clara Dean has been making unique products for over 16 years. She started out making small purses for her 3 nieces and found that enough people liked them they started to sell!</p>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
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
        </TabletHearthstoneStyles>
        <MobileHearthstoneStyles>
            <CtaHearthstone />
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
                            <a href='https://services.ericphifer.com/sites/city-church#gifts'>
                              <li>Gifts</li>
                            </a>
                            <a href='https://services.ericphifer.com/sites/city-church#events'>
                              <li>Events</li>
                            </a>
                            <a href='https://services.ericphifer.com/sites/city-church#about'>
                              <li>About Us</li>
                            </a>
                            <a href='https://services.ericphifer.com/sites/city-church#contact'>
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
            <div className='hearthstoneBody'>
              <div className='header flex center'>
                <div className='wordContainer'>
                  <h1 className='welcome'>Welcome</h1>
                  {/* <h1 className='to'>to</h1> */}
                  <h1 className='title'> to Hearthstone</h1>
                  <h2>We handle packing and shipping through all major shipping companies!</h2>
                </div>
                <div className='shippingLogos inline center'>
                  <div className='logoContainer'>
                    <div className='fedex' />
                  </div>
                  <div className='logoContainer'>
                    <div className='ups' />
                  </div>
                  <div className='logoContainer'>
                    <div className='usps' />
                  </div>
                </div>
              </div>
              <div className='content'>
                <p>Hearthstone started 16 years ago as grassroots startup working out of our garage. Since then we've grown to have a storefront with nearly 80 different products! </p> 
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
              </div>
              <section className='productSection' id='gifts'>
                <h2>Gifts</h2>
                <GalleryScroll />
              </section>
              <section className='eventSection' id='events'>
                <h2>Events</h2>
                <div className='artClass'>
                  <h3>Art Classes</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                  <h3>Learn a Craft</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                  <h3>Business Networking Event</h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                </div>
              </section>
              <section className='aboutSection' id='about'>
                <h2>About Us</h2>
                <div className='owner'>
                  <div className='ownerImg' />
                  <p>Owner Clara Dean has been making unique products for over 16 years. She started out making small purses for her 3 nieces and found that enough people liked them they started to sell!</p>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> 
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
        </MobileHearthstoneStyles>
        </>
    )
}