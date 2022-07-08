import styled from 'styled-components'

import { FadeIn, translateY } from '../styles/KeyFrames'

const FadeInContainer = styled.div`
  animation-name: ${FadeIn}, ${translateY};
  animation-duration: 700ms;
  animation-timing-function: ease-in-out;
`

export default FadeInContainer
