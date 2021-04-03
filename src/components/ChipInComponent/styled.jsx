import styled from 'styled-components'

export const Container = styled.form`
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: 3rem;
    margin: 5rem 0;
    background: none;
`

export const Name = styled.h2`
    color: var(--bg-darker-orange);
    font-size: 4rem;
    text-transform: uppercase;
    padding-bottom: 1rem;
`

export const Description = styled.h3`
    color: var(--bg-darker-orange);
    font-size: 2rem;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
`