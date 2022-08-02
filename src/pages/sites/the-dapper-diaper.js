import React from 'react';
import styled from 'styled-components';

const TheDapperDiaperStyles = styled.div`
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

const TabletTheDapperDiaperStyles = styled.div`
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

const MobileTheDapperDiaperStyles = styled.div`
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

export default function TheDapperDiaper() {
    return (
        <>
            <TheDapperDiaperStyles>
                <p>Coming soon...</p>
            </TheDapperDiaperStyles>
            <TabletTheDapperDiaperStyles>
                <p>Coming soon...</p>
            </TabletTheDapperDiaperStyles>
            <MobileTheDapperDiaperStyles>
                <p>Coming soon...</p>
            </MobileTheDapperDiaperStyles>
        </>
    )
}