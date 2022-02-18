import React from 'react';
import styled from 'styled-components';

export default function Album({ info }) {
  const {
    name,
    artistName,
    url,
  } = info;
  const artwork = info.artworkUrl100;

  return (
    <Wrapper href={url}>
      <img src={artwork} alt={name} />
      <StyledText>{name}</StyledText>
      <StyledText weight={400}>{artistName}</StyledText>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  margin: 24px 24px 24px 0px;
  * {
    width: 160px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const StyledText = styled.h3`
  font-weight: ${(props) => props.weight ? props.weight : '500'};
`;
