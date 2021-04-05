import styled from 'styled-components'

export const FooterContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1.2fr;
    grid-gap: 2rem;
    min-height: 20rem;
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
    margin: 2rem;
`

export const SocialMediaContainer = styled(PapelariaContainer)`

`

export const IconContainer = styled.div`

`

export const Description = styled.p`
    grid-area: title;
    color: white;
    font-size: 2em;
    text-transform: uppercase;
    align-self: center;
`

export const Image = styled.img`
    position: relative;
    display: block;
    height: auto;
    width: auto;
    max-width: 100%;
    border-radius: 2rem;
    object-fit: contain;
    align-self: start;
`
