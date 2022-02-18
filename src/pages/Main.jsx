import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getAlbums } from '../services/albumsAPI';
import Genre from '../components/Genre';

export default function Main() {
  const [albums, setAlbums] = useState();

  useEffect(() => {
    getAlbums(setAlbums);
  }, []);

  return (
    <Wrapper>
      <Header>Filmhub Music</Header>
      <Genre />
      <Genre />
      <Genre />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 48px;
`;

const Header = styled.h1`
  font-size: 48px;
`;
