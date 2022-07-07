import styled from 'styled-components'

import ContentImg from './components/ContentImg'
import Metrics from './components/Metrics'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 552px;
`

const Inner = styled.div`
  margin: 0 10%;
  height: 100%;
`

function App() {
  return (
    <Container>
      <Inner>
        <ContentImg />
        <Metrics />
      </Inner>
    </Container>
  )
}

export default App
