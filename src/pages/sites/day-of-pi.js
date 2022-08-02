import React from 'react';
import styled from 'styled-components';

const DayOfPiStyles = styled.div`
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

const TabletDayOfPiStyles = styled.div`
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

const MobileDayOfPiStyles = styled.div`
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

export default function DayOfPi() {
    return (
        <>
          <DayOfPiStyles>
              <p>Coming soon...</p>
          </DayOfPiStyles>
          <TabletDayOfPiStyles>
              <p>Coming soon...</p>
          </TabletDayOfPiStyles>
          <MobileDayOfPiStyles>
              <p>Coming soon...</p>
          </MobileDayOfPiStyles>
        </>
    )
}