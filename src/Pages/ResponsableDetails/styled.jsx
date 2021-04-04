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

export const Form = styled.form`
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    margin: 5rem 1rem;
    max-width: 80%;
    border-radius: 2rem;
    background: linear-gradient(to left bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5));
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.3);
`

export const Label = styled.label`
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--bg-darker-orange);
`

export const SuperiorDetails = styled.div` 
    display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 4rem;
    align-items: center;
    justify-items: center;
    margin-bottom: 2rem;

	@media only screen and (max-width: 800px) {
        grid-template-columns: 1fr
    }
`

export const FieldContainer = styled.div` 
    display: flex;
    flex-direction: column;
`

export const Field = styled.input`
    display: block;
    width: 100%;
    height: 3rem;
    padding: 0.375rem 0.75rem;
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #000;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 2rem;
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.3);
`

export const Select = styled.select`
    width: 100%;
    height: 3rem;
    padding: 0.375rem 0.75rem;
    margin-top: 1rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #000;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.2rem;
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);
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
    color: black;
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