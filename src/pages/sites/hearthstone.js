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
import crafts from '../../assets/images/hearthstone/pottter-and-the-clay.png'

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
    background-color: rgba(0,0,0,0.3);
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
  .headerImg {
    width: 100%;
    height: 100%;
    background-image: url(${crafts});
    background-size: cover;
    background-repeat: repeat;
    background-position: center center;
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
    font-size: 7rem;
  }
  .title {
    margin: 2rem auto;
    font-size: 10rem;
  }
  h1 {
    font-family: cursive;
    font-weight: bold;
    color: darkorchid;
    font-size: 5rem;
    text-align: left;
    text-transform: uppercase;
    text-shadow: 1px 0 10px var(--white), 0 1px 10px var(--white), -1px 0 10px var(--white), 0 -1px 10px var(--white);
    letter-spacing: 1rem;
  }
  .header h2 {
    max-width: 777px;
  }
  h2 {
    margin: 2rem;
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
    .logoContainer {
      margin-right: 2rem;
    }
    .fedex {
      width: 40rem;
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
  footer {
    width: 100%;
    height: 12rem;
    position: absolute;
    background-color: var(--black);
    p {
      max-width: 500px;
      margin: 0 auto;
      padding: 2rem;
      color: var(--white);
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
  .center {
    justify-content: center;
    align-items: center;
  }
  .responsiveFlex {
    display: inline-flex;
    @media only screen and (max-width: 940px) {
      display: flex;
      flex-flow: column wrap;
    }
  }
  .invert {
    @media only screen and (max-width: 900px) {
      flex-flow: column-reverse wrap;
    }
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
  .header h2 {
    max-width: 777px;
    font-size: 2.3rem;
  }
  .header {
    height: 100vh;
  }
  .headerImg {
    width: 100%;
    height: 100%;
    background-image: url(${crafts});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .wordContainer {
    margin: 0;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    position: absolute;
    top: 2rem;
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
    font-size: 4rem;
  }
  .title {
    margin: 2rem auto;
    font-size: 5.5rem;
  }
  h1 {
    font-family: cursive;
    font-weight: bold;
    color: darkorchid;
    font-size: 5rem;
    text-align: left;
    text-transform: uppercase;
    text-shadow: 1px 0 10px var(--white), 0 1px 10px var(--white), -1px 0 10px var(--white), 0 -1px 10px var(--white);
    letter-spacing: 1rem;
  }
  h2 {
    margin: 2rem;
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
    .logoContainer {
      margin: 2rem;
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
  footer {
    width: 100%;
    height: 12rem;
    position: absolute;
    background-color: var(--black);
    p {
      max-width: 500px;
      margin: 0 auto;
      padding: 2rem;
      color: var(--white);
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
  .header h2 {
    max-width: 777px;
  }
  .header {
    height: 80vh;
  }
   .headerImg {
    width: 100%;
    height: 100%;
    background-image: url(${crafts});
    background-size: cover;
    background-repeat: repeat;
    background-position: center center;
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
    font-size: 6rem;
  }
  .title {
    margin: 2rem auto;
    font-size: 7rem;
  }
  h1 {
    font-family: cursive;
    font-weight: bold;
    color: darkorchid;
    font-size: 5rem;
    text-align: left;
    text-transform: uppercase;
    text-shadow: 1px 0 10px var(--white), 0 1px 10px var(--white), -1px 0 10px var(--white), 0 -1px 10px var(--white);
    letter-spacing: 1rem;
  }
  h2 {
    max-width: 900px;
    margin: 2rem;
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
  footer {
    width: 100%;
    height: 12rem;
    position: absolute;
    background-color: var(--black);
    p {
      max-width: 500px;
      margin: 0 auto;
      padding: 2rem;
      color: var(--white);
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
        h2 {
          font-size: 2rem;
        }
    }
    h2 {
      font-size: 2.1rem;
    }
    .welcome {
        font-size: 3rem;
    }
    .title {
        margin: 2rem 0;
        font-size: 4rem;
    }
    .shippingLogos {
        height: 13rem;
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
      flex-flow: column nowrap;
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
      background-color: rgba(0,0,0,0.3);
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
    .header h2 {
      max-width: 777px;
      padding: 2rem;
      font-size: 1.75rem;
    }
    .header {
      height: 60vh;
    }
    .headerImg {
      width: 100%;
      height: 100%;
      background-image: url(${crafts});
      background-size: cover;
      background-repeat: repeat;
      background-position: center center;
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
      font-size: 2.5rem;
    }
    .title {
      margin: 2rem auto;
      font-size: 3rem;
    }
    h1 {
      font-family: cursive;
      font-weight: bold;
      color: darkorchid;
      font-size: 2rem;
      text-align: left;
      text-transform: uppercase;
      text-shadow: 1px 0 5px var(--white), 0 1px 5px var(--white), -1px 0 5px var(--white), 0 -1px 5px var(--white);
    }
    h2 {
      margin-top: 2rem;
      padding: 0 1rem;
      color: var(--white);
      text-shadow: 1px 0 1px var(--black), 0 1px 1px var(--black), -1px 0 1px var(--black), 0 -1px 1px var(--black);
      font-size: 2rem;
    }
    .content {
      width: 100%;
      height: 100%;
      padding: 3rem 0;
      background-color: rgba(0,0,0,0.5);
      h2 {
        padding: 2rem;
        font-size: 1.5rem;
      }
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
      .logoContainer {
        margin: 2rem;
      }
      .fedex {
        width: 25rem;
        height: 7rem;
        background-image: url(${fedex});
        background-size: cover;
        background-repeat: norepeat;
        background-position: center center;
      }
      .ups {
        width: 20rem;
        height: 25rem;
        background-image: url(${ups});
        background-size: cover;
        background-repeat: norepeat;
        background-position: center center;
      }
      .usps {
        width: 20rem;
        height: 25rem;
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
        font-size: 1.5rem;
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
        font-size: 2rem;
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
     footer {
      width: 100%;
      height: 18rem;
      position: absolute;
      background-color: var(--black);
      p {
        max-width: 300px;
        margin: 0 auto;
        padding: 2rem 7rem 2rem 2rem;
        color: var(--white);
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
                <div className='headerImg' />
                <div className='wordContainer'>
                  <h1 className='welcome'>Welcome to</h1>
                  <h1 className='title'>Hearthstone</h1>
                  <h2>Hearthstone started 16 years ago as a grassroots startup working out of our garage. Since then we've grown to have a storefront with nearly 80 different products! </h2> 
                </div>
              </div>
              <div className='content'>
                  <h2>We handle packing and shipping through all major shipping companies!</h2>
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
              <section className='productSection' id='gifts'>
                <h2>Gifts</h2>
                <GalleryScroll />
              </section>
              <section className='eventSection' id='events'>
                <h2>Events</h2>
                <div className='artClass'>
                  <h3>Art Classes - Sept. 4</h3>
                  <p>Learn the basics in working with cloth and pottery! Each art class teaches basic techniques in painting on these mediums from start to finish. Cost is $25/person for materials. No reservation necessary, pay at the door!</p> 
                  <h3>Learn a Craft - Sept. 15</h3>
                  <p>Join us each month for a workshop given by a local artist. Everything from butter making to knitting to modern art! Cost is free with donations to the local artist.</p> 
                  <h3>Business Networking Event - Oct. 5</h3>
                  <p>Tri-annual event includes an evening of great hors d’oeuvres while networking with other businesses in the valley, from the brand new to the well-seasoned! Our owner always gives a question and answer time towards the end of the evening. Please RSVP next time you drop into the store or by calling. Cost is $15.</p> 
                </div>
              </section>
              <section className='aboutSection' id='about'>
                <h2>About Us</h2>
                <div className='owner'>
                  <div className='ownerImg' />
                  <p>From the time she was a young girl, Clara Dean enjoyed crafts and design. When she was eight years old, instead of a lemonade stand, she would sell her wares at a small homemade booth during the summer. She would often make enough money to buy more materials for homemade gifts for family and friends. During college life took Miss Clara elsewhere and eventually she met and married her husband John. They had six children and moved to the valley during those fun chaotic years a young family brings.</p>
                  <p>Though Miss Clara never stopped crafting for friends and family, sixteen years ago a neighbor encouraged her to start her own business. With the last of her children in high school, Clara and John converted their garage to a workshop and began selling products at farmer’s markets. The response was overwhelmingly positive from the community, and in 2008 a storefront was purchased.</p> 
                  <p>Since that time Miss Clara has helped other local artists chase their dreams by encouraging them, teaching them basic business smarts, and giving them a place to sell their wonderful creations. This is truly a labor of love for all of us here at Hearthstone. We hope you will enjoy each purchase as much as Miss Clara and others enjoyed making it!</p> 
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
            <footer>
              <p>This template is inspired by a real business with these real products in Clifton, CO called "Homespun" and is dedicated in memory of Sonja Kent, a true entrepreneur for her community. Product images are provided by Homespun. </p>
            </footer>
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
                <div className='headerImg' />
                <div className='wordContainer'>
                  <h1 className='welcome'>Welcome to</h1>
                  <h1 className='title'>Hearthstone</h1>
                  <h2>Hearthstone started 16 years ago as a grassroots startup working out of our garage. Since then we've grown to have a storefront with nearly 80 different products! </h2> 
                </div>
              </div>
              <div className='content'>
                  <h2>We handle packing and shipping through all major shipping companies!</h2>
                <div className='shippingLogos responsiveFlex center'>
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
              <section className='productSection' id='gifts'>
                <h2>Gifts</h2>
                <GalleryScroll />
              </section>
              <section className='eventSection' id='events'>
                <h2>Events</h2>
                <div className='artClass'>
                  <h3>Art Classes - Sept. 4</h3>
                  <p>Learn the basics in working with cloth and pottery! Each art class teaches basic techniques in painting on these mediums from start to finish. Cost is $25/person for materials. No reservation necessary, pay at the door!</p> 
                  <h3>Learn a Craft - Sept. 15</h3>
                  <p>Join us each month for a workshop given by a local artist. Everything from butter making to knitting to modern art! Cost is free with donations to the local artist.</p> 
                  <h3>Business Networking Event - Oct. 5</h3>
                  <p>Tri-annual event includes an evening of great hors d’oeuvres while networking with other businesses in the valley, from the brand new to the well-seasoned! Our owner always gives a question and answer time towards the end of the evening. Please RSVP next time you drop into the store or by calling. Cost is $15.</p> 
                </div>
              </section>
              <section className='aboutSection' id='about'>
                <h2>About Us</h2>
                <div className='owner'>
                  <div className='ownerImg' />
                  <p>From the time she was a young girl, Clara Dean enjoyed crafts and design. When she was eight years old, instead of a lemonade stand, she would sell her wares at a small homemade booth during the summer. She would often make enough money to buy more materials for homemade gifts for family and friends. During college life took Miss Clara elsewhere and eventually she met and married her husband John. They had six children and moved to the valley during those fun chaotic years a young family brings.</p>
                  <p>Though Miss Clara never stopped crafting for friends and family, sixteen years ago a neighbor encouraged her to start her own business. With the last of her children in high school, Clara and John converted their garage to a workshop and began selling products at farmer’s markets. The response was overwhelmingly positive from the community, and in 2008 a storefront was purchased.</p> 
                  <p>Since that time Miss Clara has helped other local artists chase their dreams by encouraging them, teaching them basic business smarts, and giving them a place to sell their wonderful creations. This is truly a labor of love for all of us here at Hearthstone. We hope you will enjoy each purchase as much as Miss Clara and others enjoyed making it!</p> 
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
            <footer>
              <p>This template is inspired by a real business with these real products in Clifton, CO called "Homespun" and is dedicated in memory of Sonja Kent, a true entrepreneur for her community. Product images are provided by Homespun. </p>
            </footer>
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
                <div className='headerImg' />
                <div className='wordContainer'>
                  <h1 className='welcome'>Welcome to</h1>
                  <h1 className='title'>Hearthstone</h1>
                  <h2>Hearthstone started 16 years ago as a grassroots startup working out of our garage. Since then we've grown to have a storefront with nearly 80 different products! </h2> 
                </div>
              </div>
              <div className='content'>
                  <h2>We handle packing and shipping through all major shipping companies!</h2>
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
              <section className='productSection' id='gifts'>
                <h2>Gifts</h2>
                <GalleryScroll />
              </section>
              <section className='eventSection' id='events'>
                <h2>Events</h2>
                <div className='artClass'>
                  <h3>Art Classes - Sept. 4</h3>
                  <p>Learn the basics in working with cloth and pottery! Each art class teaches basic techniques in painting on these mediums from start to finish. Cost is $25/person for materials. No reservation necessary, pay at the door!</p> 
                  <h3>Learn a Craft - Sept. 15</h3>
                  <p>Join us each month for a workshop given by a local artist. Everything from butter making to knitting to modern art! Cost is free with donations to the local artist.</p> 
                  <h3>Business Networking Event - Oct. 5</h3>
                  <p>Tri-annual event includes an evening of great hors d’oeuvres while networking with other businesses in the valley, from the brand new to the well-seasoned! Our owner always gives a question and answer time towards the end of the evening. Please RSVP next time you drop into the store or by calling. Cost is $15.</p> 
                </div>
              </section>
              <section className='aboutSection' id='about'>
                <h2>About Us</h2>
                <div className='owner'>
                  <div className='ownerImg' />
                  <p>From the time she was a young girl, Clara Dean enjoyed crafts and design. When she was eight years old, instead of a lemonade stand, she would sell her wares at a small homemade booth during the summer. She would often make enough money to buy more materials for homemade gifts for family and friends. During college life took Miss Clara elsewhere and eventually she met and married her husband John. They had six children and moved to the valley during those fun chaotic years a young family brings.</p>
                  <p>Though Miss Clara never stopped crafting for friends and family, sixteen years ago a neighbor encouraged her to start her own business. With the last of her children in high school, Clara and John converted their garage to a workshop and began selling products at farmer’s markets. The response was overwhelmingly positive from the community, and in 2008 a storefront was purchased.</p> 
                  <p>Since that time Miss Clara has helped other local artists chase their dreams by encouraging them, teaching them basic business smarts, and giving them a place to sell their wonderful creations. This is truly a labor of love for all of us here at Hearthstone. We hope you will enjoy each purchase as much as Miss Clara and others enjoyed making it!</p> 
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
            <footer>
              <p>This template is inspired by a real business with these real products in Clifton, CO called "Homespun" and is dedicated in memory of Sonja Kent, a true entrepreneur for her community. Product images are provided by Homespun. </p>
            </footer>
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
                <div className='headerImg' />
                <div className='wordContainer'>
                  <h1 className='welcome'>Welcome to</h1>
                  <h1 className='title'>Hearthstone</h1>
                  <h2>Hearthstone started 16 years ago as a grassroots startup working out of our garage. Since then we've grown to have a storefront with nearly 80 different products! </h2> 
                </div>
              </div>
              <div className='content'>
                  <h2>We handle packing and shipping through all major shipping companies!</h2>
                <div className='shippingLogos flex center'>
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
              <section className='productSection' id='gifts'>
                <h2>Gifts</h2>
                <GalleryScroll />
              </section>
              <section className='eventSection' id='events'>
                <h2>Events</h2>
                <div className='artClass'>
                  <h3>Art Classes - Sept. 4</h3>
                  <p>Learn the basics in working with cloth and pottery! Each art class teaches basic techniques in painting on these mediums from start to finish. Cost is $25/person for materials. No reservation necessary, pay at the door!</p> 
                  <h3>Learn a Craft - Sept. 15</h3>
                  <p>Join us each month for a workshop given by a local artist. Everything from butter making to knitting to modern art! Cost is free with donations to the local artist.</p> 
                  <h3>Business Networking Event - Oct. 5</h3>
                  <p>Tri-annual event includes an evening of great hors d’oeuvres while networking with other businesses in the valley, from the brand new to the well-seasoned! Our owner always gives a question and answer time towards the end of the evening. Please RSVP next time you drop into the store or by calling. Cost is $15.</p> 
                </div>
              </section>
              <section className='aboutSection' id='about'>
                <h2>About Us</h2>
                <div className='owner'>
                  <div className='ownerImg' />
                  <p>From the time she was a young girl, Clara Dean enjoyed crafts and design. When she was eight years old, instead of a lemonade stand, she would sell her wares at a small homemade booth during the summer. She would often make enough money to buy more materials for homemade gifts for family and friends. During college life took Miss Clara elsewhere and eventually she met and married her husband John. They had six children and moved to the valley during those fun chaotic years a young family brings.</p>
                  <p>Though Miss Clara never stopped crafting for friends and family, sixteen years ago a neighbor encouraged her to start her own business. With the last of her children in high school, Clara and John converted their garage to a workshop and began selling products at farmer’s markets. The response was overwhelmingly positive from the community, and in 2008 a storefront was purchased.</p> 
                  <p>Since that time Miss Clara has helped other local artists chase their dreams by encouraging them, teaching them basic business smarts, and giving them a place to sell their wonderful creations. This is truly a labor of love for all of us here at Hearthstone. We hope you will enjoy each purchase as much as Miss Clara and others enjoyed making it!</p> 
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
            <footer>
              <p>This template is inspired by a real business with these real products in Clifton, CO called "Homespun" and is dedicated in memory of Sonja Kent, a true entrepreneur for her community. Product images are provided by Homespun. </p>
            </footer>
          </MobileHearthstoneStyles>
        </>
    )
}