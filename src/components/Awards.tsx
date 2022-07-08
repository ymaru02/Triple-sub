import styled from 'styled-components'

import Award1 from '../assets/play-store2x.png'
import Award2 from '../assets/badge-apple4x.png'
import { FadeInContainer } from '../styles/Animation'

const AwardContainer = styled(FadeInContainer)`
  white-space: nowrap;
  margin: 50px 0px 140px 623px;
  animation-delay: 200ms;
`

const AwardContent = styled.li<{ awardImg: string }>`
  display: inline-block;
  font-family: sans-serif;
  background-image: url(${(props) => props.awardImg});
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;

  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  list-style: none;
`

const awardList = [
  {
    img: Award1,
    name: '2018 구글 플레이스토어',
    text: '올해의 앱 최우수상 수상',
  },
  {
    img: Award2,
    name: '2018 애플 앱스토어',
    text: '오늘의 여행앱 선정',
  },
]

export default function Awards() {
  return (
    <AwardContainer>
      <ul>
        {awardList.map((award) => {
          return (
            <AwardContent key={award.img} awardImg={award.img}>
              {award.name}
              <br />
              {award.text}
            </AwardContent>
          )
        })}
      </ul>
    </AwardContainer>
  )
}
