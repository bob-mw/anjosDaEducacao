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

export const Panel = styled.div`
    position: relative;
    width: 40%;
    height: 40%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    z-index: 10;

    border-radius: 2rem;
    background: linear-gradient(to left bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
    box-shadow:0 1rem 1rem rgba(128, 91, 91, 0.5); 
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`