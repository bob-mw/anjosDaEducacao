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

export const Field = styled.input`
    display: block;
    width: 100%;
    height: 3rem;
    padding: 0.375rem 0.75rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 2rem;
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`

export const Button = styled.button`
    font-size: 1.2rem;
    text-decoration: none !important;
    cursor: pointer;
    display: inline-block;
	padding: 1.5rem;
    margin-top: 1.5rem;
	border-radius: 2rem;
    border: none;
	color: #fff;
	text-transform: uppercase;
	letter-spacing: .15rem;
	transition: all .3s;
	position: relative;
	overflow: hidden;
	z-index: 1;
    justify-self: center;

	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--bg-lighter-orange);
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
		background-color: var(--bg-dark-orange);
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