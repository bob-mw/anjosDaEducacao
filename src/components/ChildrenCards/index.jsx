import React, { useContext } from 'react';
import dataChildrens from '../../data/fakeDbChildrens';
import * as S from './styled';
import context from '../../context/context';

const ChildrenCards = () => {

    const { chipInPage } = useContext(context);
    
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

                                <h1 className="align-self-end">{ Math.floor(children.collected * 100 / children.goal) } %</h1>
                                
                            <S.ProgressBarContainer>
                                <S.ProgressBar style={{
                                        width: `${ children.collected * 100 / children.goal }%`
                                }
                                }></S.ProgressBar>
                            </S.ProgressBarContainer>

                            <S.Details>Conseguimos: R$ {children.collected}</S.Details>

                            <S.Details>Meta: R$ {children.goal}</S.Details>

                            <S.Details>Guardiões: {children.guardians}</S.Details>

                        <hr />

                        {
                            (chipInPage) ? (<S.Button href="/chipIn"> Doar</S.Button>) : (<S.Button href="/childDetails">Detalhes</S.Button>)
                        }
                    </S.Card>
                ))
            }
        </S.List>
    );
}

export default ChildrenCards

