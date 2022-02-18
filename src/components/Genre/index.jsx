import React from 'react';
import styled from 'styled-components';

import Album from '../Album';

export default function Genre() {
  return (
    <Wrapper>
      <GenreName>Genre</GenreName>
      <AlbumsContainer>
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
      </AlbumsContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 48px 0px;
`;

const GenreName = styled.h2`
  font-size: 36px;
  font-weight: 500;
`;

const AlbumsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
