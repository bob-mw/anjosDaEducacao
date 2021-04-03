import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Overlay = styled(motion.div)`
    z-index: 1;
    position: fixed;

    height: 100%;
    width: 100%;

    a {
        display: block;
        position: fixed;
        width: 100%;
        height: 100%;

        left: 50%;
        transform: translateX(-50%);
        top: 0;
        bottom: 0;

        background: rgba(0, 0, 0, 0.4);
        will-change: opacity;
    }

`

export const CardContentContainer = styled.div`
    position: fixed;
    display: block;
    pointer-events: none;

    top: 50vh;
    transform:translateY(-50%);
    left: 0;
    right: 0;

    z-index: 5;
    overflow: hidden;
`

export const CardContent = styled(motion.div)`
    position: relative;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    background: white;
    overflow: hidden;
    height: auto;
    width: 100%;
    max-width: 43rem;
    margin: 0 auto;
    pointer-events: none;

`

export const CardImageContainer = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    max-height: 400px;
    max-width: 100vw;

    @media only screen and (max-width: 600px) {
        height:300px
    }
`

export const CardImage = styled.img`
    display: block;
    height: auto;
    width: auto;
    max-width: 100%;
    object-fit: cover;
`

export const TitleContainer = styled(motion.div)`
    color: var(--bg-darker-orange);
    position: absolute;
    bottom: 13.7rem;
    left: 15px;
    max-width: 300px;
    padding: 1rem;
    border-radius: 1rem;
    background: linear-gradient(to left bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8));
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.3); 

    @media only screen and (max-width: 600px) {
        bottom: 17rem;
    }

    @media only screen and (max-width: 500px) {
        bottom: auto;
        top: 1rem;
    }
`

export const Description = styled.h2`
    color: var(--bg-darker-orange);
    font-size: 1.25rem;
    text-transform: uppercase;
    padding-top: 0.5rem;

    @media only screen and (max-width: 600px) {
        font-size: 1rem;
    }

    @media only screen and (max-width: 500px) {
        font-size: 0.8rem;
    }
`

export const Name = styled.span`
    color: var(--bg-darker-orange);
    font-size: 2.5rem;
    font-weight: 600;
    text-transform: uppercase;

    @media only screen and (max-width: 600px) {
        font-size: 2rem;
    }

    @media only screen and (max-width: 500px) {
        font-size: 1.5rem;
    }
`

export const ContentContainer = styled(motion.div)`
    padding: 26rem 2rem 2rem 2rem;
    max-width: 43rem;
    width: 90vw;

    @media only screen and (max-width: 600px) {
        padding: 20rem 2rem 2rem 2rem;
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