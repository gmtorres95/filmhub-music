import React from 'react';
import styled from 'styled-components';

export default function Album({ info }) {
  const {
    name,
    artistName,
    url,
    artistUrl,
  } = info;
  const artwork = info.artworkUrl100;

  return (
    <Wrapper>
      <a href={url}>
        <img src={artwork} alt={name} />
        <StyledText>{name}</StyledText>
      </a>
      <a href={artistUrl}>
        <StyledText weight={400}>{artistName}</StyledText>
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  margin: 24px 24px 24px 0px;
  * {
    width: 152px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  img {
    border-radius: 16px;
    box-shadow: 8px 4px 8px #AAA;
  }
  &:hover {
    margin: 20px 20px 20px -4px;
    * {
      width: 160px;
      white-space: normal;
      filter: brightness(1.10);
    }
  }
`;

const StyledText = styled.h3`
  font-weight: ${(props) => props.weight ? props.weight : '500'};
`;
