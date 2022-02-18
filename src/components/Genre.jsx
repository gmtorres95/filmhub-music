import React from 'react';
import styled from 'styled-components';

import Album from './Album';

export default function Genre({ name, albums }) {
  console.log(albums);
  return (
    <Wrapper>
      <GenreName>{name}</GenreName>
      <AlbumsContainer>
        { albums.map((album) => <Album info={album} key={album.id} />) }
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
