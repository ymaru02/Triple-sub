import { keyframes } from 'styled-components'

export const translateY = (y: number) => keyframes`
  0% {
    transform: translateY(${y}px);
  }
  100% {
    transform: translateY(0);
  }
`

export const opacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
