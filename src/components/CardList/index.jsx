import React from 'react'

import * as S from './styled'
import { items } from '../data'


const Card = ({ id, title, name, theme }) => {
  return (
    <S.Item>
      <S.CardContentContainer>
        <S.CardContent layoutId={`card-container-${id}`}>
          <S.CardImageContainer
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`images/${id}.jpg`} alt="" />
          </S.CardImageContainer>
          <S.TitleContainer
            layoutId={`title-container-${id}`}
          >
            <S.Name>{name}</S.Name>
            <h2>{title}</h2>
          </S.TitleContainer>
        </S.CardContent>
      </S.CardContentContainer>
      <S.CardOpenLink to={id} />
    </S.Item>
  );
}

export const CardList = ({ selectedId }) => {
  return (
    <S.List>
      {items.map(card => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </S.List>
  );
}
