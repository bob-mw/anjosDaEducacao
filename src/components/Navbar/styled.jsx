import styled from 'styled-components'

import Logo from '../Logo'

export const Container = styled.nav`
    position: absolute;
    width: 100%;
    height: 6rem;
    top: 0;
    left: 0;
    z-index: 2;
`

export const LogoNavbar = styled(Logo)`
    position: absolute;
    top: 1rem;
    left: 2rem;
    width: 6rem;
`
