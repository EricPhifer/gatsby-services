import React from 'react';
import styled from 'styled-components';

import purse from '../assets/images/hearthstone/frilly-purse.jpg';
import keychain from '../assets/images/hearthstone/frog-keychain.jpg';
import honey from '../assets/images/hearthstone/local-honey.jpg';
import owl from '../assets/images/hearthstone/owl-statue.jpg';

const GalleryScrollStyles = styled.div`
    .inline {
      display: inline-flex;
    }
    .flex {
        display: flex;
        flex-flow: column nowrap;
    }
    .center {
      justify-content: center;
    }
    .galleryContainer {
        width: 100%;
        height: 40rem;
        position: relative;
    }
    .galleryOverlay {
        width: 100%;
        height: 100%;
        position: absolute;
        align-items: center;
        background: none;
        button {
            display: block;
            padding: 0;
            text-shadow: none;
            box-shadow: none;
            color: transparent;
            border-radius: 100%;
        }
        .leftArrow {
            width: 5rem;
            height: 5rem;
            position: absolute;
            left: 1rem;
            background-image: linear-gradient(
                to bottom right,
                darkgray 50%,
                darkorchid 0
            ),
            linear-gradient(to top right, darkorchid 50%, darkgray 0);
            background-size: 50% 100%;
            background-repeat: no-repeat;
            background-position: left, right;
            transform: rotate(-90deg);
            opacity: 0.8;
        }
        .rightArrow {
            width: 5rem;
            height: 5rem;
            position: absolute;
            right: 1rem;
            background-image: linear-gradient(
                to bottom right,
                darkgray 50%,
                darkorchid 0
            ),
            linear-gradient(to top right, darkorchid 50%, darkgray 0);
            background-size: 50% 100%;
            background-repeat: no-repeat;
            background-position: left, right;
            transform: rotate(90deg);
            opacity: 0.8;
        }
    }
    .productContainer {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        align-items: center;
        justify-content: center;
        .product {
            width: 275px;
            height: 275px;
            margin: 0 1rem;
            opacity: 0.7;
            cursor: pointer;
            z-index: 5;
            &:hover {
                opacity: 1;
            }
        }
        .productImg1 {
            width: 100%;
            height: 100%;
            background-image: url(${purse});
            background-size: cover;
            background-repeat: norepeat;
            background-position: center center;
        }
        .productImg2 {
            width: 100%;
            height: 100%;
            background-image: url(${keychain});
            background-size: cover;
            background-repeat: norepeat;
            background-position: center center;
        }
        .productImg3 {
            width: 100%;
            height: 100%;
            background-image: url(${honey});
            background-size: cover;
            background-repeat: norepeat;
            background-position: center center;
        }
        .productImg4 {
            width: 100%;
            height: 100%;
            background-image: url(${owl});
            background-size: cover;
            background-repeat: norepeat;
            background-position: center center;
        }
    }
    /* Hide menu on small screens */
    @media only screen and (max-width: 1080px) {
      display: none;
    }
`;

const TabletGalleryScrollStyles = styled.div`
/* Show compressed menu on small screens */
@media only screen and (min-width: 1081px) {
  display: none;
}
@media only screen and (max-width: 500px) {
  display: none;
}
    width: calc(100vw - 100px);
    margin-left: 100px;
    color: var(--white);
    .inline {
      display: inline-flex;
    }
    .center {
      justify-content: center;
    }
`;

const MobileGalleryScrollStyles = styled.div`
    /* Show compressed menu on small screens */
    @media only screen and (min-width: 501px) {
    display: none;
    }
    width: calc(100vw - 100px);
    margin-left: 100px;
    color: var(--white);
    .inline {
      display: inline-flex;
    }
    .center {
      justify-content: center;
    }
`;

export default function GalleryScroll() {
    return (
        <>
            <GalleryScrollStyles>
                <div className='galleryContainer'>
                    <div className='galleryOverlay inline'>
                        <button type='button' className='leftArrow' />
                        <button type='button' className='rightArrow' />
                    </div>
                    <div className='productContainer inline'>
                        <div className='product'>
                            <div className='productImg1' />
                        </div>
                        <div className='product'>
                            <div className='productImg2' />
                        </div>
                        <div className='product'>
                            <div className='productImg3' />
                        </div>
                        <div className='product'>
                            <div className='productImg4' />
                        </div>
                    </div>
                </div>
            </GalleryScrollStyles>
            <TabletGalleryScrollStyles>
                <p>Coming soon...</p>
            </TabletGalleryScrollStyles>
            <MobileGalleryScrollStyles>
                <p>Coming soon...</p>
            </MobileGalleryScrollStyles>
        </>
    )
}