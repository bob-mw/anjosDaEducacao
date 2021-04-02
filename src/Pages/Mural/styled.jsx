import styled from 'styled-components'

export const Container = styled.div`
    flex: 1 1 100%;
    padding: 2rem;
    width: 100%;
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

    @media only screen and (max-width: 600px) {
        font-size: 1.5rem;
        padding: 3rem 0 1rem 3rem;
    }
`
