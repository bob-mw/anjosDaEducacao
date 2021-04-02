import React from 'react'

import Menu from '../Menu'
import * as S from './styled'

const Navbar = () => {
    
    return (
        <S.Container>
            <S.LogoNavbar/>
            <S.Name>Anjos da Educação</S.Name>
            <Menu/>
        </S.Container>
    )
}

export default Navbar

