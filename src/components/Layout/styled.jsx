import styled from 'styled-components'

import Logo from '../Logo'

export const Background = styled.main`
    min-height: 100vh;
    background: linear-gradient(to right bottom, 
    var(--bg-dark-orange), var(--bg-orange), var(--bg-light-orange), var(--bg-lighter-orange),
    var(--bg-lighter-blue), var(--bg-light-blue), var(--bg-blue), var(--bg-dark-blue));

    display: flex;
    flex-direction: column;
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
    align-items: center;
    min-height: 80vh;
    width: 90%;
    margin: 5rem 0;
    border-radius: 2rem;
    background: linear-gradient(to left bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`

export const LogoContainer = styled.div`
    position:absolute; 
    height:100%; 
    width:100%;
`

export const LogoBackground = styled(Logo)`
    width: 40%;
    opacity: 40%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`