import styled from 'styled-components'

export const Background = styled.main`
    min-height: 100vh;
    background: linear-gradient(to right bottom, var(--bg-light-pink), var(--bg-pink));
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
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
    border-radius: 2rem;
`