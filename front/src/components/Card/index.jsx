import React, { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'

import * as S from './styled'

function CompactCard({ children, onExpand, disabled }) {
    return (
      <motion.div
        className="card compact"
        layoutId="expandable-card"
        onClick={disabled ? undefined : onExpand}
      >
        {children}
      </motion.div>
    );
  }

const Card = ({onCollapse, onExpand, disabled}) => {

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
                <CompactCard onExpand={expandCard} disabled={disabled} >
                    <Content disabled={disabled} />
                </CompactCard>
                )}
            </AnimateSharedLayout>
        </S.CardContainer>
    )
}

export default Card