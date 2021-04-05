import styled from 'styled-components'

export const FooterContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 30rem;
    width: 100%;
    margin-top: 5rem;
    border-radius: 0 0 2rem 2rem;
    background: linear-gradient(to top, rgba(243, 131, 117, 1), rgba(243, 131, 117, 0.9), 
    rgba(243, 131, 117, 0.7), rgba(243, 131, 117, 0));

`
export const PapelariaContainer = styled.div`
    position: relative;
    display: grid;
    grid: 0.2fr 1fr / 1fr 1fr 1fr;
    width: 100%;
    grid-gap: 1rem;
`

export const Description = styled.p`
    color: white;
    font-size: 2em;
    text-transform: uppercase;
`
