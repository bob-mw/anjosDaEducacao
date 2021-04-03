import styled from 'styled-components'

export const HeroContainer = styled.div`
	width: 100%;
	margin-top: 3rem;
	padding: 2rem 2rem 2rem 4rem;
	line-height: 1.5;
	font-size: 16px;
	align-self: flex-start;

	@media only screen and (max-width: 1320px) {
        font-size: 14px;
    }
	@media only screen and (max-width: 1180px) {
        font-size: 12px;
    }
	@media only screen and (max-width: 1020px) {
        font-size: 11px;
    }
	@media only screen and (max-width: 860px) {
        font-size: 10px;
    }
	@media only screen and (max-width: 760px) {
        font-size: 9px;
    }
	@media only screen and (max-width: 400px) {
		padding: 0.5rem 0.5rem 0.5rem 1rem;
        font-size: 8px;
    }
`


export const HeroTitle = styled.h2`
	-webkit-text-stroke-width: 3px; 
    -webkit-text-stroke-color: var(--bg-darker-orange); 
	color: transparent;
	font-weight:800;
	font-size: 4.5em;
	text-align: left;
  	text-justify: inter-word;
	overflow: hidden;

	span {
		display: inline-block;
		transform: translateY(100%);
	}

	@media only screen and (max-width: 1020px) {
		-webkit-text-stroke-width: 2px; 
    }
	@media only screen and (max-width: 400px) {
		-webkit-text-stroke-width: 1px; 
    }
`

export const HeroSubtitle = styled.h3`
    color: var(--bg-darker-orange); 
	font-weight:800;
	font-size: 3.5em;
	overflow: hidden;

	span {
		display: inline-block;
		transform: translateY(100%);
	}
`

export const HeroText = styled.p`
    color: black; 
	font-weight:200;
	font-size: 2em;
	overflow: hidden;
	width: 80%;

	span {
		display: inline-block;
		transform: translateY(100%);
	}

	@media only screen and (max-width: 1180px) {
        width: 95%;
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