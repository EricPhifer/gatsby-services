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
    button {
        display: block;
        padding: 0;
        text-shadow: none;
        box-shadow: none;
        color: transparent;
        border-radius: 100%;
    }
    .productContainer {
        max-width: 1080px;
        height: 100%;
        margin: 0 auto;
        padding: 1.5rem;
        display: grid;
        grid-template-columns: repeat(4, minmax(auto, 1fr));
        gap: 1.5rem;
        .product {
            height: 275px;
            opacity: 0.7;
            cursor: pointer;
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

    button {
        display: block;
        padding: 0;
        text-shadow: none;
        box-shadow: none;
        color: transparent;
        border-radius: 100%;
    }
  .productContainer {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(3, minmax(auto, 1fr));
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
  @media only screen and (max-width: 900px) {
      .productContainer {
          .product {
              height: 15rem;
          }
      }
  } 
    /* Show compressed menu on small screens */
    @media only screen and (min-width: 1081px) {
    display: none;
    }
    @media only screen and (max-width: 500px) {
    display: none;
    }
`;

const MobileGalleryScrollStyles = styled.div`
    /* Show compressed menu on small screens */
    @media only screen and (min-width: 501px) {
    display: none;
    }
`;

export default function GalleryScroll() {
    return (
        <>
            <GalleryScrollStyles>
                <div className='galleryContainer'>
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
                <div className='galleryContainer'>
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
            </TabletGalleryScrollStyles>
            <MobileGalleryScrollStyles>
                <div className='galleryContainer'>
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
            </MobileGalleryScrollStyles>
        </>
    )
}