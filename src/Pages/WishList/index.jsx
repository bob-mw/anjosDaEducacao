import React, { useEffect, useContext } from 'react'
import ChildrenCards from '../../components/ChildrenCards/index';
import context from '../../context/context';

import * as S from './styled'

const WishList = () => {
    const { chipInPage, setChipInPage } = useContext(context);

    useEffect(() => {
        setChipInPage(true)
    }, [chipInPage])

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
