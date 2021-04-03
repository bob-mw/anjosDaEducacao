import React from 'react'
import ChildrenCard from '../../components/ChildrenCards/index'

import * as S from './styled'

const WishList = () => {
    return (
        <>
            <S.Title>Lista de Pedidos</S.Title>
            <S.Container>
                <ChildrenCard />
            </S.Container>
        </>
    )
}

export default WishList
