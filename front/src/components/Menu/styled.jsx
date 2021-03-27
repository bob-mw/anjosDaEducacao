import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Sidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 20rem;
  background: linear-gradient(to left bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  backdrop-filter: blur(2rem);
  border-radius: 2rem 0 0 2rem;
`

const thickness = 4;

const Shape = styled(motion.span)`
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

export const ToggleBtn = styled(motion.div)`
  position: fixed;
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