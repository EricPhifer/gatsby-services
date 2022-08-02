import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Seo from '../components/Seo';
import curves from '../assets/images/curves-bg.png'
import SanityImage from 'gatsby-plugin-sanity-image';

const HomeStyles = styled.div`
  width: calc(100vw - 100px);
  margin-left: 100px;
  .inline {
    display: inline-flex;
  }
  .center {
    justify-content: center;
  }
  .welcomeContainer {
    width: 100%;
  }
  h1 {
    margin: 5rem 0 0;
    text-transform: uppercase;
    text-align: center;
    font-size: 8rem;
    color: var(--bg);
    text-shadow: 1px 0 2px var(--white), 0 50px 2px var(--green), -1px 0 2px var(--white), 0 -50px 2px var(--mint);
    font-weight: 100;
    letter-spacing: 5vw;
    cursor: default;
    transition-property: text-shadow, color;
    transition-duration: 0.5s, 2s;
    &:hover {
      text-shadow: none;
      color: var(--white);
    }
  }
  h2 {
    margin: 5rem 0 3rem;
    font-size: 2.5rem;
    text-shadow: none;
    color: var(--white);
    text-align: center;
    letter-spacing: 1vw;
    cursor: default;
    transition-property: text-shadow, color;
    transition-duration: 0.5s, 2s;
    &:hover {
      color: var(--bg);
      text-shadow: 1px 0 2px var(--white), 0 25px 2px var(--green), -1px 0 2px var(--white), 0 -25px 2px var(--mint);
    }
  }
  .filter {
    display: flex;
    flex-flow: row nowrap;
    overflow-y: scroll;
    scrollbar-width: none;
    a {
      margin: 2rem;
      font-size: 1.5rem;
      text-transform: uppercase;
      color: var(--white);
      cursor: pointer;
      font-weight: bold;
      &:hover {
        color: var(--red);
      }
    }
  }
  hr {
    width: 100vw;
    border: 10px solid var(--mint);    
  }
  .explanation {
    width: 100%;
    p {
      text-align: center;
      color: var(--white);
    }
  }
  .gridContainer {
    max-width: 1080px;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    gap: 2rem;
    .card {
      width: 300px;
      height: 400px;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .overlay {
      background-color: rgba(0,0,0,0.5);
      width: 300px;
      height: 400px;
      position: absolute;
      outline: 2px dotted var(--white);
      opacity: 0;
      transition: all 0.25s ease-in-out;
      &:hover {
        opacity: 1;
      }
    }
    h3 {
      margin-top: 7rem;
      color: var(--white);
      text-align: center;
      text-decoration: underline;
      font-size: 2.5rem;
    }
    p {
      padding: 2rem;
      color: var(--white);
      font-size: 1.5rem;
    }
    .buttonesque {
      display: block;
      max-width: calc(100% - 10rem);
      margin: 0 auto;
      padding: 2rem 3rem;
      background-color: var(--green);
      color: var(--white);
      text-align: center;
      font-weight: bold;
      border-radius: 2rem;
      transition: all 0.25s ease-in-out;
      &:hover {
        background-color: var(--white);
        color: var(--green);
      }
    }
  }

  @media only screen and (max-height: 815px) {
    .inlineContainer {
      height: 92%;
    }
    .projectContainer {
      width: 100%;
    }
    .project {
      margin: 2vmin 10vmin;
      .mobileView {
        width: 12vmin;
      }
      .tabletView {
        width: 23vmin;
      }
    }
  }
  .hidden {
    display: none;
  }
  @media only screen and (orientation: portrait) {
    .hidden {
      display: none;
    }
  }
  @media only screen and (max-height: 650px) {
    .hidden {
      width: 100vw;
      height: 100vh;
      display: block;
      position: fixed;
      z-index: 100;
      background: var(--green);
      .curvelayer {
        width: 100%;
        height: 100vh;
        background-image: url(${curves});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
      }
      p {
        color: var(--white);
        margin: 30vmin;
        position: absolute;
        top: 0;
        font-size: 5rem;
        span {
          color: var(--bg);
        }
      }
    }
  }
  /* Hide menu on small screens */
  @media only screen and (max-width: 1080px) {
    display: none;
  }
`;

const TabletHomeStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 1081px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  .inline {
    display: inline-flex;
  }
  .center {
    justify-content: center;
  }
  .landing {
    width: 100vw;
  }
  .landingContainer {
    display: inline-flex;
  }
  p {
    margin: 0;
    color: var(--white);
    text-transform: uppercase;
    font-size: 7vmin;
    font-weight: bold;
    cursor: default;
    @media only screen and (max-width: 975px) {
      font-size: 6vmin;
    }
  }
  .hint {
    font-size: 1.25rem;
    text-transform: lowercase;
  }
  .words {
    position: absolute;
    left: 125px;
    bottom: 30px;
    .elevate:hover {
      color: var(--green);
      text-shadow: 1px 2px var(--white);
    }
    @media only screen and (max-width: 900px) {
      left: 70px;
    }
  }
  .image {
    width: 75vmin;
    position: absolute;
    bottom: -14rem;
    right: 0;
    opacity: 0.5;
    img {
      width: 75vmin;
    }
    @media only screen and (max-width: 700px) {
      width: 103vmin;
      img {
        width: 103vmin;
      }
    }
  }
  .scrollIndicator {
    position: absolute;
    right: 0;
    top: 50%;
    display: flex:
    flex-flow: column nowrap;
    transform: rotate(90deg);
    .scrollWords {
      font-size: 1.25rem;
      padding: 0.25rem;
      @media only screen and (max-width: 900px) {
        padding-bottom: 0;
        transform: rotate(180deg);
      }
    }
    .triangle {
      width: 75px;
      height: 25px;
      background-image: linear-gradient(
          to bottom right,
          transparent 50%,
          var(--green) 0
        ),
        linear-gradient(to top right, var(--green) 50%, transparent 0);
      background-size: 50% 100%;
      background-repeat: no-repeat;
      background-position: left, right;
    }
  }
  .projectContainer {
    height: 100vh;
    width: 100%;
    transform: translateX(100vw);
    position: relative;
    .buttonesque {
      width: 100%;
      height: 60px;
      display: flex;
      position: fixed;
      bottom: 0;
      justify-content: center;
      align-items: center;
      background-color: var(--green);
      a {
        width: 95vw;
        height: 100%;
        margin-top: 4rem;
        position: sticky;
        left: -60%;
        font-size: 2rem;
        font-weight: bold;
        color: var(--white);
        text-align: center;
        @media only screen and (max-width: 900px) {
          left: -65%;
        }
        @media only screen and (max-width: 600px) {
          left: -70%;
        }
      }
      &:hover {
        background-color: var(--mint);
        a {
          color: var(--green);
        }
      }
    }
  }
  .inlineContainer {
    height: 85%;
    margin-right: 5rem;
  }
  .project {
    min-width: 400px;
    margin: 2vmin 15vmin;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .inline {
      max-width: 400px;
    }
    .desktopView {
      max-width: 45vmin;
    }
    .tabletView {
      width: 30vmin;
      margin: 7rem 0 0 7rem;
    }
    .mobileView {
      width: 15vmin;
      margin-top: 2rem;
    }
    a {
      margin-top: 2rem;
      font-size: 3rem;
      color: var(--white);
      &:hover {
        color: var(--blue);
        text-shadow: 1px 0 0 var(--white);
      }
    }
  }
  @media only screen and (max-height: 815px) {
    .inlineContainer {
      height: 92%;
    }
    .projectContainer {
      width: 100%;
    }
    .project {
      margin: 2vmin 10vmin;
      .mobileView {
        width: 12vmin;
      }
      .tabletView {
        width: 23vmin;
      }
    }
  }
  .hidden {
    display: none;
  }
  @media only screen and (orientation: portrait) {
    .hidden {
      display: none;
    }
  }
  @media only screen and (max-height: 650px) and (orientation: landscape) {
    .hidden {
      width: 100vw;
      height: 100vh;
      display: block;
      position: fixed;
      z-index: 100;
      background: var(--green);
      .curvelayer {
        width: 100%;
        height: 100vh;
        background-image: url(${curves});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
      }
      p {
        color: var(--white);
        margin: 30vmin;
        position: absolute;
        top: 0;
        span {
          color: var(--bg);
        }
      }
    }
  }
`;

const MobileHomeStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  .inline {
    display: inline-flex;
  }
  .center {
    justify-content: center;
  }
  .landing {
    width: 100vw;
  }
  p {
    margin: 0;
    color: var(--white);
    text-transform: uppercase;
    font-size: 6vmin;
    font-weight: bold;
    cursor: default;
  }
  .hint {
    font-size: 1.25rem;
    text-transform: lowercase;
  }
  .words {
    position: absolute;
    left: 70px;
    bottom: 30px;
    .elevate:hover {
      color: var(--green);
      text-shadow: 1px 2px var(--white);
    }
  }
  .image {
    width: 103vmin;
    position: absolute;
    bottom: -2rem;
    right: 0;
    opacity: 0.5;
    img {
      width: 103vmin;
    }
  }
  .scrollIndicator {
    position: absolute;
    right: 0;
    top: 50%;
    display: flex:
    flex-flow: column nowrap;
    transform: rotate(90deg);
    .scrollWords {
      font-size: 1rem;
      padding: 0.5rem 0.25rem 0;
      transform: rotate(180deg);
    }
    .triangle {
      width: 60px;
      height: 15px;
      background-image: linear-gradient(
          to bottom right,
          transparent 50%,
          var(--green) 0
        ),
        linear-gradient(to top right, var(--green) 50%, transparent 0);
      background-size: 50% 100%;
      background-repeat: no-repeat;
      background-position: left, right;
    }
  }
  .projectContainer {
    height: 100vh;
    width: 100%;
    transform: translateX(100vw);
    position: relative;
    .buttonesque {
      width: 100%;
      height: 60px;
      position: fixed;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--green);
      a {
        width: 95vw;
        height: 100%;
        margin-top: 4rem;
        position: sticky;
        left: -100%;
        font-size: 2rem;
        font-weight: bold;
        color: var(--white);
        text-align: center;
      }
      &:hover {
        background-color: var(--mint);
        a {
          color: var(--green);
        }
      }
    }
  }
  .inlineContainer {
    height: 85%;
    margin-right: 5rem;
  }
  .project {
    width: 320px;
    margin: 5vmin 15vmin;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    .inline {
      max-width: 320px;
    }
    @media only screen and (max-height: 700px) {
      margin: 10vmin;
    }
    .desktopView {
      @media only screen and (max-height: 785px) {
        width: 80vmin;
      }
    }
    .tabletView {
      width: 50vmin;
      margin: 7rem 0 0 3rem;
      @media only screen and (max-height: 785px) {
        width: 40vmin;
      }
    }
    .mobileView {
      width: 30vmin;
      margin-top: 2rem;
      @media only screen and (max-height: 785px) {
        width: 22vmin;
      }
    }
    a {
      margin-top: 2rem;
      font-size: 2rem;
      color: var(--white);
      &:hover {
        color: var(--red);
        text-shadow: 1px 0 0 var(--white);
      }
    }
  }
  .hidden {
    display: none;
  }
  @media only screen and (orientation: portrait) {
    .hidden {
      display: none;
    }
  }
  @media only screen and (max-height: 650px) and (orientation: landscape) {
    .hidden {
      width: 100vw;
      height: 100vh;
      display: block;
      position: fixed;
      z-index: 100;
      background: var(--green);
      .curvelayer {
        width: 100%;
        height: 100vh;
        background-image: url(${curves});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;
      }
      p {
        color: var(--white);
        margin: 30vmin;
        position: absolute;
        top: 0;
        span {
          color: var(--bg);
        }
      }
    }
  }
`;

export default function HomePage({ data }) {
  const sites = data.sites.nodes;
  // const tags = data.tags.nodes;
  const services = data.services.nodes;
  return (
    <>
      <Seo title="Services - Home Page" />
      <HomeStyles>
        <div className='hidden'>
          <div className='curvelayer' />
          <p>
            Congratulations! 
            <br /> You found a hidden message. 
            <br />You are granted the title: <span>Message Finder</span>.
          </p>
        </div>
        <div className='welcomeContainer'>
          <h1 className='hoverReverse'>
            Welcome
          </h1>
        </div>
        <h2>What kind of website do you need?</h2>
        <hr />
        {/* A filter to find what you're looking for faster */}
        {/* <div className='filter'>
          {tags.map((tag) => (
            <Link to={tag.sitelink} key={tag.id}>
              {tag.tagtitle}
            </Link>
          ))}
        </div>
        <hr /> */}
        <div className='explanation'>
          <p>Hover over each template to see more details.</p>
        </div>
        <div className='gridContainer'>
          {sites.map((site) => (
            <div className='card' key={site.id}>
                  <div className='overlay'>
                    <h3>{site.title}</h3>
                    <p>{site.description}</p>
                    <Link to={site.sitelink} className="buttonesque">
                      Explore this Template
                    </Link>
                  </div>
                <SanityImage 
                  {...site.image}
                  alt={site.title}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                  />
            </div>
          ))}
        </div>
      </HomeStyles>
      <TabletHomeStyles>
      <div className='hidden'>
          <div className='curvelayer' />
          <p>
            Congratulations! 
            <br /> You found a hidden message. 
            <br />You are granted the title: <span>Message Finder</span>.
          </p>
        </div>
      </TabletHomeStyles>
      <MobileHomeStyles>
        <div className='hidden'>
          <div className='curvelayer' />
          <p>
            Congratulations! 
            <br /> You found a hidden message. 
            <br />You are granted the title: <span>Message Finder</span>.
          </p>
        </div>
        {services.map((service) => (
          <div key={service.id}>
            <p>{service.name}</p>
          </div>
        ))}
       
      </MobileHomeStyles>
    </>
  );
}

export const query = graphql`
  query {
    services: allStripePrice {
      nodes {
        active
        billing_scheme
        currency
        id
        livemode
        type
        unit_amount_decimal
        product {
          id
          description
          name
          object
          type
          unit_label
          images
          active
        }
      }
    }
    tags: allSanityServicetags {
      nodes {
        id
        tagtitle
      }
    }
    sites: allSanityServicesites {
      nodes {
        id
        image {
          asset {
            id
          }
          ...ImageWithPreview
        }
        description
        sitelink
        tags {
          tagtitle
        }
        slug {
          current
        }
        title
      }
    }
  }
`;
