import styled from 'styled-components'

export const FooterContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 3fr 1fr;
    min-height: 30rem;
    width: 100%;
    margin-top: 5rem;
    border-radius: 2rem;
    background: linear-gradient(to right bottom, var(--bg-orange), var(--bg-dark-orange));

`
export const PapelariaContainer = styled.div`
    position: relative;
    display: grid;
    grid-template:
    "title title title" 0.2fr
    "image image image" 1fr
    / 1fr 1fr 1fr;
    width: 100%;
    grid-gap: 1rem;
`

export const Description = styled.p`
    grid-area: title;
    color: white;
    font-size: 2em;
    text-transform: uppercase;
`

export const Image = styled.img`
    position: relative;
    display: block;
    height: 100%;
    width: auto;
    max-width: 100%;
    object-fit: fill;
`
