import styled from 'styled-components'

export const Background = styled.main`
    min-height: 100vh;
    background: linear-gradient(to right bottom, var(--bg-laranja), var(--bg-goiaba), var(--bg-vivid-tangerine), var(--bg-spanish-pink),
    var(--bg-lighter-blue), var(--bg-light-blue), var(--bg-blue), var(--bg-dark-blue));

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.main`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 6rem;
`

export const Panel = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;
    width: 90%;
    margin: 5rem 0;
    border-radius: 2rem;
`