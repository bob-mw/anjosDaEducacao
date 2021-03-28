import React, { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'

import * as S from './styled'

const Card = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const collapseCard = () => {
        setIsExpanded(false)
        onCollapse()
    }

    const expandCard = () => {
        setIsExpanded(true)
        onExpand()
    }

    return (
        <S.CardContainer>
            <AnimateSharedLayout>
                {isExpanded ? (
                <ExpandedCard onCollapse={collapseCard} >
                    <Content disabled={disabled} />
                </ExpandedCard>
                ) : (
                <CompactCard onExpand={expandDate} disabled={disabled} >
                    <Content disabled={disabled} />
                </CompactCard>
                )}
            </AnimateSharedLayout>
        </S.CardContainer>
    )
}

export default Card