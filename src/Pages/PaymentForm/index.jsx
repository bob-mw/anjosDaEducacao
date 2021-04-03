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
            <div className="row align-items-center" id="PaymentForm">

            <Cards
                    cvc={cvc}
                    expiry={expiry}
                    focused={focus}
                    name={name}
                    number={number}
                />
                
                <S.Form>
                        <label htmlFor="cardNumber">
                            Número:
                            <input
                                id="cardNumber"
                                type="tel"
                                name="number"
                                placeholder="Número do Cartão"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                className="form-control"
                            />
                        </label>
                        <label htmlFor="cardName">
                            Nome:
                            <input
                                id="cardName"
                                type="tel"
                                name="name"
                                placeholder="Nome que está no Cartão"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                className="form-control"
                            />
                        </label>

                        <div className="d-flex">

                        <label className="m-3" htmlFor="validateDate">
                            Valido até:
                            <input
                                id="validateDate"
                                type="data"
                                name="expiry"
                                placeholder="mês/ano"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                className="form-control"
                                />
                        </label>
                        <label className="m-3" htmlFor="validateDate">
                            CVC
                            <input
                                id="validateDate"
                                type="number"
                                name="cvc"
                                placeholder="cvc"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                className="form-control"
                                />
                        </label>
                        
                        
                            
                </div>
                        <label className="m-3" htmlFor="donate">
                            Valor a ser doado
                            <input
                                id="donate"
                                type="number"
                                name="donate"
                                placeholder="00.00"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                className="form-control"
                                />
                        </label>
                <label htmlFor="paymentMethod">
                            Método de Pagamento
                        <select
                                id="validateDate"
                                type="number"
                                name="payment"
                                placeholder="cvc"
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                className="form-control"
                                >
                                <option value="Debit" selected disabled>Escolher</option>
                                <option value="Debit">Débito</option>
                                <option value="Credit">Crédito</option>
                                </select>
                        </label>
                
                <button className="btn btn-warning my-3 text-uppercase">Doar</button>
                
                </S.Form>


            </div>
        </>
    );
}

export default PaymentForm
