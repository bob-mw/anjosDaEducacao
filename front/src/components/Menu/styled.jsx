import styled from 'styled-components'
import { motion } from 'framer-motion'

const thickness = 4;

const Shape = styled(motion.span)`
  position: absolute;
  right: 0;
  width: 100%;
  height: ${thickness}px;
  border-radius: 3px;
  background: white;
`;
export const Top = styled(Shape)`
  top: calc(0% + ${thickness / 2}px);
`;
export const Middle = styled(Shape)`
  top: 50%;
  transform: translateY(-50%);
`;
export const Bottom = styled(Shape)`
  bottom: calc(0% + ${thickness / 2}px);
`;

const side = 2.5;

export const ToggleBtn = styled.div`
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
`;