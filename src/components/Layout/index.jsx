import React from 'react'

import GlobalStyles from '../../css/GlobalStyles'
import Navbar from '../Navbar'
import * as S from './styled'

const Layout = ({children}) => {

    return (
        <>
            <GlobalStyles/>
            <S.Background>
                <S.LogoContainer>
                    <S.LogoBackground/>
                </S.LogoContainer>
                <Navbar/> 
                <S.Blur/>
                <S.Container>
                    <S.Panel>
                        {children}
                    </S.Panel>
                </S.Container>
            </S.Background>
        </>
    )
}

export default Layout