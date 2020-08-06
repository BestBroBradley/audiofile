import styled from 'styled-components'
import background from './images/background.jpg'

export const SiteWrapper = styled.div`
  background: url(${background});
  background-size: 100% auto;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  position: relative;
  color: lightgrey;
`

export const NavWrapper = styled.div`
  background: grey;
  color: white;
  height: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .nav-links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }

  .link {
    padding: 30px;
  }
`