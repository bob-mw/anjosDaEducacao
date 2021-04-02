import styled from 'styled-components'

export const TextCenter = styled.div`
    text-align: center;
`

export const Title = styled.h1`
    position: relative;
    color: var(--bg-darker-pink);
    font-size: 4rem;
    padding-top: 2rem;

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

export const Form = styled.form`
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    max-width: 50%;
    padding: 5rem;
    margin: 5rem 0;
    border-radius: 2rem;
    background: linear-gradient(to left bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`

export const FormGroup = styled.div`
    margin-bottom: 1rem;
`

export const Label = styled.label`
    font-size: 1.2rem;
    color: var(--bg-darker-pink);
`