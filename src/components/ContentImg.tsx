import styled from 'styled-components'

import logo from '../assets/triple2x.png'
import { FadeInContainer } from '../styles/Animation'

const ContentLogoImg = styled(FadeInContainer)`
  box-sizing: border-box;
  background-image: url(${logo});
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);

  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
`

export default function ContentLogo() {
  return <ContentLogoImg>2021년 12월 기준</ContentLogoImg>
}
