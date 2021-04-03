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

export const ProgressBarContainer = styled.div`
	box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	border: 1px solid #dee2e6;
	border-color: black;
	border-radius: 15px;
	margin-bottom: 2rem;
`

export const ProgressBar = styled.div`
	height: 20px;
	background-color: #28a745;
	border-radius: 15px;
`