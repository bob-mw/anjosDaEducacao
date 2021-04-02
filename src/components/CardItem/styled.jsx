import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Overlay = styled(motion.div)`
    z-index: 1;
    position: fixed;
    will-change: opacity;
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
    color: white;
    position: absolute;
    top: 15px;
    left: 15px;
    max-width: 300px;
`

export const Description = styled.h2`
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
    padding-top: 0.5rem;
`

export const Name = styled.span`
    color: white;
    font-size: 2.5rem;
    text-transform: uppercase;
`

export const ContentContainer = styled(motion.div)`
    padding: 26rem 2rem 2rem 2rem;
    max-width: 43rem;
    width: 90vw;

    @media only screen and (max-width: 600px) {
        padding: 20rem 2rem 2rem 2rem;
    }
`