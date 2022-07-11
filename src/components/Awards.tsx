import styled from 'styled-components'

import { FadeInContainer } from '../styles/Animation'
import { awardList } from '../contents/contents'

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

export default function Awards() {
  return (
    <AwardContainer y={15}>
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
