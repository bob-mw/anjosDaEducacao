import React, { useState } from 'react'
import { AnimateSharedLayout } from 'framer-motion'

import * as S from './styled'

const Content = ({ text, disabled }) => {
    return (
      <S.Content
        className="title"
        layoutId="title"
        style={{ opacity: disabled ? 0.2 : 1 }}
      >
        {text}
      </S.Content>
    );
}

const ExpandedCard = ({ children, onCollapse }) => {
    return (
      <>
        <S.ExpandedCard
          className="expanded"
          layoutId="expandable-card"
          onClick={onCollapse}
        >
          {children}
        </S.ExpandedCard>
        <motion.p
          className="card expanded secondary"
          onClick={onCollapse}
          transition={{ delay: 0.3 }}
          initial={{ opacity: 0, top: "6rem" }}
          animate={{ opacity: 1, top: "3rem" }}
        >
            Teste
        </motion.p>
      </>
    );
}

const CompactCard = ({ children, onExpand, disabled }) => {
    return (
      <S.CompactCard
        className="compact"
        layoutId="expandable-card"
        onClick={disabled ? undefined : onExpand}
      >
        {children}
      </S.CompactCard>
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