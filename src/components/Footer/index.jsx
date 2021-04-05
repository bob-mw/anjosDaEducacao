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
                    <S.Description>Nossas contatos:</S.Description>
                    <S.Image src={facebook}></S.Image>
                    <S.Image src={instagram}></S.Image>
                    <S.Image src={gmail}></S.Image>
                </S.SocialMediaContainer>
            </S.FooterContainer>
        </S.Footer>
    )
}

export default Footer