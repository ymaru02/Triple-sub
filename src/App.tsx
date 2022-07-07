import styled from 'styled-components'

import ContentImg from './components/ContentImg'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 552px;
  min-width: 1400px;
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
      </Inner>
    </Container>
  )
}

export default App
