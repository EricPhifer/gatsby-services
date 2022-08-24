import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Seo from '../components/Seo';
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
    margin: 5rem 0 0 4rem;
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
    justify-items: center;
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
      margin-top: 5rem;
      color: var(--white);
      text-align: center;
      text-transform: uppercase;
      font-size: 2rem;
    }
    p {
      min-height: 12rem;
      padding: 2rem;
      color: var(--white);
      font-size: 1.5rem;
      text-align: center;
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
  .hidden {
    display: none;
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
  width: calc(100vw - 100px);
  margin-left: 100px;
  .inline {
    display: inline-flex;
  }
  .center {
    justify-content: center;
  }
  button.welcomeContainer {
    width: 100%;
    border: none;
    background-color: var(--bg);
    box-shadow: none;
    margin: 5rem 0 0;
    padding-left: 4rem;
    text-transform: uppercase;
    text-align: center;
    font-size: 8rem;
    color: var(--bg);
    text-shadow: 1px 0 2px var(--white), 0 50px 2px var(--green), -1px 0 2px var(--white), 0 -50px 2px var(--mint);
    font-weight: 100;
    letter-spacing: 5vw;
    cursor: default;
    transition: all 0.5s, 2s;
  }
  button.welcome {
    width: 100%;
    border: none;
    background-color: var(--bg);
    box-shadow: none;
    margin: 5rem 0 0;
    padding-left: 4rem;
    text-transform: uppercase;
    text-align: center;
    font-size: 8rem;
    font-weight: 100;
    letter-spacing: 5vw;
    cursor: default;
    transition: all 0.5s, 2s;
    text-shadow: none;
    color: var(--white);
  }
  button.origin {
    width: 100%;
    border: none;
    background-color: var(--bg);
    box-shadow: none;
    margin: 5rem 0 3rem;
    font-size: 2.25rem;
    text-shadow: none;
    color: var(--white);
    text-align: center;
    letter-spacing: 0.5vw;
    cursor: default;
    transition: all 0.5s, 2s;
  }
  button.website {
    width: 100%;
    border: none;
    background-color: var(--bg);
    box-shadow: none;
    margin: 5rem 0 3rem;
    font-size: 2.25rem;
    text-align: center;
    letter-spacing: 0.5vw;
    cursor: default;
    transition: all 0.5s, 2s;
    color: var(--bg);
    text-shadow: 1px 0 2px var(--white), 0 25px 2px var(--green), -1px 0 2px var(--white), 0 -25px 2px var(--mint);
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
    justify-items: center;
    .card {
      border: none;
      box-shadow: none;
      display: block;
      padding: 0;
      width: 300px;
      height: 400px;
      opacity: 1;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .overlay-spheres, .overlay-the-dapper-diaper, .overlay-day-of-pi, .overlay-delightful-cakes, .overlay-caring-hands, .overlay-city-church, .overlay-hearthstone, .overlay-decision-institute, .overlay-holtz-landscaping, .overlay-standard-city-church  {
      background-color: rgba(0,0,0,0.5);
      width: 300px;
      height: 400px;
      position: absolute;
      outline: 2px dotted var(--white);
      transition: all 0.25s ease-in-out;
      opacity: 1;
    }
    h3 {
      margin-top: 7rem;
      color: var(--white);
      text-align: center;
      text-transform: uppercase;
      font-size: 2.5rem;
    }
    p {
      min-height: 10rem;
      padding: 2rem;
      color: var(--white);
      font-size: 1.5rem;
      text-align: center;
    }
    .buttonesque {
      display: block;
      max-width: calc(100% - 10rem);
      margin: 0 auto;
      padding: 2rem 3rem;
      background-color: var(--green);
      color: var(--white);
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
      border-radius: 2rem;
      transition: all 0.25s ease-in-out;
      &:hover {
        background-color: var(--white);
        color: var(--green);
      }
    }
  }

  @media only screen and (max-width: 1045px) {
    .gridContainer {
      grid-template-columns: repeat(2, minmax(auto, 1fr));
    }
  }
  @media only screen and (max-width: 900px) {
    width: calc(100vw - 50px);
    margin-left: 50px;
  }
  @media only screen and (max-width: 820px) {
    button.welcomeContainer, button.welcome {
      font-size: 5rem;
    }
    button.origin, button.website {
      font-size: 1.5rem;
    }
  }
  @media only screen and (max-width: 585px) {
    button.welcomeContainer, button.welcome {
      font-size: 5rem;
    }
    button.origin, button.website {
      font-size: 1.24rem;
    }
  }
  @media only screen and (max-width: 675px) {
    .gridContainer {
      grid-template-columns: repeat(1, minmax(auto, 1fr));
    }
  }
  .hidden {
    display: none;
  }
`;

const MobileHomeStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  width: calc(100vw - 50px);
  margin-left: 50px;
  .inline {
    display: inline-flex;
  }
  .center {
    justify-content: center;
  }
  button.welcomeContainer {
    width: 100%;
    border: none;
    background-color: var(--bg);
    box-shadow: none;
    margin: 5rem 0 0;
    padding-left: 4rem;
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
    color: var(--bg);
    text-shadow: 1px 0 2px var(--white), 0 25px 2px var(--green), -1px 0 2px var(--white), 0 -25px 2px var(--mint);
    font-weight: 100;
    letter-spacing: 5vw;
    cursor: default;
    transition: all 0.5s, 2s;
  }
  button.welcome {
    width: 100%;
    border: none;
    background-color: var(--bg);
    box-shadow: none;
    margin: 5rem 0 0;
    padding-left: 4rem;
    text-transform: uppercase;
    text-align: center;
    font-size: 3rem;
    font-weight: 100;
    letter-spacing: 5vw;
    cursor: default;
    transition: all 0.5s, 2s;
    text-shadow: none;
    color: var(--white);
  }
  button.origin {
    width: 100%;
    border: none;
    background-color: var(--bg);
    box-shadow: none;
    margin: 1rem 0;
    font-size: 1rem;
    text-shadow: none;
    color: var(--white);
    text-align: center;
    letter-spacing: 0.5vw;
    cursor: default;
    transition: all 0.5s, 2s;
  }
  button.website {
    width: 100%;
    border: none;
    background-color: var(--bg);
    box-shadow: none;
    margin: 1rem 0;
    font-size: 1rem;
    text-align: center;
    letter-spacing: 0.5vw;
    cursor: default;
    transition: all 0.5s, 2s;
    color: var(--bg);
    text-shadow: 1px 0 2px var(--white), 0 25px 2px var(--green), -1px 0 2px var(--white), 0 -25px 2px var(--mint);
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
    grid-template-columns: repeat(1, minmax(auto, 1fr));
    gap: 2rem;
    justify-items: center;
    .card {
      border: none;
      box-shadow: none;
      display: block;
      padding: 0;
      width: 300px;
      height: 400px;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .overlay-spheres, .overlay-the-dapper-diaper, .overlay-day-of-pi, .overlay-delightful-cakes, .overlay-caring-hands, .overlay-city-church, .overlay-hearthstone, .overlay-decision-institute, .overlay-holtz-landscaping, .overlay-standard-city-church {
      background-color: rgba(0,0,0,0.5);
      width: 300px;
      height: 400px;
      position: absolute;
      outline: 2px dotted var(--white);
      opacity: 1;
      transition: all 0.25s ease-in-out;
    }
    h3 {
      margin-top: 7rem;
      color: var(--white);
      text-align: center;
      text-transform: uppercase;
      font-size: 2.5rem;
    }
    p {
      min-height: 10rem;
      padding: 2rem;
      color: var(--white);
      font-size: 1.5rem;
      text-align: center;
    }
    .buttonesque {
      display: block;
      max-width: calc(100% - 10rem);
      margin: 0 auto;
      padding: 2rem 3rem;
      background-color: var(--green);
      color: var(--white);
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
      border-radius: 2rem;
      transition: all 0.25s ease-in-out;
      &:hover {
        background-color: var(--white);
        color: var(--green);
      }
    }
  }
  @media only screen and (max-width: 350px) {
    .gridContainer {
      .card {
        width: 250px;
      }
      .overlay-spheres, .overlay-the-dapper-diaper, .overlay-day-of-pi, .overlay-delightful-cakes, .overlay-caring-hands, .overlay-city-church, .overlay-hearthstone, .overlay-decision-institute, .overlay-holtz-landscaping, .overlay-standard-city-church {
        width: 250px;
      }
      .buttonesque {
        padding: 1rem 3rem;
      }
    }
  }
  @media only screen and (max-width: 420px) {
    .explanation p {
      font-size: 1.2rem;
    }
    button.origin, button.website {
      font-size: 0.6rem;
    }
  }
  .hidden {
    display: none;
  }

`;

export default function HomePage({ data }) {
  const sites = data.sites.nodes;
  // const tags = data.tags.nodes;
  const [welcome, setWelcome] = useState(false);
  const [website, setWebsite] = useState(false);
  const [cards, setCards] = useState(false);
  return (
    <>
      <Seo title="Services - Home Page" />
      <HomeStyles>
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
        <button 
          type="button" 
          onClick={() => setWelcome(old => !old)} 
          className={welcome ? `welcome` : `welcomeContainer`}
        >
            Welcome
        </button>
        <button 
          type="button" 
          onClick={() => setWebsite(old => !old)} 
          className={website ? `website` : `origin`}
        >
          <h2>What kind of website do you need?</h2>
        </button>
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
          <p>Tap on a template to see more details.</p>
        </div>
        <div className='gridContainer'>
          {sites.map((site) => (
            <button 
              type="button" 
              onClick={() => setCards(old => !old)}
              className="card"
              key={site.id}
            >
              <div className={cards ? `overlay-${site.slug.current}` : `hidden`} >
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
          </button>
        ))}
        </div>
      </TabletHomeStyles>
      <MobileHomeStyles>
        <button 
          type="button" 
          onClick={() => setWelcome(old => !old)} 
          className={welcome ? `welcome` : `welcomeContainer`}
        >
            Welcome
        </button>
        <button 
          type="button" 
          onClick={() => setWebsite(old => !old)} 
          className={website ? `website` : `origin`}
        >
          <h2>What kind of website do you need?</h2>
        </button>
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
          <p>Tap on a template to see more details.</p>
        </div>
        <div className='gridContainer'>
          {sites.map((site) => (
            <button 
              type="button" 
              onClick={() => setCards(old => !old)}
              className="card"
              key={site.id}
            >
              <div className={cards ? `overlay-${site.slug.current}` : `hidden`} >
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
            </button>
          ))}
        </div>
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
