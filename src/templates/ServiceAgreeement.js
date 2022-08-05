import React from 'react';
import styled from 'styled-components';

const AgreementStyles = styled.div`
    width: calc(100vw - 100px);
    margin-left: 100px;
    color: var(--white);
    .inline {
      display: inline-flex;
    }
    .flex {
        display: flex;
        flex-flow: column wrap;
    }
    .center {
        justify-content: center;
        align-items: center;
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
const LandscapeAgreementStyles = styled.div`
    /* Show compressed menu on short screens and landscape mode */
    @media only screen and (min-height: 486px) {
    display: none;
    }
    @media only screen and (orientation: portrait) {
    display: none;
    }
    width: calc(100vw - 50px);
    margin-left: 50px;
    color: var(--white);
    .inline {
      display: inline-flex;
    }
    .flex {
        display: flex;
        flex-flow: column wrap;
    }
    .center {
        justify-content: center;
        align-items: center;
    }
    .hidden {
        display: none;
    }
`;
const TabletAgreementStyles = styled.div`
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
    color: var(--white);
    .inline {
      display: inline-flex;
    }
    .flex {
        display: flex;
        flex-flow: column wrap;
    }
    .center {
        justify-content: center;
        align-items: center;
    }
    .hidden {
        display: none;
    }
`;
const MobileAgreementStyles = styled.div`
    /* Show compressed menu on small screens */
    @media only screen and (min-width: 501px) {
    display: none;
    }
    @media only screen and (max-height: 485px) {
    display: none;
    }
    width: calc(100vw - 50px);
    margin-left: 50px;
    color: var(--white);
    .inline {
      display: inline-flex;
    }
    .flex {
        display: flex;
        flex-flow: column wrap;
    }
    .center {
        justify-content: center;
        align-items: center;
    }
    .hidden {
        display: none;
    }
`;

export default function Sites() {
    return (
        <>
            <AgreementStyles>
                <form>
                    
                </form>
            </AgreementStyles>
            <LandscapeAgreementStyles>
                <p>Coming soon...</p>
            </LandscapeAgreementStyles>
            <TabletAgreementStyles>
                <p>Coming soon...</p>
            </TabletAgreementStyles>
            <MobileAgreementStyles>
                <p>Coming soon...</p>
            </MobileAgreementStyles>
        </>
    )
}