import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getAlbums } from '../services/albumsAPI';
import Genre from '../components/Genre';
import Loading from '../components/Loading';

export default function Main() {
  const [albums, setAlbums] = useState(null);
  const [genres, setGenres] = useState(null);

  useEffect(() => getAlbums(setAlbums, setGenres), []);

  console.log(albums);

  if(!albums || !genres) return <Loading />

  return (
    <Wrapper>
      <Header>Filmhub Music</Header>
      { genres.map((genre) => <Genre name={genre} albums={albums[genre]} />) }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 48px;
`;

const Header = styled.h1`
  font-size: 48px;
`;
