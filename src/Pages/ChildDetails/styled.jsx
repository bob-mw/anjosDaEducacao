import styled from 'styled-components'

export const Title = styled.h1`
    position: relative;
    color: var(--bg-darker-orange);
    font-size: 4rem;
    font-weight: 800;
    padding-top: 2rem;
   
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
export const Label = styled.label`
    font-size: 1.3rem;
    color: var(--bg-darker-orange);
    margin: 5rem 0;
`