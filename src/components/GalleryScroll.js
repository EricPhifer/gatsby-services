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
    .infoOverlay {
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(0,0,0,0.5);
        color: var(--white);
        opacity: 0;
        h3 {
            margin-top: 7rem;
            text-align: center;
            font-size: 2.5rem;
        }
        p {
            padding: 0 1rem;
        }
        &:hover {
            opacity: 1;
        }
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
            width: 275px;
            height: 275px;
            position: relative;
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
                    <div className='productContainer'>
                        <div className='product'>
                            <div className='infoOverlay'>
                                <h3>Skirt Purse</h3>
                                <p>The skirt purse is a fun flashback to girlhood. A great gift for your daughter, niece or friend!</p>
                            </div>
                            <div className='productImg1' />
                        </div>
                        <div className='product'>
                            <div className='infoOverlay'>
                                <h3>Frog Bag</h3>
                                <p>Frog bags show great personality and are surprisingly roomy.</p>
                            </div>
                            <div className='productImg2' />
                        </div>
                        <div className='product'>
                            <div className='infoOverlay'>
                                <h3>Local Preserves</h3>
                                <p>These delicious jams, jelly's, honey's and butter's are from all over the Grand Valley. Try them all!</p>
                            </div>
                            <div className='productImg3' />
                        </div>
                        <div className='product'>
                            <div className='infoOverlay'>
                                <h3>Owl Statues</h3>
                                <p>These adorable statues are an excellent addition to any household, whether collector or homemaker. Hoo are you to not like them!</p>
                            </div>
                            <div className='productImg4' />
                        </div>
                    </div>
                </div>
            </GalleryScrollStyles>
            <TabletGalleryScrollStyles>
                <div className='galleryContainer'>
                    <div className='productContainer'>
                        <div className='product'>
                            <div className='infoOverlay'>
                                <p></p>
                            </div>
                            <div className='productImg1' />
                        </div>
                        <div className='product'>
                            <div className='infoOverlay'>
                                <p></p>
                            </div>
                            <div className='productImg2' />
                        </div>
                        <div className='product'>
                            <div className='infoOverlay'>
                                <p></p>
                            </div>
                            <div className='productImg3' />
                        </div>
                        <div className='product'>
                            <div className='infoOverlay'>
                                <p></p>
                            </div>
                            <div className='productImg4' />
                        </div>
                    </div>
                </div>
            </TabletGalleryScrollStyles>
            <MobileGalleryScrollStyles>
                <div className='galleryContainer'>
                    <div className='productContainer'>
                        <div className='product'>
                            <div className='infoOverlay'>
                                <p></p>
                            </div>
                            <div className='productImg1' />
                        </div>
                        <div className='product'>
                            <div className='infoOverlay'>
                                <p></p>
                            </div>
                            <div className='productImg2' />
                        </div>
                        <div className='product'>
                            <div className='infoOverlay'>
                                <p></p>
                            </div>
                            <div className='productImg3' />
                        </div>
                        <div className='product'>
                            <div className='infoOverlay'>
                                <p></p>
                            </div>
                            <div className='productImg4' />
                        </div>
                    </div>
                </div>
            </MobileGalleryScrollStyles>
        </>
    )
}