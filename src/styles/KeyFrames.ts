import { keyframes } from 'styled-components'

export const translateY = keyframes`
  0% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(0);
  }
`

export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
