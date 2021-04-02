import React, { useState } from 'react';
import Cards from 'react-credit-cards';

function PaymentForm() {

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
            <section>
                <div className="text-center my-5">
                <h1>Infomações do Cartão</h1>
                </div>
            <div className="row align-items-center p-5 m-5" id="PaymentForm">

            <Cards
                    cvc={cvc}
                    expiry={expiry}
                    focused={focus}
                    name={name}
                    number={number}
                />
                
                <form className="col-12 col-md-6 col-lg-6 align-items-center bg-light p-4 b-radius mt-5 shadow">

                    <section className="d-flex flex-column">
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
                    </section>
                
                </form>


            </div>
            </section>
    );
}

export default PaymentForm
