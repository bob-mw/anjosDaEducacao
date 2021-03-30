import React, { useState } from 'react'
import * as S from './styled'

import Menu from '../../Menu'
import CardMural from '../../CardMural'

const Mural = () => {
  
    const [expandedCard, setCollapsedCard] = useState()
    const texts = ["um", "dois", "três"]

    return (
        <>
        <S.Background>
            <S.LogoNavbar/>
            <Menu/>
            <S.Panel>
            {texts.map((text, index) => (
                <CardMural
                    key={index}
                    text={text}
                    disabled={expandedCard !== text && expandedCard !== undefined}
                    onExpand={() => setCollapsedCard(text)}
                    onCollapse={() => setCollapsedCard()}
                />
            ))}
            </S.Panel>
        </S.Background>
        </>
    )
}

export default Mural