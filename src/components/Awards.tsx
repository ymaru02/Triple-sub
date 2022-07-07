import styled from 'styled-components'

import Award1 from '../assets/play-store2x.png'
import Award2 from '../assets/badge-apple4x.png'

const AwardContainer = styled.div`
  white-space: nowrap;
  @media screen and (min-width: 1142px) {
    margin: 50px 0px 140px 623px;
  }
`

const AwardContent = styled.div<{ awardImg: string }>`
  display: inline-block;
  font-family: sans-serif;
  background-image: url(${(props) => props.awardImg});
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;

  @media screen and (min-width: 1142px) {
    background-size: 54px 54px;
    height: 54px;
    padding: 5px 0px 5px 62px;
    font-size: 14px;
    line-height: 22px;
    margin-right: 39px;
  }
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
      {awardList.map((award) => {
        return (
          <AwardContent key={award.img} awardImg={award.img}>
            {award.name}
            <br />
            {award.text}
          </AwardContent>
        )
      })}
    </AwardContainer>
  )
}