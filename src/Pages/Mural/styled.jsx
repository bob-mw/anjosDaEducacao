import styled from 'styled-components'

import Logo from '../../components/Logo'

export const LogoNavbar = styled(Logo)`
    position: absolute;
    top: 1rem;
    left: 2rem;
    width: 6rem;
`

export const Background = styled.main`
    min-height: 100vh;
    background: linear-gradient(to right top, var(--bg-dark-blue), var(--bg-blue), var(--bg-light-blue));
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Panel = styled.div`
    display:flex;
    justify-content: center;
    min-height: 80vh;
    width: 90%;
    margin-top: 5rem;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
    border-radius: 2rem;
`

export const Container = styled.div`
    max-width: 990px;
    flex: 1 1 100%;
    padding: 45px 25px;
`
