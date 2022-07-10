import styled from 'styled-components'

import { FadeInContainer } from '../styles/Animation'
import useCountUp from '../hooks/useCountUp'

const MetricsContainer = styled(FadeInContainer)`
  margin-left: 623px;
  padding-top: 150px;

  animation-delay: 100ms;
`

const Content = styled.li`
  color: rgb(58, 58, 58);
  font-family: sans-serif;

  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  list-style: none;
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

interface MetricProps {
  count: number
}

function Metric({ count }: MetricProps) {
  const countUp = useCountUp(count, 2000)
  return <span>{countUp}</span>
}

export default function Metrics() {
  return (
    <MetricsContainer y={15}>
      <ul>
        {metricList.map((content) => {
          return (
            <Content key={content.text}>
              <strong>
                <Metric count={content.count} />
                {content.unit}
              </strong>
              {content.text}
            </Content>
          )
        })}
      </ul>
    </MetricsContainer>
  )
}
