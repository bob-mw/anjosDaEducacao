import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`

export const Panel = styled(motion.div)`
    position: relative;
    width: 40%;
    height: auto;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    border-radius: 2rem;
    background: linear-gradient(to left bottom, #fff, #ECE9E6);
    box-shadow:0 1rem 1rem rgba(128, 91, 91, 0.5); 

    @media only screen and (max-width: 1450px) {
        font-size: 12px;
    }

    @media only screen and (max-width: 1150px) {
        font-size: 8px;
    }

    @media only screen and (max-width: 800px) {
        width: 60%;
    }
`

const thickness = 5;

const Shape = styled(motion.span)`
    display: inline-block;
    position: absolute;
    right: 0;
    width: 100%;
    height: ${thickness}px;
    border-radius: 3px;
    background: var(--bg-darker-orange);
    z-index: 10;
`

export const Top = styled(Shape)`
    top: 50%;
    transform: rotate(45deg);
    width: 130%;
`

export const Bottom = styled(Shape)`
    top: 50%;
    transform: rotate(-45deg);
    width: 130%;
`

const side = 2;

export const Menu = styled(motion.div)`
    position: flex;
    align-self: flex-end;
    cursor: pointer;
    margin: 0 1rem 1rem 0;
    width: ${side}rem;
    height: ${side}rem;
    transition: transform 0.2s, opacity 0.2s !important;
    will-change: transform;
    &:hover {
        opacity: 0.7;
        transform: scale(1.2);
    }
`

export const DescriptionWrapper = styled.div`
    display: flex;
	flex-direction: column;
    justify-items: center;
    margin-top: 1rem;
`

export const Description = styled.h2`
    color: var(--bg-darker-orange);
    font-size: 2em;
    text-transform: uppercase;
    padding: 0.5rem 1rem 0.5rem 1rem;
`

export const ButtonWrapper = styled.div`
    display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 1rem;
    align-items: center;
    justify-items: stretch;
    margin: 1rem;

	@media only screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`
    
export const Button = styled.a`
    font-size: 2em;
    text-decoration: none !important;
    cursor: pointer;
	text-transform: uppercase;
	letter-spacing: .15rem;
	transition: all .3s;

    display: inline-block;
	padding: 1.5rem 3rem;
	border-radius: 2rem;
    border: none;
	color: #fff;
	position: relative;
	overflow: hidden;
	z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;

    border: 3px solid var(--bg-dark-orange);
    box-sizing: border-box;
    border-radius: 10rem;


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

        &.inverted{
            color: var(--bg-dark-orange);
        }
	}

    &.inverted {
        color: var(--bg-dark-orange);

        &:after {
            background: linear-gradient(to left bottom, #fff, #ECE9E6);
        }
    }

    @media only screen and (max-width: 800px) {
        padding: 1rem 1.5rem;
    }

`