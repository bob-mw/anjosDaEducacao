import React from 'react'

import GlobalStyles from '../../css/GlobalStyles'
import Navbar from '../Navbar'
import * as S from './styled'

const Layout = ({children}) => {

    return (
        <>
            <GlobalStyles/>
            <S.Background>
                <Navbar/> 
                {children}
            </S.Background>
        </>
    )
}

export default Layout