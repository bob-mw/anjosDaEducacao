import styled from 'styled-components'

export const Container = styled.div`
    flex: 1 1 100%;
    width: 100%;
    padding: 0 2rem;
    margin: 5rem 0;
`

export const Title = styled.h1`
    position: relative;
    color: var(--bg-darker-orange);
    font-size: 4rem;
    padding-top: 2rem;

    font-family: 'Montserrat', sans-serif;
    font-weight: 100;

    @media only screen and (max-width: 1200px) {
        font-size: 3rem;
    }

    @media only screen and (max-width: 900px) {
        font-size: 2rem;
    }

    @media only screen and (max-width: 600px) {
        font-size: 1.5rem;
        padding-top: 4rem;
    }
`
