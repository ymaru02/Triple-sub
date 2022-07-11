import styled from 'styled-components'

import { FadeInContainer } from '../styles/Animation'
import { ContentLogoData } from '../contents/contents'

const ContentLogoImg = styled(FadeInContainer)<{ contentLogo: string }>`
  box-sizing: border-box;
  background-image: url(${(props) => props.contentLogo});
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
  return (
    <ContentLogoImg contentLogo={ContentLogoData.img} y={15}>
      {ContentLogoData.date}
    </ContentLogoImg>
  )
}
