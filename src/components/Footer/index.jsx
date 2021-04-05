import React from 'react'

import * as S from './styled'

const Footer = () => {

    return(
        <S.FooterContainer>
            <S.PapelariaContainer>
                <S.Description>Nossos parceiros:</S.Description>
                <S.Image src={'/papelaria/logopapelaria1.jpg'}></S.Image>
                <S.Image src={'/papelaria/logopapelaria2.jpg'}></S.Image>
                <S.Image src={'/papelaria/logopapelaria3.jpg'}></S.Image>
            </S.PapelariaContainer>
        </S.FooterContainer>
    )
}

export default Footer