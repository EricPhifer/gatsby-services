import React, { useState } from 'react';
import styled from 'styled-components';

const CtaStyles = styled.div`
    // Arrow to indicate the element as open or closed
    .triangle {
        width: 25px;
        height: 10px;
        position: absolute;
        left: 0;
        top: 50%;
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
        z-index: 100;
        }
        
    // Toggle CTA open or closed
    #menuToggle {
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
    }
    #menuToggle input {
        display: flex;
        width: 25px;
        height: 82px;
        position: fixed;
        bottom: 25px;
        right: 0;
        cursor: pointer;
        opacity: 0;
        z-index: 101;
    }
    #menuToggle input:checked {
        right: 63vmin;
    }
    #menuToggle .trigger {
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }
    #menu {
        width: 66vmin;
        height: 8rem;
        display: flex;
        justify-content: center;
        position: fixed;
        bottom: 25px;
        right: 0;
        background-color: var(--green);
        box-shadow: 3px 3px 10px var(--black);
        z-index: 99;
        align-items: center;
        transform-origin: 0% 0%;
        transform: translate(calc(100% - 25px), 0%);
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
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
    #menuToggle input:checked ~ div .triangle {
        transform: rotate(90deg);
    }

    // Styling the links as buttons
    .buttonContainer {
        display: flex;
        padding: 2rem;
        a {
            background-color: var(--red);
            color: var(--white);
            padding: 1rem 2rem;
            box-shadow: 3px 3px 10px var(--black);
            text-align: center;
            &:hover {
                background-color: var(--white);
                color: var(--red);
            }
        }
        .first {
            @media only screen and (min-width: 901px) {
                margin-right: 1rem;
            }
            @media only screen and (max-width: 900px) {
                margin-bottom: 1rem;
            }
        }
    }
    @media only screen and (min-height: 486px) and (max-height: 773px) {
        .buttonContainer {
            flex-flow: column;
            .first {
                margin-right: 0;
                margin-bottom: 1rem;
            }
        }
        #menu {
            height: 12rem;
        }
    }
    /* Hide menu on small screens */
    @media only screen and (max-width: 1080px) {
        display: none;
    }
    @media only screen and (max-height: 485px) {
        display: none;
    }
`;

const LandscapeCtaStyles = styled.div`
    // Arrow to indicate the element as open or closed
    .triangle {
        width: 25px;
        height: 10px;
        position: absolute;
        left: 0;
        top: 50%;
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
        z-index: 100;
        }
        
    // Toggle CTA open or closed
    #menuToggle {
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
    }
    #menuToggle input {
        display: flex;
        width: 22px;
        height: 12rem;
        position: fixed;
        bottom: 25px;
        right: 0;
        cursor: pointer;
        opacity: 0;
        z-index: 101;
    }
    #menuToggle input:checked {
        right: 74vmin;
    }
    #menuToggle .trigger {
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }
    #menu {
        width: 80vmin;
        height: 12rem;
        display: flex;
        justify-content: center;
        position: fixed;
        bottom: 25px;
        right: 0;
        background-color: var(--green);
        box-shadow: 3px 3px 10px var(--black);
        z-index: 99;
        align-items: center;
        transform-origin: 0% 0%;
        transform: translate(calc(100% - 22px), 0%);
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
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
    #menuToggle input:checked ~ div .triangle {
        transform: rotate(90deg);
    }
    .buttonContainer {
        display: flex;
        flex-flow: column wrap;
        padding: 2rem;
        a {
            background-color: var(--red);
            color: var(--white);
            padding: 1rem 2rem;
            box-shadow: 3px 3px 10px var(--black);
            text-align: center;
            &:hover {
                background-color: var(--white);
                color: var(--red);
            }
        }
        .first {
            margin-bottom: 1rem;
        }
    }
    /* Show compressed menu on short screens and landscape mode */
    @media only screen and (min-height: 486px) {
        display: none;
    }
    @media only screen and (orientation: portrait) {
        display: none;
    }
`;

const TabletCtaStyles = styled.div`
    // Arrow to indicate the element as open or closed
    .triangle {
        width: 25px;
        height: 10px;
        position: absolute;
        left: 0;
        top: 50%;
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
        z-index: 100;
        }
        
    // Toggle CTA open or closed
    #menuToggle {
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
    }
    #menuToggle input {
        display: flex;
        width: 25px;
        height: 82px;
        position: fixed;
        bottom: 25px;
        right: 0;
        cursor: pointer;
        opacity: 0;
        z-index: 101;
    }
    #menuToggle input:checked {
        right: 63vmin;
    }
    #menuToggle .trigger {
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }
    #menu {
        width: 66vmin;
        height: 8rem;
        display: flex;
        justify-content: center;
        position: fixed;
        bottom: 25px;
        right: 0;
        background-color: var(--green);
        box-shadow: 3px 3px 10px var(--black);
        z-index: 99;
        align-items: center;
        transform-origin: 0% 0%;
        transform: translate(calc(100% - 25px), 0%);
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
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
    #menuToggle input:checked ~ div .triangle {
        transform: rotate(90deg);
    }
    .buttonContainer {
        display: flex;
        padding: 2rem;
        a {
            background-color: var(--red);
            color: var(--white);
            padding: 1rem 2rem;
            box-shadow: 3px 3px 10px var(--black);
            text-align: center;
            &:hover {
                background-color: var(--white);
                color: var(--red);
            }
        }
        .first {
            @media only screen and (min-width: 901px) and (max-height: 774px) {
                margin-right: 1rem;
            }
            @media only screen and (max-width: 900px) and (min-height: 775px){
                margin-bottom: 1rem;
            }
        }
    }
    @media only screen and (max-width: 900px) {
        #menu {
            width: 30rem;
            height: 13rem;
            transform: translate(calc(100% - 22px), 0%);
        }
        #menuToggle input {
            width: 22px;
            height: 131px;
        }
        #menuToggle input:checked {
            right: 28rem;
        }
        .buttonContainer {
            flex-flow: column wrap;
        }
    }
    /* Show compressed footer on small screens */
    @media only screen and (min-width: 1081px) {
        display: none;
    }
    @media only screen and (max-width: 500px) {
        display: none;
    }
    @media only screen and (max-height: 485px) {
        display: none;
    }
    @media only screen and (min-height: 486px) and (max-height: 773px) {
        .buttonContainer {
            flex-flow: column;
            .first {
                margin-bottom: 1rem;
            }
        }
        #menu {
            height: 12rem;
        }
    }
`;

const MobileCtaStyles = styled.div`
    // Arrow to indicate the element as open or closed
    .triangle {
        width: 25px;
        height: 10px;
        position: absolute;
        left: 0;
        top: 50%;
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
        z-index: 100;
        }
        
    // Toggle CTA open or closed
    #menuToggle {
        z-index: 1;
        -webkit-user-select: none;
        user-select: none;
    }
    #menuToggle input {
        display: flex;
        width: 22px;
        height: 131px;
        position: fixed;
        bottom: 25px;
        right: 0;
        cursor: pointer;
        opacity: 0;
        z-index: 101;
    }
    #menuToggle input:checked {
        right: 28rem;
    }
    #menuToggle .trigger {
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }
    #menu {
        width: 30rem;
        height: 13rem;
        display: flex;
        justify-content: center;
        position: fixed;
        bottom: 25px;
        right: 0;
        background-color: var(--green);
        box-shadow: 3px 3px 10px var(--black);
        z-index: 99;
        align-items: center;
        transform-origin: 0% 0%;
        transform: translate(calc(100% - 22px), 0%);
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
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
    #menuToggle input:checked ~ div .triangle {
        transform: rotate(90deg);
    }
    .buttonContainer {
        display: flex;
        flex-flow: column wrap;
        padding: 2rem;
        a {
            background-color: var(--red);
            color: var(--white);
            padding: 1rem 2rem;
            box-shadow: 3px 3px 10px var(--black);
            text-align: center;
            &:hover {
                background-color: var(--white);
                color: var(--red);
            }
        }
        .first {
            @media only screen and (min-width: 901px) {
                margin-right: 1rem;
            }
            @media only screen and (max-width: 900px) {
                margin-bottom: 1rem;
            }        
        }
    }
    @media only screen and (max-width: 400px) {
        #menu {
            width: 24rem;
            height: 14rem;
            transform: translate(calc(100% - 20px), 0%);
        }
        #menuToggle input {
            width: 20px;
            height: 14rem;
            &:checked {
                right: 22rem;
            }
        }

    }
  /* Show compressed menu on small screens */
  @media only screen and (min-width: 501px) {
    display: none;
  }
  @media only screen and (max-height: 485px) {
    display: none;
  }

`;


export default function Cta() {
    const [open, setOpen] = useState(true);
  return (
    <>
        <CtaStyles>
            <div className='toggle' id='menuToggle'>
                <input 
                    type="checkbox" 
                    checked={open}
                    onClick={() => {setOpen(old => !old)}} 
                />
                <div className='menuContainer' id='menu'>
                    <div className='triangle trigger' />
                    <div className='buttonContainer'>
                        <a 
                            href='https://ericphifer.com/contact' 
                            className='buttonesque first' 
                        >
                            Have Questions? Contact Me
                        </a>
                        <a 
                            href='' 
                            className='buttonesque' 
                            rel='noreferrer noopener'
                        >
                            Build this Site for Me
                        </a>
                    </div>
                </div>
            </div>
        </CtaStyles>
        <LandscapeCtaStyles>
            <div className='toggle' id='menuToggle'>
                <input 
                    type="checkbox" 
                    checked={open}
                    onClick={() => {setOpen(old => !old)}} 
                />
                <div className='menuContainer' id='menu'>
                    <div className='triangle trigger' />
                    <div className='buttonContainer'>
                        <a 
                            href='https://ericphifer.com/contact' 
                            className='buttonesque first' 
                        >
                            Have Questions? Contact Me
                        </a>
                        <a 
                            href='' 
                            className='buttonesque' 
                            rel='noreferrer noopener'
                        >
                            Build this Site for Me
                        </a>
                    </div>
                </div>
            </div>
        </LandscapeCtaStyles>
        <TabletCtaStyles>
            <div className='toggle' id='menuToggle'>
                <input 
                    type="checkbox" 
                    checked={open}
                    onClick={() => {setOpen(old => !old)}} 
                />
                <div className='menuContainer' id='menu'>
                    <div className='triangle trigger' />
                    <div className='buttonContainer'>
                        <a 
                            href='https://ericphifer.com/contact' 
                            className='buttonesque first' 
                        >
                            Have Questions? Contact Me
                        </a>
                        <a 
                            href='' 
                            className='buttonesque' 
                            rel='noreferrer noopener'
                        >
                            Build this Site for Me
                        </a>
                    </div>
                </div>
            </div>
        </TabletCtaStyles>
        <MobileCtaStyles>
            <div className='toggle' id='menuToggle'>
                <input 
                    type="checkbox" 
                    checked={open}
                    onClick={() => {setOpen(old => !old)}} 
                />
                <div className='menuContainer' id='menu'>
                    <div className='triangle trigger' />
                    <div className='buttonContainer'>
                        <a href='https://ericphifer.com/contact' 
                        className='buttonesque first' 
                        rel='noreferrer noopener'>
                            Have Questions? Contact Me
                        </a>
                        <a href='' 
                        className='buttonesque' 
                        rel='noreferrer noopener'>
                            Build this Site for Me
                        </a>
                    </div>
                </div>
            </div>
        </MobileCtaStyles>
    </>
  );
}
