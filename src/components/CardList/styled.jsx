import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const CardContentContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    pointer-events: none;
`

export const CardContent = styled(motion.div)`
    pointer-events: auto;
    position: relative;
    border-radius: 20px;
    background: white;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0 auto;
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
    color: white;
    position: absolute;
    top: 15px;
    left: 15px;
    max-width: 300px;

    p {
        font-size: 1rem;
    }
`

export const Name = styled.span`
    color: white;
    font-size: 2.5rem;
    text-transform: uppercase;
`

export const CardOpenLink = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
`

export const Item = styled.li`
    position: relative;
    padding: 25px;
    height: 460px;
    flex: 0 0 25%;
    max-width: 25%;  
    

    @media only screen and (max-width: 1700px) {
        flex: 0 0 33%;
        max-width: 33%;
    }

    @media only screen and (max-width: 1200px) {
        flex: 0 0 50%;
        max-width: 50%;
    }

    @media only screen and (max-width: 900px) {
        flex: 1 0 100%;
        max-width: 100%;
        padding: 10px;
        padding-left: 0;
        padding-right: 0;
    }
`