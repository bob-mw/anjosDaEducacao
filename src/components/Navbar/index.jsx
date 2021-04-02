import React from 'react'

import Menu from '../Menu'
import * as S from './styled'

const Navbar = () => {
    
    return (
        <S.Container>
            <S.Wrapper>
                <S.LogoNavbar/>
                <S.Name>Anjos da Educação</S.Name>
            </S.Wrapper>
            <Menu/>
        </S.Container>
    )
}

export default Navbar

