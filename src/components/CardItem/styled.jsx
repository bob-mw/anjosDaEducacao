import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Overlay = styled(motion.div)`
    z-index: 1;
    position: fixed;
    will-change: opacity;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 990px;

    a {
        display: block;
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100vw;
        left: 50%;

        transform: translateX(-50%);
    }

`

export const CardContentContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    pointer-events: none;

    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 1;
    overflow: hidden;
    padding: 40px 0;

    @media only screen and (max-width: 600px) {
        padding: 0;
    }
`

export const CardContent = styled(motion.div)`
    position: relative;
    border-radius: 20px;
    background: white;
    overflow: hidden;
    height: auto;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    pointer-events: none;
`

export const CardImageContainer = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 420px;
    width: 100vw;
`

export const TitleContainer = styled(motion.div)`
    position: absolute;
    top: 15px;
    left: 15px;
    max-width: 300px;
`

export const Name = styled.span`
    color: #fff;
    font-size: 2.5rem;
    text-transform: uppercase;
`

export const ContentContainer = styled(motion.div)`
    padding: 460px 35px 35px 35px;
    max-width: 700px;
    width: 90vw;
`