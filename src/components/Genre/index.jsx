import React from 'react';
import styled from 'styled-components';

import Album from '../Album';

export default function Genre() {
  return (
    <Wrapper>
      <GenreName>Genre</GenreName>
      <AlbunsContainer>
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
      </AlbunsContainer>
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

const AlbunsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
