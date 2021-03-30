import React from 'react'

import * as S from './styled'
import { items } from '../../Pages/Mural/data'


const Card = ({ id, title, name, theme }) => {

  const Img = require(`../../img/mural/${id}.jpg`).ReactComponent

  return (
    <S.Item>
      <S.CardContentContainer>
        <S.CardContent layoutId={`card-container-${id}`}>
          <S.CardImageContainer
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={Img} alt="" />
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
  )
}

const CardList = ({ selectedId }) => {
  return (
    <S.List>
      {items.map(card => (
        <Card key={card.id} {...card} isSelected={card.id === selectedId} />
      ))}
    </S.List>
  )
}

export default CardList
