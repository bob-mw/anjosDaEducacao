import styled from 'styled-components'

import Logo from '../Logo'

export const Container = styled.nav`
    position: absolute;
    width: 100%;
    height: 8rem;
    padding-bottom: 2rem;
    top: 0;
    left: 0;
`

export const Wrapper = styled.div`
    position: absolute;
    top: 1rem;
    left: 2rem;
    display: flex;
    align-items: center;

`

export const LogoNavbar = styled(Logo)`
    width: 6rem;
`

export const Name = styled.span`
    display: inline-block;
    color: white;
    font-size: 2rem;
    text-transform: uppercase;
    padding-left: 2rem;

    @media only screen and (max-width: 900px) {
        font-size: 1.5rem;
    }

    @media only screen and (max-width: 600px) {
        display: none;
    }
`
