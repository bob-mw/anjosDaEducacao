import React, { useRef, useEffect, useCallback } from 'react'
import * as S from './styled'

export const OneButtonModal = ({ title, subtitle, buttonName, path, showModal, setShowModal }) => {

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
                      <S.Button href={path} className="inverted" >{buttonName}</S.Button>
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

export const TwoButtonModal = ({ title, subtitle, firstButtonName, secondButtonName, firstPath, secondPath, showModal, setShowModal }) => {

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
                  <S.Menu
                      aria-label='Close modal'
                      onClick={() => setShowModal(prev => !prev)}
                  >
                    <S.Top/>
                    <S.Bottom/>
                  </S.Menu>
                  <S.DescriptionWrapper>
                    <S.Description>{title}</S.Description>
                    <S.Description>{subtitle}</S.Description>
                  </S.DescriptionWrapper>
                  <S.ButtonWrapper>
                    <S.Button href={firstPath}>{firstButtonName}</S.Button>       
                    <S.Button href={secondPath}>{secondButtonName}</S.Button>   
                  </S.ButtonWrapper>
              </S.Panel>
          </S.Overlay>
      ) : null}
    </>
  )
}