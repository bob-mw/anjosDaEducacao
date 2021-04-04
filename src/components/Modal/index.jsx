import React, { useRef, useEffect, useCallback } from 'react'
import * as S from './styled'

export const Modal = ({ showModal, setShowModal }) => {

    const modalRef = useRef()

    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    }
    
    const keyPress = useCallback(
        e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false);
            console.log('I pressed');
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

        ) : null}
      </>
    );
  };