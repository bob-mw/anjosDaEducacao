import styled from 'styled-components'

export const Footer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    min-height: 20rem;
    width: 100%;
    margin-top: 5rem;
    border-radius: 2rem;
    background: linear-gradient(to right bottom, var(--bg-orange), var(--bg-dark-orange));

`

export const FooterContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1.2fr;
    grid-gap: 2rem;
    height: 100%;
    width: 80%;

    @media only screen and (max-width: 1400px) {
        width: 90%;
    }

    @media only screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

`
export const PapelariaContainer = styled.div`
    position: relative;
    display: grid;
    grid-template:
    "title title title" 0.2fr
    "image image image" 1fr
    / 1fr 1fr 1fr;
    grid-gap: 1rem;
    width: auto;
    margin: 2rem;

    @media only screen and (max-width: 700px) {
        grid-template:
        "title" 0.2fr
        "image" 1fr
        "image" 1fr
        "image" 1fr
        / 1fr;

        justify-content: start;
        justify-items: start;
    }
`

export const SocialMediaContainer = styled(PapelariaContainer)`

`

export const Description = styled.p`
    grid-area: title;
    color: white;
    font-size: 2em;
    text-transform: uppercase;
    align-self: center;

    @media only screen and (max-width: 700px) {
        align-self: start;
    }
`

export const Image = styled.img`
    position: relative;
    display: block;
    height: auto;
    max-height: 6rem;
    width: 100%;
    object-fit: contain;
    align-self: start;

    @media only screen and (max-width: 700px) {
        object-position: 0% 50%;
    }

`
