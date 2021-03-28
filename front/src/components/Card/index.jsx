import React, { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'

import * as S from './styled'

const Card = () => {

    return (
        <S.CardContainer>
            <AnimateSharedLayout>
                {isExpanded ? (
                <ExpandedCard onCollapse={collapseDate} day={day}>
                    <Content day={day} disabled={disabled} />
                </ExpandedCard>
                ) : (
                <CompactCard onExpand={expandDate} disabled={disabled} day={day}>
                    <Content day={day} disabled={disabled} />
                </CompactCard>
                )}
            </AnimateSharedLayout>
        </S.CardContainer>
    )
}

export default Card