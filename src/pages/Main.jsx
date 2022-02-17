import React from 'react';
import styled from 'styled-components';

import Genre from '../components/Genre';

export default function Main() {
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
