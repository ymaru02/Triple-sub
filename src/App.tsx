import styled from 'styled-components'

import Awards from './components/Awards'
import ContentImg from './components/ContentImg'
import Metrics from './components/Metrics'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 552px;
`

const Inner = styled.div`
  margin: 0 auto;
  width: 1040px;
  height: 100%;
`

function App() {
  return (
    <Container>
      <Inner>
        <ContentImg />
        <Metrics />
        <Awards />
      </Inner>
    </Container>
  )
}

export default App
