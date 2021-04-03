import React from 'react';
import dataChildrens from '../../data/fakeDbChildrens';
import * as S from './styled'

const ChildrenCards = () => {

    return (
        <S.List>
            {
                dataChildrens.map((children, index) => (
                    <S.Card key={index}>
                        <S.Name>{children.name}</S.Name>
                        <S.Description>
                            {
                                (children.teaching === "EF") && "Ensino Infantil" || 
                                (children.teaching === "F1") && "Fundamental 1" || 
                                (children.teaching === "F2") && "Fundamental 2" || 
                                (children.teaching === "EM") && "Ensino Médio" 
                            }
                        </S.Description>
                        <S.Description>{children.schoolName}</S.Description>
                        
                        <hr />

                            <S.ProgressBarContainer>
                                <S.ProgressBar style={{
                                        width: `${(children.collected === children.goal / 4) && "25%" ||
                                        (children.collected <= children.goal / 2) && "50%" ||
                                        (children.collected <= (children.goal / 4) * 3) && "75%" ||
                                        (children.collected <= children.goal / 1) && "100%"}`
                                }
                                }></S.ProgressBar>
                            </S.ProgressBarContainer>

                            <S.Details>Conseguimos: R$ {children.collected}</S.Details>

                            <S.Details>Meta: R$ {children.goal}</S.Details>

                            <S.Details>Guardiões: {children.guardians}</S.Details>

                        <hr />

                        <S.Button href="/littleCow"> Doar</S.Button>
                    </S.Card>
                ))
            }
        </S.List>
    );
}

export default ChildrenCards

