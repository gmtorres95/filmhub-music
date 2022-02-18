import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";

export default function Search({ searchText, setSearchText, searchAlbums }) {
  const [timer, setTimer] = useState();

  function searchDelay() {
    clearTimeout(timer);
    setTimer(setTimeout(searchAlbums, 1000));
  }

  return (
    <Wrapper>
      <StyledIcon />
      <StyledInput
        placeholder='Search'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyUp={searchDelay}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(100vw / 3);
  height: 44px;
  border-radius: 32px;
  border: solid 1px #333;
  background-color: #FFF;
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(FaSearch)`
  margin: 0px 20px 0px;
`;

const StyledInput = styled.input`
  width: calc(100% - 80px);
  font-size: 24px;
  font-weight: 500;
  border: none;
  background-color: inherit;

  &::placeholder {
    color: #888;
  }
`;
