import styled from 'styled-components'

import Logo from '../../components/Logo'

export const LogoNavbar = styled(Logo)`
    position: absolute;
    top: 1rem;
    left: 2rem;
    width: 6rem;
`

export const Panel = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;
    width: 90%;
    margin: 5rem 0;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
    border-radius: 2rem;
`

export const Container = styled.div`
    flex: 1 1 100%;
    padding: 45px 25px;
`

export const Title = styled.h1`
    position: relative;
    color: var(--bg-darker-pink);
    font-size: 4rem;
    padding: 2rem 0 1rem 3rem;

    @media only screen and (max-width: 1200px) {
        font-size: 3rem;
    }

    @media only screen and (max-width: 900px) {
        font-size: 2rem;
    }
`
