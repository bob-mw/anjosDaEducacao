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

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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

export const Details = styled.p`
    color: black;
    font-size: 1.3rem;
	font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
`
export const Table = styled.table`
    width: 100%;
    margin: 2rem 0;
    color: black;
    border: 1px solid var(--bg-dark-orange);
    border-collapse: collapse;
    border-spacing: 0;
    line-height: 1.4;
    font-weight: 600;
    font-size: 1.2em;
    color: black;

    thead > tr > th {
        padding: 0.75rem;
        border: 1px solid var(--bg-dark-orange);
        background-color: var(--bg-dark-orange);
    }

    tbody > tr > td {
        padding: 0.75rem;
        border: 1px solid var(--bg-dark-orange);
        background-color: var(--bg-orange);

        &:nth-child(even){
            background-color: var(--bg-light-orange);
        }
    }
`

export const PaymentMethodContainer = styled.div`
    padding: 2rem;
    margin: 2rem 0;
    background: linear-gradient(to right bottom, var(--bg-dark-orange), var(--bg-darker-orange));
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 2rem;
    align-self: center;
`

export const Subtitle = styled.h3`
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    align-self: center;
`

export const RadioContainer = styled.div`
    margin: 1rem 0;
`

export const Input = styled.input`
    margin-right: 0.5rem;
`

export const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    margin: 1rem 0;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
`

export const Button = styled.a`
    font-size: 1.2rem;
    text-decoration: none !important;
    cursor: pointer;
	text-transform: uppercase;
	letter-spacing: .15rem;
	transition: all .3s;

    display: inline-block;
	padding: 1.5rem 3rem;
    margin-top: 1.5rem;
	border-radius: 2rem;
    border: none;
	color: #fff;
	position: relative;
	overflow: hidden;
	z-index: 1;
    align-self: center;

	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--bg-dark-orange);
		border-radius: 10rem;
		z-index: -2;
	}
	&:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0%;
		height: 100%;
		background-color: var(--bg-lighter-orange);
		transition: all .3s;
		border-radius: 10rem;
		z-index: -1;
	}

	&:hover {
		color: #fff;
		&:before {
			width: 100%;
		}
	}

`