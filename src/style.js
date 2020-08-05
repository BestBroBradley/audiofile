import styled from 'styled-components'
import background from './images/background.jpg'

export const SiteWrapper = styled.div`
  background: url(${background});
  background-size: auto 100%;
  background-repeat: no-repeat;
`

export const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`