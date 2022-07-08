import styled from 'styled-components'

import FadeIn from '../styles/FadeIn'

const MetricsContainer = styled(FadeIn)`
  @media screen and (min-width: 1142px) {
    margin-left: 623px;
    padding-top: 150px;
  }
  animation-delay: 100ms;
`

const Content = styled.div`
  color: rgb(58, 58, 58);
  font-family: sans-serif;

  @media screen and (min-width: 1142px) {
    font-size: 36px;
    letter-spacing: -1px;
    margin-bottom: 20px;
  }
`

const metricList = [
  {
    count: 700,
    unit: '만 명',
    text: '의 여행자',
  },
  {
    count: 100,
    unit: '만 개',
    text: '의 여행 리뷰',
  },
  {
    count: 470,
    unit: '만 개',
    text: '의 여행 일정',
  },
]

export default function Metrics() {
  return (
    <MetricsContainer>
      {metricList.map((content) => {
        return (
          <Content key={content.text}>
            <strong>
              <span>{content.count}</span>
              {content.unit}
            </strong>
            {content.text}
          </Content>
        )
      })}
    </MetricsContainer>
  )
}
