import React from 'react';
import styled from 'styled-components';
import Cta from '../../components/Cta';

const CityChurchStyles = styled.div`
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

const TabletCityChurchStyles = styled.div`
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

const MobileCityChurchStyles = styled.div`
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

export default function CityChurch() {
    return (
        <>
          <CityChurchStyles>
            <p>Coming soon...</p>
            <Cta />
          </CityChurchStyles>
          <TabletCityChurchStyles>
            <p>Coming soon...</p>
            <Cta />
          </TabletCityChurchStyles>
          <MobileCityChurchStyles>
            <p>Coming soon...</p>
            <Cta />
          </MobileCityChurchStyles>
        </>
    )
}