import React from 'react';
import { FadeLoader } from 'react-spinners';
import styled from 'styled-components';

export default function Loading() {
  return (
    <Wrapper>
      <FadeLoader
        color="#222"
        height={40}
        width={10}
        margin={50}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
