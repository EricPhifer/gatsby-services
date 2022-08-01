import React from 'react';
import styled from 'styled-components';

const BlogStyles = styled.div`
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

const TabletBlogStyles = styled.div`
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

const MobileBlogStyles = styled.div`
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
            <BlogStyles>
                <p>Coming soon...</p>
            </BlogStyles>
            <TabletBlogStyles>
                <p>Coming soon...</p>
            </TabletBlogStyles>
            <MobileBlogStyles>
                <o>Coming soon...</o>
            </MobileBlogStyles>
        </>
    )
}