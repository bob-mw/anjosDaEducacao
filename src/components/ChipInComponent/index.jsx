import React from 'react'
import dataFake from '../../data/fakeDbChildrens'

import * as S from './styled'

const ChipIn = () => {

    const children = dataFake[0];

    return (
        <S.Container>

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

            <S.DetailsContainer>

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

                <S.Table>
                    <thead>
                        <tr>
                            <th>Qt</th>
                            <th>Material</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            children.materials.map((material, index) => (
                                <tr key={index}>
                                    <td>{material.amount}</td>
                                    <td>{material.name}</td>
                                    <td>{material.price}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </S.Table>

                <S.Details>Taxa de entrega:</S.Details>

                <S.Details>Total:</S.Details>


                <S.PaymentMethodContainer>
                    <h1 className="text-center">Método de Pagamento</h1>
                    <div className="my-3">

                        <label htmlFor="card" className="d-flex align-items-center my-2">
                            <input value="card" name="paymentMethod" className="mx-2" type="radio" id="card" />
                            Cartão
                        </label>

                        <label htmlFor="ticket" className="d-flex align-items-center my-2">
                            <input value="ticket" name="paymentMethod" className="mx-2" type="radio" id="ticket"/>
                            Boleto
                        </label>
                    </div>
                </S.PaymentMethodContainer>

            </S.DetailsContainer>

            <hr />

            <a className="btn w-100 m-3" style={ { background: '#f1d7d8ff', 'border-radius': '15px' } } href="/paymentForm" >Próximo</a>

        </S.Container>
    )
}

export default ChipIn
