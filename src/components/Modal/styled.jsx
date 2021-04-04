import styled from 'styled-components'
import { motion } from 'framer-motion'

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Panel = styled(motion.div)`
    position: relative;
    width: 40%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;

    border-radius: 2rem;
    background: linear-gradient(to left bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
    box-shadow:0 1rem 1rem rgba(128, 91, 91, 0.5); 
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
    position: absolute;
    cursor: pointer;
    right: 0.5rem;
    top: 0.5rem;
    margin: 1.5rem;
    width: ${side}rem;
    height: ${side}rem;
    transition: transform 0.2s, opacity 0.2s !important;
    will-change: transform;
    &:hover {
        opacity: 0.7;
        transform: scale(1.2);
    }
`