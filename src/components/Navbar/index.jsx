import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

import Menu from '../Menu'
import * as S from './styled'

const Navbar = () => {

    gsap.registerPlugin(TextPlugin)

    let nameRef = useRef(null)
    let name = 'Anjos da Educação'

    useEffect(() => {
        gsap.to(nameRef.current, {
            duration: 1.5,
            text: name,
            ease: "power3.out",
            delay: 1
        })

    }, [])

    return (
        <S.Container>
            <S.Wrapper>
                <a href="/">
                    <S.LogoNavbar />
                </a>
                <S.Name ref={nameRef}></S.Name>
            </S.Wrapper>
            <Menu />
        </S.Container>
    )
}

export default Navbar

