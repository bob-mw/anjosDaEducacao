import styled from 'styled-components'

import Logo from '../../Logo'

export const LogoNavbar = styled(Logo)`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  width: 5rem;
`

export const Background = styled.main`
    min-height: 100vh;
    background: linear-gradient(to right top, var(--bg-dark-blue), var(--bg-blue), var(--bg-light-blue));
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Panel = styled.div`
    min-height: 80vh;
    width: 90%;
    margin-top: 5rem;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
    border-radius: 2rem;
`
