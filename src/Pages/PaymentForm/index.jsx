import React, { useState } from 'react';
import Cards from 'react-credit-cards';

import * as S from './styled'

const PaymentForm = () => {

    const [cardInformations, setCardInformations] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    });

    const handleInputFocus = ({ target: { name } }) => {
        setCardInformations({ ...cardInformations, focus: name });
    }

    const handleInputChange = ({ target: { name, value } }) => {

        setCardInformations({ ...cardInformations, [name]: value });
    }

    const { cvc, expiry, focus, name, number } = cardInformations;

    return (
            <>
                <S.Title>Informações do Cartão</S.Title>
            <S.Container id="PaymentForm">

            <Cards
                    cvc={cvc}
                    expiry={expiry}
                    focused={focus}
                    name={name}
                    number={number}
                />
                
                <S.Form>
                    <S.Label htmlFor="cardNumber">
                        Número:
                        <S.Field
                            id="cardNumber"
                            type="tel"
                            name="number"
                            placeholder="Número do Cartão"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    </S.Label>
                    <S.Label htmlFor="cardName">
                        Nome:
                        <S.Field
                            id="cardName"
                            type="tel"
                            name="name"
                            placeholder="Nome que está no Cartão"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    </S.Label>

                    <S.FieldContainer>
                        <S.Label htmlFor="validateDate">
                            Valido até:
                            <S.Field
                                id="validateDate"
                                type="data"
                                name="expiry"
                                placeholder="mês/ano"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                />
                        </S.Label>
                        <S.Label htmlFor="validateDate">
                            CVC
                            <S.Field
                                id="validateDate"
                                type="number"
                                name="cvc"
                                placeholder="cvc"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                />
                        </S.Label>           
                    </S.FieldContainer>

                    <S.Label htmlFor="donate">
                        Valor a ser doado
                        <S.Field
                            id="donate"
                            type="number"
                            name="donate"
                            placeholder="00.00"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    </S.Label>
                    <S.Label htmlFor="paymentMethod">
                                Método de Pagamento
                            <S.Select
                                id="validateDate"
                                type="number"
                                name="payment"
                                placeholder="cvc"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                >
                                <option value="Debit" selected disabled>Escolher</option>
                                <option value="Debit">Débito</option>
                                <option value="Credit">Crédito</option>
                            </S.Select>
                    </S.Label>
                
                    <S.Button>Doar</S.Button>
                
                </S.Form>


            </S.Container>
        </>
    );
}

export default PaymentForm
