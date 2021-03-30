import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'
import { Link } from 'react-router-dom'

import * as S from './styled'
import { items } from '../../Pages/Mural/data'


const CardItem = ({ id }) => {
  const { name, title } = items.find(item => item.id === id);

  return (
    <>
      <S.Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
      >
        <Link to="/" />
      </S.Overlay>
      <S.CardContentContainer>
        <S.CardContent layoutId={`card-container-${id}`}>
          <S.CardImageContainer
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`../../img/mural/${id}.jpg`} alt="" />
          </S.CardImageContainer>
          <S.TitleContainer
            layoutId={`title-container-${id}`}
          >
            <S.Name>{name}</S.Name>
            <h2>{title}</h2>
          </S.TitleContainer>
          <S.ContentContainer animate>
            <LoremIpsum
              p={3}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            />
          </S.ContentContainer>
        </S.CardContent>
      </S.CardContentContainer>
    </>
  )
}

export default CardItem
