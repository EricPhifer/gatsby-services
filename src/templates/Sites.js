import React from 'react';
import styled from 'styled-components';

const SiteInfoStyles = styled.div`
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

export default function Sites() {
    return (
        <>
            <SiteInfoStyles>
                <p>Coming soon...</p>
            </SiteInfoStyles>
            <TabletSiteInfoStyles>
                <p>Coming soon...</p>
            </TabletSiteInfoStyles>
            <MobileSiteInfoStyles>
                <o>Coming soon...</o>
            </MobileSiteInfoStyles>
        </>
    )
}