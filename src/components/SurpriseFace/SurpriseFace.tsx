import React from 'react';
import styled, { keyframes } from 'styled-components';

import surpriseImage from '../../images/surprise_face.png';

const fadeInUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }`;

const FadeInUpDiv = styled.div`
  animation: ${fadeInUpAnimation} 1s ease-out 1;
  position: absolute;
  right: 10%;
  bottom: 10%;
`;

export default function SurpriseFace() {
  return (
    <FadeInUpDiv>
      <img src={surpriseImage} alt="" width="100px" height="100px" />
    </FadeInUpDiv>
  );
}
