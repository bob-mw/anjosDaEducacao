import React, { useRef, useEffect, useCallback } from 'react'
import * as S from './styled'

const Modal = ({ title, subtitle, showModal, setShowModal }) => {

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
                    <S.Description>{title}</S.Description>
                    <S.Description>{subtitle}</S.Description>
                    <S.ButtonWrapper>
                    <S.Button className="inverted" >Cadastrar</S.Button>
                        <S.Button
                            aria-label='Close modal'
                            onClick={() => setShowModal(prev => !prev)}
                        >
                            Não
                        </S.Button>
                    </S.ButtonWrapper>
                </S.Panel>
            </S.Overlay>
        ) : null}
      </>
    )
  }

export default Modal