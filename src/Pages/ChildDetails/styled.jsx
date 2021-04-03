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
    margin: 5rem 0 0 0;
`

export const Select = styled.select`
    width: 100%;
    height: 3.5rem;
    padding: 0.4rem 0.75rem;
    margin-top: 0.5rem;
    font-size: 2rem;
    line-height: 1.5;
    color: #000;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.2rem;
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`