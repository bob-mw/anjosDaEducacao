import styled from 'styled-components'

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;

    display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 4rem;

	@media only screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }

	@media only screen and (max-width: 800px) {
        grid-template-columns: 1fr
    }
`

export const Card = styled.li`
	position: relative;
    height: 30rem;
	padding: 1.25rem;
	justify-self: stretch;

	display: flex;
	flex: 1 1 auto;
	flex-direction: column;
	justify-content: center;

    border-radius: 2rem;
    background: linear-gradient(to left bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`

export const Name = styled.h2`
    color: var(--bg-darker-orange);
    font-size: 2.5rem;
    text-transform: uppercase;
    padding-top: 0.5rem;
`

export const Description = styled.h3`
    color: var(--bg-darker-orange);
    font-size: 1.25rem;
    text-transform: uppercase;
    padding-top: 0.5rem;
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