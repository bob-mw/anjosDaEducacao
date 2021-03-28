import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 7rem;
    height: 7rem;
    position: relative;
    margin-left: 1rem;
    margin-right: 1rem;
`

const Card = styled.div`
    overflow: hidden;
    box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.2);
    background-color: linear-gradient(to right bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7));
    padding: 2rem;
    border-radius: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    cursor: pointer;
`

export const CompactCard = styled(Card)`
    width: 7rem;
    height: 7rem;
    padding: 0.5rem;
    border-radius: 1.5rem;
`

export const ExpandedCard = styled(Card)`
    width: 15rem;
    height: 15rem;
    background-color: navy;
    position: relative;
    left: -100%;
    top: 150%;
`

export const Content = styled.h1`
    .expanded {
        font-size: 5em;
        color: white;
    }

    .compact {
        font-size: 1.5em;
    }
`