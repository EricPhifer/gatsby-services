import React from 'react';
import styled from 'styled-components';

const DelightfulCakesStyles = styled.div`
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

const TabletDelightfulCakesStyles = styled.div`
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

const MobileDelightfulCakesStyles = styled.div`
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

export default function DelightfulCakes() {
    return (
        <>
            <DelightfulCakesStyles>
                <p>Coming soon...</p>
            </DelightfulCakesStyles>
            <TabletDelightfulCakesStyles>
                <p>Coming soon...</p>
            </TabletDelightfulCakesStyles>
            <MobileDelightfulCakesStyles>
                <p>Coming soon...</p>
            </MobileDelightfulCakesStyles>
        </>
    )
}