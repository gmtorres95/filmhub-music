import React from 'react';
import styled from 'styled-components';

export default function Genre() {
  return (
    <Wrapper>
      <GenreName>Genre 1</GenreName>
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
