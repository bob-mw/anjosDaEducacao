import React, { useRef, useEffect, useCallback } from 'react'
import * as S from './styled'

const Modal = ({ showModal, setShowModal }) => {

    const modalRef = useRef()

    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false)
      }
    }
    
    const keyPress = useCallback(
        e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false)
            console.log('I pressed')
        }
        },
        [setShowModal, showModal]
    )

    useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
      )
  
    return (
      <>
        {showModal ? (
            <S.Overlay  onClick={closeModal} ref={modalRef}>
                <S.Panel>
                    <S.Description>REGISTRO REALIZADO</S.Description>
                    <S.Description>Gostaria de cadastrar um filho?</S.Description>
                    <S.Button>Cadastrar</S.Button>
                    <S.Menu
                        aria-label='Close modal'
                        onClick={() => setShowModal(prev => !prev)}
                    >
                        <S.Top/>
                        <S.Bottom/>
                    </S.Menu>
                </S.Panel>
            </S.Overlay>
        ) : null}
      </>
    )
  }

export default Modal