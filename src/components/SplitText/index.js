import React from 'react'
import * as S from "./styled"

const SplitText = ({copy, role}) => {

  return (
    <S.Wrapper aria-label={copy} role={role}>
        {copy.split("").map(function(char, index){
            return <S.Item aria-hidden="true" key={index} data-title={char}>{char}</S.Item>
        })}
    </S.Wrapper>
  )
}

export default SplitText
