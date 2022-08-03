import React, { useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import SanityImage from 'gatsby-plugin-sanity-image';

const NavStyles = styled.div`
  height: 100vh;
  width: 100px;
  position: absolute;
  display: fixed;
  left: 0;
  background-color: var(--green);
  color: var(--white);
  z-index: 10;
  .inline {
    display: inline-flex;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    margin-left: 1rem;
    align-items: center;
  }
  .navContainer {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .logo {
    width: 100px;
    position: absolute;
    top: 1rem;
  }
  nav {
    margin-top: 12rem;
  }
  .footer {
    width: 50px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      padding: 1rem 0;
    }
  }
  a {
    color: var(--white);
    font-weight: bold;
    &:hover {
      color: var(--red);
    }
    &[aria-current='page'] {
      color: var(--red);
    }
  }
  .triangle {
    width: 25px;
    height: 10px;
    background-image: linear-gradient(
        to bottom right,
        transparent 50%,
        var(--white) 0
      ),
      linear-gradient(to top right, var(--white) 50%, transparent 0);
    background-size: 50% 100%;
    background-repeat: no-repeat;
    background-position: left, right;
    transform: rotate(-90deg);
  }

  // Footer Toggling
  #menuToggle {
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  #menuToggle input {
    display: flex;
    width: 75px;
    height: 75px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }
  #menuToggle .trigger {
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  #menu {
    width: 100vw;
    height: 60px;
    margin: 0;
    position: absolute;
    bottom: 0;
    left: -100vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: var(--green);
    transform-origin: 0% 0%;
    transform: translate(100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    overflow-y: auto;
    z-index: -1;
  }
  #menu li {
    position: relative;
    transition-delay: 2s;
    padding: 0;
  }
  #menu button {
    background-color: transparent;
    margin: 0;
    padding: 0 2rem;
    box-shadow: none;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  #menuToggle input:checked ~ .triangle {
    transform: rotate(90deg);
  }

  // Footer Expansion
  .footerContainer {
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    .inline {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .column {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }
    .footerCredits {
      margin: 1.1rem 2.5rem;
      a {
        display: flex;
        color: #fff;
        padding: 0.5rem;
      }
    }
    .privTerms a {
      line-height: 0.7;
      border-left: 1px solid var(--black);
      border-right: 1px solid var(--black);
    }
    .linkParser li {
      padding: 0.2rem 0.8rem;
    }
    a:hover {
      color: var(--red);
    }
    a[aria-current='page'] {
      border-bottom: 1px solid var(--red);
    }
  }
  /* Hide menu on small screens */
  @media only screen and (max-width: 900px) {
    display: none;
  }
  @media only screen and (max-height: 485px) {
    display: none;
  }
`;

const LandscapeNavStyles = styled.div`
/* Show compressed menu on short screens and landscape mode */
@media only screen and (min-height: 486px) {
  display: none;
}
@media only screen and (orientation: portrait) {
  display: none;
}
height: 100vh;
width: 50px;
position: absolute;
display: fixed;
left: 0;
background-color: var(--green);
color: var(--white);
z-index: 10;
.inline {
  display: inline-flex;
}
.navigation li {
  padding: 2rem 0 0;
}
.bottom {
  position: fixed;
  bottom: 0;
  margin-left: 1rem;
  align-items: center;
}
.navContainer {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}
.logo {
  width: 50px;
  position: absolute;
  z-index: 7;
  top: 1rem;
}
nav {
  margin-top: 7rem;
}
.footer {
  width: 25px;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    padding: 1rem 0;
  }
}
a {
  display: flex;
  justify-content: space-evenly;
  color: var(--white);
  font-weight: bold;
  &:hover {
    color: var(--red);
  }
  &[aria-current='page'] {
    color: var(--red);
  }
}
.triangle {
  width: 15px;
  height: 5px;
  background-image: linear-gradient(
      to bottom right,
      transparent 50%,
      var(--white) 0
    ),
    linear-gradient(to top right, var(--white) 50%, transparent 0);
  background-size: 50% 100%;
  background-repeat: no-repeat;
  background-position: left, right;
  transform: rotate(-90deg);
}

// Menu Toggling
#menuToggle {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 75px;
  left: 8px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}
#menuToggle input {
  display: flex;
  width: 40px;
  height: 40px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  top: -19px;
  left: -1px;
}
#menuToggle span {
  display: flex;
  position: relative;
  width: 32px;
  height: 3px;
  margin-bottom: 4px;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 5px 0;
  background: #fff;
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
  transform: rotate(45deg) translate(-4px, -9px);
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
  width: 100px;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  box-shadow: 0 0 10px #85888c;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0%);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  overflow-y: auto;
  background-color: var(--green);
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

// Footer Toggling
#footerToggle {
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}
#footerToggle input {
  display: flex;
  width: 50px;
  height: 50px;
  position: absolute;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}
#footerToggle .trigger {
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
  background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}
#footer {
  width: 100vw;
  height: 60px;
  margin: 0;
  position: absolute;
  bottom: 0;
  left: -100vw;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: var(--green);
  transform-origin: 0% 0%;
  transform: translate(100%, 0%);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  overflow-y: auto;
  z-index: -1;
}
#footer li {
  position: relative;
  transition-delay: 2s;
}
#footer button {
  background-color: transparent;
  margin: 0;
  padding: 0 2rem;
  box-shadow: none;
}
#footerToggle input:checked ~ .footerContainer {
  transform: none;
}
#footerToggle input:checked ~ .triangle {
  transform: rotate(90deg);
}

// Footer Expansion
.footerContainer {
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
  .inline {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .column {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  .footerCredits {
    margin: 1rem 2.5rem;
    font-size: 1.1rem;
    a {
      display: flex;
      color: #fff;
      padding: 0.5rem;
    }
    li {
      padding: 0;
    }
  }
  .privTerms a {
    line-height: 0.7;
    border-left: 1px solid var(--black);
    border-right: 1px solid var(--black);
  }
  .linkParser li {
    padding: 0.2rem 0.8rem;
  }
  a:hover {
    color: var(--red);
  }
  a[aria-current='page'] {
    border-bottom: 1px solid var(--red);
  }
}
`;

const TabletNavStyles = styled.div`
  /* Show compressed footer on small screens */
  @media only screen and (min-width: 901px) {
    display: none;
  }
  @media only screen and (max-width: 500px) {
    display: none;
  }
  @media only screen and (max-height: 485px) {
    display: none;
  }
  height: 100vh;
  width: 100px;
  position: absolute;
  display: fixed;
  left: 0;
  background-color: var(--green);
  color: var(--white);
  z-index: 10;
  .inline {
    display: inline-flex;
  }
  .bottom {
    position: fixed;
    bottom: 0;
    margin-left: 2rem;
    align-items: center;
  }
  .navContainer {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .logo {
    width: 100px;
    position: absolute;
    top: 1rem;
  }
  nav {
    margin-top: 12rem;
  }
  .footer {
    width: 50px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      padding: 1rem 0;
    }
  }
  a {
    display: flex;
    justify-content: space-evenly;
    color: var(--white);
    font-weight: bold;
    &:hover {
      color: var(--red);
    }
    &[aria-current='page'] {
      color: var(--red);
    }
  }
  .triangle {
    width: 25px;
    height: 10px;
    background-image: linear-gradient(
        to bottom right,
        transparent 50%,
        var(--white) 0
      ),
      linear-gradient(to top right, var(--white) 50%, transparent 0);
    background-size: 50% 100%;
    background-repeat: no-repeat;
    background-position: left, right;
    transform: rotate(-90deg);
  }

  // Menu Toggling
  #menuToggle {
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  #menuToggle input {
    display: flex;
    width: 75px;
    height: 75px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }
  #menuToggle .trigger {
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  #menu {
    width: 100vw;
    height: 60px;
    margin: 0;
    position: absolute;
    bottom: 0;
    left: -100vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: var(--green);
    transform-origin: 0% 0%;
    transform: translate(100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    overflow-y: auto;
    z-index: -1;
  }
  #menu li {
    position: relative;
    transition-delay: 2s;
  }
  #menu button {
    background-color: transparent;
    margin: 0;
    padding: 0 2rem;
    box-shadow: none;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  #menuToggle input:checked ~ .triangle {
    transform: rotate(90deg);
  }

  // Footer Expansion
  .footerContainer {
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    .inline {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .column {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }
    .footerCredits {
      margin: 1.1rem 2.5rem;
      a {
        display: flex;
        color: #fff;
        padding: 0.5rem;
      }
      li {
        padding: 0;
      }
    }
    .privTerms a {
      line-height: 0.7;
      border-left: 1px solid var(--black);
      border-right: 1px solid var(--black);
    }
    .linkParser li {
      padding: 0.2rem 0.8rem;
    }
    a:hover {
      color: var(--red);
    }
    a[aria-current='page'] {
      border-bottom: 1px solid var(--red);
    }
  }
  @media only screen and (max-width: 900px) {
    width: 50px;
    .navigation li {
      transform: rotate(-90deg);
      padding: 4rem 0;
    }
    nav {
      margin-top: 5rem;
    }
    .logo {
      width: 50px;
    }
    #menuToggle {
      margin-left: 1rem;
    }
    .footer {
      width: 25px;
    }
    .triangle {
      width: 15px;
      height: 5px;
    }
    input {
      width: 50px;
      height: 50px;
    }
  }
`;

const MobileNavStyles = styled.div`
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  @media only screen and (max-height: 485px) {
    display: none;
  }
  height: 100vh;
  width: 50px;
  position: absolute;
  display: fixed;
  left: 0;
  background-color: var(--green);
  color: var(--white);
  z-index: 10;
  .inline {
    display: inline-flex;
  }
  .navigation li {
    height: 60px;
    transform: rotate(-90deg);
    padding: 4rem 0 0;
  }
  .bottom {
    position: fixed;
    bottom: 0;
    margin-left: 1rem;
    align-items: center;
  }
  .navContainer {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .logo {
    width: 50px;
    position: absolute;
    top: 1rem;
  }
  nav {
    margin-top: 5rem;
  }
  .footer {
    width: 25px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      padding: 1rem 0;
    }
  }
  a {
    display: flex;
    justify-content: space-evenly;
    color: var(--white);
    font-weight: bold;
    &:hover {
      color: var(--red);
    }
    &[aria-current='page'] {
      color: var(--red);
    }
  }
  .triangle {
    width: 15px;
    height: 5px;
    background-image: linear-gradient(
        to bottom right,
        transparent 50%,
        var(--white) 0
      ),
      linear-gradient(to top right, var(--white) 50%, transparent 0);
    background-size: 50% 100%;
    background-repeat: no-repeat;
    background-position: left, right;
    transform: rotate(-90deg);
  }

  // Menu Toggling
  #menuToggle {
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }
  #menuToggle input {
    display: flex;
    width: 50px;
    height: 50px;
    position: absolute;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }
  #menuToggle .trigger {
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  #menu {
    width: 100vw;
    height: 60px;
    margin: 0;
    position: absolute;
    bottom: 0;
    left: -100vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: var(--green);
    transform-origin: 0% 0%;
    transform: translate(100%, 0%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    overflow-y: auto;
    z-index: -1;
  }
  #menu li {
    position: relative;
    transition-delay: 2s;
  }
  #menu button {
    background-color: transparent;
    margin: 0;
    padding: 0 2rem;
    box-shadow: none;
  }
  #menuToggle input:checked ~ .menuContainer {
    transform: none;
  }
  #menuToggle input:checked ~ .triangle {
    transform: rotate(90deg);
  }

  // Footer Expansion
  .footerContainer {
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
    }
    .inline {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .column {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }
    .footerCredits {
      margin: 1rem 2.5rem;
      font-size: 1.1rem;
      a {
        display: flex;
        color: #fff;
        padding: 0.5rem;
      }
      li {
        padding: 0;
      }
    }
    .privTerms a {
      line-height: 0.7;
      border-left: 1px solid var(--black);
      border-right: 1px solid var(--black);
    }
    .linkParser li {
      padding: 0.2rem 0.8rem;
    }
    a:hover {
      color: var(--red);
    }
    a[aria-current='page'] {
      border-bottom: 1px solid var(--red);
    }
  }
`;


export default function Nav() {
  const { navigation } = useStaticQuery(graphql`
    query {
      navigation: allSanityNavigation {
          nodes {
            id
            mainalt
            footeralt
            externallinks {
              pagelink
              _key
              pagename
            }
            nativelinks {
              pagename
              pagelink
              _key
            }
            mainlogo {
              asset {
                id
              }
              ...ImageWithPreview
            }
            footericon {
              asset {
                id
              }
              ...ImageWithPreview
            }
          }
        }
      }
  `)

const nodes = navigation.nodes;
const [checked, setChecked] = useState(true || '');
const [menuchecked, setMenuChecked] = useState(true || '');
const [footerchecked, setFooterChecked] = useState(true || '');
const fixedNav = {
  position: "fixed",
}
  return (
    <>
      {nodes.map((node) => (
        <div className="nodeParser" style={ fixedNav } key={node.id}>
          <NavStyles>
            <div className="navContainer">
              <div className="logo">
                <SanityImage 
                  {...node.mainlogo}
                  alt={node.mainalt}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </div>
              <nav>
                <ul className='navigation'>
                  <a href="https://ericphifer.com">
                    <li>Portfolio</li>
                  </a>
                  <a href="https://ericphifer.com/contact" rel="noreferrer">
                    <li>Contact</li>
                  </a>
                  <Link to="/">
                    <li>Services</li>
                  </Link>
                  {/* <a href="https://blog.ericphifer.com" rel="noreferrer">
                    <li>Blog</li>
                  </a> */}
                </ul>
              </nav>
                <div className='inline bottom' id="menuToggle">
                  <input 
                    type="checkbox" 
                    checked={checked}
                    onClick={() => {setChecked(old => !old)}} 
                  />
                  <div className='footer trigger'>
                    <SanityImage 
                      {...node.footericon}
                      alt={node.footeralt}
                      style={{
                        objectFit: 'cover',
                        auto: 'format',
                      }}
                      />
                  </div>
                  <div className='triangle trigger' />
                  <div id="menu" className="menuContainer">
                    <div className="footerContainer" key={node.id}>
                    <ul className="footerCredits column">
                        <li>
                          &copy; Eric Phifer LLC {new Date().getFullYear()}
                        </li>
                        <li>
                          <li className="inline privTerms">
                            <Link to='/privacypolicy'>
                                Privacy Policy
                            </Link> 
                            <Link to='/termsconditions'>
                                Terms &amp; Conditions
                            </Link> 
                          </li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </NavStyles>
          <LandscapeNavStyles>
            <div className="navContainer">
              <div className="logo">
                <SanityImage 
                  {...node.mainlogo}
                  alt={node.mainalt}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </div>
              <div id="menuToggle">
                <input 
                  type="checkbox" 
                  checked={menuchecked}
                  onClick={() => {setMenuChecked(old => !old)}} 
                  />
                <span />
                <span />
                <span />
                <div id="menu" className='menuContainer'>
                  <nav>
                    <ul className='navigation'>
                      <a href="https://ericphifer.com" rel="noreferrer">
                        <li>Portfolio</li>
                      </a>
                      <a href="https://ericphifer.com/contact" rel="noreferrer">
                        <li>Contact</li>
                      </a>
                      <Link to="/">
                        <li>Services</li>
                      </Link>
                      {/* <a href="https://blog.ericphifer.com" rel="noreferrer">
                        <li>Blog</li>
                      </a> */}
                    </ul>
                  </nav> 
                </div>
              </div>
                <div className='inline bottom' id="footerToggle">
                  <input 
                    type="checkbox" 
                    checked={footerchecked}
                    onClick={() => {setFooterChecked(old => !old)}} 
                    className='bottom'
                  />
                  <div className='footer trigger'>
                    <SanityImage 
                      {...node.footericon}
                      alt={node.footeralt}
                      style={{
                        objectFit: 'cover',
                        auto: 'format',
                      }}
                      />
                  </div>
                  <div className='triangle trigger' />
                  <div id="footer" className="footerContainer">
                  <div className="footerContainer" key={node.id}>
                    <ul className="footerCredits column">
                        <li>
                          &copy; Eric Phifer LLC {new Date().getFullYear()}
                        </li>
                        <li>
                          <li className="inline privTerms">
                            <Link to='/privacypolicy'>
                                Privacy Policy
                            </Link> 
                            <Link to='/termsconditions'>
                                Terms &amp; Conditions
                            </Link> 
                          </li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </LandscapeNavStyles>
          <TabletNavStyles>
            <div className="navContainer">
              <div className="logo">
                <SanityImage 
                  {...node.mainlogo}
                  alt={node.mainalt}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </div>
              <nav>
                <ul className='navigation'>
                  <a href="https://ericphifer.com" rel="noreferrer">
                    <li>Portfolio</li>
                  </a>
                  <a href="https://ericphifer.com/contact" rel="noreferrer">
                    <li>Contact</li>
                  </a>
                  <Link to="/">
                    <li>Services</li>
                  </Link>
                  {/* <a href="https://blog.ericphifer.com" rel="noreferrer">
                    <li>Blog</li>
                  </a> */}
                </ul>
              </nav>
                <div className='inline bottom' id="menuToggle">
                  <input 
                    type="checkbox" 
                    checked={checked}
                    onClick={() => {setChecked(old => !old)}} 
                  />
                  <div className='footer trigger'>
                    <SanityImage 
                      {...node.footericon}
                      alt={node.footeralt}
                      style={{
                        objectFit: 'cover',
                        auto: 'format',
                      }}
                      />
                  </div>
                  <div className='triangle trigger' />
                  <div id="menu" className="menuContainer">
                  <div className="footerContainer" key={node.id}>
                    <ul className="footerCredits column">
                        <li>
                          &copy; Eric Phifer LLC {new Date().getFullYear()}
                        </li>
                        <li>
                          <li className="inline privTerms">
                            <Link to='/privacypolicy'>
                                Privacy Policy
                            </Link> 
                            <Link to='/termsconditions'>
                                Terms &amp; Conditions
                            </Link> 
                          </li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </TabletNavStyles>
          <MobileNavStyles>
            <div className="navContainer">
              <div className="logo">
                <SanityImage 
                  {...node.mainlogo}
                  alt={node.mainalt}
                  style={{
                    objectFit: 'cover',
                    auto: 'format',
                  }}
                />
              </div>
              <nav>
                <ul className='navigation'>
                  <a href="https://ericphifer.com" rel="noreferrer">
                    <li>Portfolio</li>
                  </a>
                  <a href="https://ericphifer.com/contact" rel="noreferrer">
                    <li>Contact</li>
                  </a>
                  <Link to="/">
                    <li>Services</li>
                  </Link>
                  {/* <a href="https://blog.ericphifer.com" rel="noreferrer">
                    <li>Blog</li>
                  </a> */}
                </ul>
              </nav>
                <div className='inline bottom' id="menuToggle">
                  <input 
                    type="checkbox" 
                    checked={checked}
                    onClick={() => {setChecked(old => !old)}} 
                    className='bottom'
                  />
                  <div className='footer trigger'>
                    <SanityImage 
                      {...node.footericon}
                      alt={node.footeralt}
                      style={{
                        objectFit: 'cover',
                        auto: 'format',
                      }}
                      />
                  </div>
                  <div className='triangle trigger' />
                  <div id="menu" className="menuContainer">
                  <div className="footerContainer" key={node.id}>
                    <ul className="footerCredits column">
                        <li>
                          &copy; Eric Phifer LLC {new Date().getFullYear()}
                        </li>
                        <li>
                          <li className="inline privTerms">
                            <Link to='/privacypolicy'>
                                Privacy Policy
                            </Link> 
                            <Link to='/termsconditions'>
                                Terms &amp; Conditions
                            </Link> 
                          </li>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </MobileNavStyles>
        </div>
      ))} 
    </>
  );
}
