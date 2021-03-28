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