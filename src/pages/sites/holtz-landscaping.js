import React from 'react';
import styled from 'styled-components';

const HoltzLandscapingStyles = styled.div`
    width: calc(100vw - 100px);
    margin-left: 100px;
    color: var(--white);
    .inline {
      display: inline-flex;
    }
    .center {
      justify-content: center;
    }
    /* Hide menu on small screens */
    @media only screen and (max-width: 1080px) {
      display: none;
    }
`;

const TabletHoltzLandscapingStyles = styled.div`
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

const MobileHoltzLandscapingStyles = styled.div`
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

export default function HoltzLandscaping() {
    return (
        <>
            <HoltzLandscapingStyles>
                <p>Coming soon...</p>
            </HoltzLandscapingStyles>
            <TabletHoltzLandscapingStyles>
                <p>Coming soon...</p>
            </TabletHoltzLandscapingStyles>
            <MobileHoltzLandscapingStyles>
                <p>Coming soon...</p>
            </MobileHoltzLandscapingStyles>
        </>
    )
}