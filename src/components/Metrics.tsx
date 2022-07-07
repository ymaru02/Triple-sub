import styled from 'styled-components'

const MetricsContainer = styled.div`
  @media screen and (min-width: 1142px) {
    margin-left: 623px;
    padding-top: 150px;
  }
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
    count: 350,
    unit: '만 명',
    text: '의 사용자',
  },
  {
    count: 21,
    unit: '만 개',
    text: '의 리뷰',
  },
  {
    count: 650,
    unit: '만 개',
    text: '의 저장',
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
