import React from 'react';
import styled from 'styled-components';

const CaringHandsStyles = styled.div`
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

const TabletCaringHandsStyles = styled.div`
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

const MobileCaringHandsStyles = styled.div`
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

export default function CaringHands() {
    return (
        <>
            <CaringHandsStyles>
                <p>Coming soon...</p>
            </CaringHandsStyles>
            <TabletCaringHandsStyles>
                <p>Coming soon...</p>
            </TabletCaringHandsStyles>
            <MobileCaringHandsStyles>
                <o>Coming soon...</o>
            </MobileCaringHandsStyles>
        </>
    )
}