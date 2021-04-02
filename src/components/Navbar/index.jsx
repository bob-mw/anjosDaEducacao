import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

import Menu from '../Menu'
import * as S from './styled'

const Navbar = () => {

    let name = useRef(null)

    useEffect(() => {


    }, [])
    
    return (
        <S.Container>
            <S.Wrapper>
                <S.LogoNavbar/>
                <S.Name ref={name}>Anjos da Educação</S.Name>
            </S.Wrapper>
            <Menu/>
        </S.Container>
    )
}

export default Navbar

