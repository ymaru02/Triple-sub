import styled from 'styled-components'

import logo from '../assets/triple2x.png'

const ContentLogoImg = styled.div`
  box-sizing: border-box;
  background-image: url(${logo});
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);

  @media screen and (min-width: 1142px) {
    position: absolute;
    top: 150px;
    width: 400px;
    height: 338px;
    background-size: 400px 338px;
    padding-top: 280px;
    font-size: 15px;
  }
`

export default function ContentLogo() {
  return <ContentLogoImg>2019년 2월 기준</ContentLogoImg>
}
