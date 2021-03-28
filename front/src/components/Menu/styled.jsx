import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Sidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 50rem;
  width: 20rem;
  background: linear-gradient(to left bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  backdrop-filter: blur(2rem);
  border-radius: 2rem 0 0 2rem;
  z-index:3;
  clip-path: circle(0 at 16.3rem 3.7rem);
`

const thickness = 4;

const Shape = styled.span`
  display: inline-block;
  position: absolute;
  right: 0;
  width: 100%;
  height: ${thickness}px;
  border-radius: 3px;
  background: var(--bg-blue);
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

const side = 2.5;

export const ToggleBtn = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  margin: 1.5rem;
  width: ${side}rem;
  height: ${side}rem;
  z-index: 4;
  transition: transform 0.2s, opacity 0.2s !important;
  will-change: transform;
  &:hover {
    opacity: 0.7;
    transform: scale(1.2);
  }
`

export const List = styled.ul`
  padding: 8rem 0 0 2rem;
  text-align: left;
  list-style: none;
`

export const Item = styled.li`  
  padding: 1rem 0;
  display: flex;
  font-size: 2rem;
  color: var(--bg-dark-blue);

  &:first-child {
      font-size: 3rem;
  }   
`
export const Link= styled.a`
  cursor: pointer;
  transform-origin: center left;
  transition: all .2s ease-in-out;
  
  &:hover { 
    transform: scale(1.3);
  }

`