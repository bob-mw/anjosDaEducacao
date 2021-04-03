import styled from 'styled-components'

export const HeroContainer = styled.div`
	width: 90%;
	margin-top: 5rem;
	padding: 2rem 2rem 2rem 4rem;
	line-height: 1.5;
	align-self: flex-start;
`

export const HeroText = styled.h2`
	-webkit-text-stroke-width: 3px; 
    -webkit-text-stroke-color: var(--bg-darker-orange); 
	color: transparent;
	font-weight:800;
	font-size: 4.5rem;
	overflow: hidden;

	span {
		display: inline-block;
		transform: translateY(100%);
	}
`


export const Button = styled.button`
    text-decoration: none !important;
    cursor: pointer;
    display: inline-block;
	padding: 1.5rem;
	border-radius: 10rem;
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

    p { 
        font-size: 1.2rem;
        padding-bottom: 0.5rem;
        color: var(--bg-orange);
    }

`

export const ButtonContainer = styled.div`
    display: grid;
    grid: 1fr / 1fr 1fr;
    justify-content: space-around;
    column-gap: 1rem;
    margin: 2rem;
    min-width: 50%;
`

export const Image = styled.img`
	width: 75%;
`;