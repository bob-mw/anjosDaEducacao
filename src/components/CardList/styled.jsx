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
    height: 100%;
    width: 100vw;
`

export const CardImage = styled.img`
    position: relative;
    left:-10%;
    display: block;
    height: 100%;
    width: auto;
    max-width: 100%;
    object-fit: cover;
`

export const TitleContainer = styled(motion.div)`
    color: var(--bg-darker-pink);
    position: absolute;
    bottom: 15px;
    left: 15px;
    max-width: 300px;
    padding: 0.5rem;
    border-radius: 1rem;
    background: linear-gradient(to left bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.8));
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.3); 
`

export const Name = styled.span`
    color: var(--bg-darker-orange);
    font-size: 2.5rem;
    font-weight: 600;
    text-transform: uppercase;
`

export const Description = styled.h2`
    color: var(--bg-darker-orange);
    font-size: 1.25rem;
    text-transform: uppercase;
    padding-top: 0.5rem;
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
  top: 0;
`

export const Middle = styled(Shape)`
  top: 50%;
  bottom: 50%;
  transform: translateY(-50%);
`

export const Bottom = styled(Shape)`
  bottom: 0;
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