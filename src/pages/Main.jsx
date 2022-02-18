import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getAlbums } from '../services/albumsAPI';
import Search from '../components/Search';
import Genre from '../components/Genre';
import Loading from '../components/Loading';

export default function Main() {
  const [albums, setAlbums] = useState(null);
  const [genres, setGenres] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => getAlbums(setAlbums, setGenres), []);

  function searchAlbums() {
    if(searchText === '') return setSearchResult(null);

    const matchList = [];
    genres.forEach((genre) => albums[genre].forEach((album) => {
      if(album.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
        matchList.push(album);
    }));

    setSearchResult([...new Set(matchList)]);
  }

  if(!albums || !genres) return <Loading />
  return (
    <Wrapper>
      <Header>
        <h1>Filmhub Music</h1>
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          searchAlbums={searchAlbums}
        />
      </Header>
      { searchResult ?
          <Genre name='Search Results:' albums={searchResult} /> :
          genres.map((genre) => <Genre name={genre} albums={albums[genre]} />) }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 48px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1{
    font-size: 48px;
  }
`;
