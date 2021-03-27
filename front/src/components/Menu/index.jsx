import React from 'react'
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