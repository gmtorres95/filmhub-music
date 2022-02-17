import React from 'react';
import styled from 'styled-components';

export default function Album() {
  return (
    <Wrapper>
      <img src="https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/94/4d/9a/944d9a8d-0549-f537-5706-5b083bd84a7d/21UM1IM38949.rgb.jpg/100x100bb.jpg" alt="Cover" />
      <StyledText>Encanto (Original Motion Picture Soundtrack)</StyledText>
      <StyledText weight={400}>Lin-Manuel Miranda, Germaine Franco, Stephanie Beatriz, Olga Merediz & Jessica Darrow</StyledText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
