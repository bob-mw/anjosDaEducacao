import React from 'react'
import ChildrenCards from '../../components/ChildrenCards/index'

import * as S from './styled'

const WishList = () => {
    return (
        <>
            <S.Title>Lista de Pedidos</S.Title>
            <S.Container>
                <ChildrenCards />
            </S.Container>
        </>
    )
}

export default WishList
