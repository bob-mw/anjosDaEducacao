import React from 'react'
import dataFake from '../../data/fakeDbChildrens'

import * as S from './styled'

const ChipIn = () => {

    const children = dataFake[0];

    const SHIPPING_VALUE = 10;

    const materials = children.materials.map((material) => (material.price * material.amount))

    const totalPrice = materials.reduce((acc, price) => acc + price);

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


                <S.Details>Conseguimos: R$ {(children.collected).toFixed(2)}</S.Details>

                <S.Details>Meta: R$ {(children.goal).toFixed(2)}</S.Details>

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
                                    <td>{(material.price).toFixed(2)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </S.Table>

                <S.Details>Taxa de entrega: { SHIPPING_VALUE.toFixed(2) }</S.Details>

                <S.Details>Total: { (totalPrice + SHIPPING_VALUE).toFixed(2) } </S.Details>


                <S.PaymentMethodContainer>
                    <S.Subtitle>Método de Pagamento</S.Subtitle>
                    <S.RadioContainer>

                        <S.RadioLabel htmlFor="card">
                            <S.Input value="card" name="paymentMethod" type="radio" id="card"/>
                            Cartão
                        </S.RadioLabel>

                        <S.RadioLabel htmlFor="ticket">
                            <S.Input value="ticket" name="paymentMethod" type="radio" id="ticket"/>
                            Boleto
                        </S.RadioLabel>
                    </S.RadioContainer>
                </S.PaymentMethodContainer>

            </S.DetailsContainer>

            <S.Button href="/paymentForm">Próximo</S.Button>

        </S.Container>
    )
}

export default ChipIn
