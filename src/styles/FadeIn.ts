import styled, { keyframes } from 'styled-components'

const FadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`
const FadeInContainer = styled.div`
  animation-name: ${FadeIn};
  animation-duration: 700ms;
  animation-timing-function: ease-in-out;
`

export default FadeInContainer
