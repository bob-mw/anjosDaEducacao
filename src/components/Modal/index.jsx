import React, { useRef, useEffect, useCallback } from 'react'
import * as S from './styled'

export const Modal = ({ showModal, setShowModal }) => {

    const modalRef = useRef()

    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    };
  
    return (
      <>
        {showModal ? (

        ) : null}
      </>
    );
  };