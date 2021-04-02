import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export const Path = styled(motion.path)`
    fill: #fff;
    stroke:#fff;
    stroke-miterlimit:10;
    stroke-width:5px;
`

export const Link = styled(NavLink)``