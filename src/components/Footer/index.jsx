import React from 'react'

import * as S from './styled'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/instagram.svg'
import gmail from '../../img/gmail.svg'

const Footer = () => {

    return(
        <S.Footer>
            <S.FooterContainer>
                <S.PapelariaContainer>
                    <S.Description>Nossos parceiros:</S.Description>
                    <S.Image src={'/papelaria/logopapelaria1.jpg'}></S.Image>
                    <S.Image src={'/papelaria/logopapelaria2.jpg'}></S.Image>
                    <S.Image src={'/papelaria/logopapelaria3.jpg'}></S.Image>
                </S.PapelariaContainer>
                <S.SocialMediaContainer>
                    <S.Description>Nossos contatos:</S.Description>
                    <S.Icon src={facebook}></S.Icon>
                    <S.Icon src={instagram}></S.Icon>
                    <S.Icon src={gmail}></S.Icon>
                </S.SocialMediaContainer>
            </S.FooterContainer>
        </S.Footer>
    )
}

export default Footer