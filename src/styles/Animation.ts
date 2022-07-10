import styled from 'styled-components'

import { opacity, translateY } from './KeyFrames'

export const FadeInContainer = styled.div<{ y: number }>`
  animation-name: ${opacity}, ${(props) => translateY(props.y)};
  animation-duration: 700ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`
