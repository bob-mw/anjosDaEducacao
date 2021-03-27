import React from 'react'
import { motion, useCycle } from 'framer-motion'



import * as S from './styled'

const Menu = () => {
  
    return (
        <>
            <S.ToggleBtn>
                <S.Top></S.Top>
                <S.Middle></S.Middle>
                <S.Bottom></S.Bottom>
            </S.ToggleBtn>
            <S.Sidebar/>
        </>
    )
}

export default Menu