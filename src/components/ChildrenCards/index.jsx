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

                        <section>

                            <div className="shadow b-radius border border-dark mb-3">
                                <div className="bg-success b-radius" style={{
                                    height: '10px', width: `${(children.collected === children.goal / 4) && "25%" ||
                                        (children.collected <= children.goal / 2) && "50%" ||
                                        (children.collected <= (children.goal / 4) * 3) && "75%" ||
                                        (children.collected <= children.goal / 1) && "100%"}`
                                }
                                }></div>
                            </div>

                            <div>
                                <span><strong>Conseguimos: </strong> R$ {children.collected}</span>
                            </div>

                            <div>
                                <span><strong>Meta: </strong>R$ {children.goal}</span>
                            </div>

                            <div>
                                <span><strong>Guardiões: </strong> {children.guardians}</span>
                            </div>

                        </section>

                        <hr />

                        <S.Button href="/littleCow"> Doar</S.Button>
                    </S.Card>
                ))
            }
        </S.List>
    );
}

export default ChildrenCards

