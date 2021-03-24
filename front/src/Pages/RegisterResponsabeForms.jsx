import React, { useContext, useEffect } from 'react';
import context from '../context/context';

function RegisterResposabeForms() {

    const { responsabeRegister, setResponsabeRegister, responsabeFormValidation, setResponsabeFormValidation } = useContext(context);


    const handleChange = ({ target: { name, value } }) => {
        setResponsabeRegister({ ...responsabeRegister, [name]: value })
    }

    const handleClick = () => {
        const { name, email, password, phone, cpf } = responsabeRegister;

        /*
        Mandar dados para o banco
        */
    }

    /*REGEX: 
    email: https://medium.com/swlh/how-to-validate-an-email-address-in-javascript-78d33f87f5c6,
    cpf: https://operahouse.com.br/expressoes-regulares,
    */
    useEffect(() => {
        const { name, email, password, confirmPassword , phone, cpf, state, city } = responsabeRegister;
        const REGEX_EMAIL = /\S+@\S+\.\S+/;
        const REGEX_CPF = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/;
        const cpfValidated = REGEX_CPF.test(cpf)
        const emailValidated = REGEX_EMAIL.test(email);

        (name && emailValidated && password === confirmPassword && phone && cpf && cpfValidated && state && city) ? setResponsabeFormValidation(true) : setResponsabeFormValidation(false);
    }, [responsabeRegister])

    return (
        <form className="d-flex flex-column justify-content-center align-items-center shadow p-5 ">
            <h3>Cadastro de Resposável pela Criança</h3>
            <div className="form-group">
                <label for="cpf">
                    Nome
             <input type="text" name="name" className="form-control" id="nome" placeholder="digite seu nome" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="cpf">
                    CPF
             <input type="number" name="cpf" className="form-control" id="cpf" placeholder="digite seu cpf" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="email">
                    Email
             <input type="email" name="email" className="form-control" id="email" placeholder="digite seu email" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="whatsapp">
                    WhatsApp
             <input type="number" name="phone" className="form-control" id="whatsapp" placeholder="digite seu whatsapp" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="password">
                    Senha
            <input type="password" name="password" className="form-control" id="password" placeholder="digite sua senha" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="confirmPassword">
                    Confirmar Senha
            <input type="password" name="confirmPassword" className="form-control" id="confirmPassword" placeholder="confirme sua senha" onChange={handleChange} />
                </label>
            </div>
           <div className="form-group">
                <label for="state">
                    Estado
                    <select className="m-3" name="state" id="state" onChange={ handleChange }>
                        <option value="" selected disabled>Selecione um estado</option>
                    </select>
                </label>
            </div>
            <div className="form-group">
                <label for="city">
                    Cidade
                    <select className="m-3" name="city" id="city" onChange={ handleChange }>
                        <option value="" selected disabled>Selecione uma cidade</option>
                    </select>
                </label>
            </div>
            <div className="form-group">
                <label for="cep">
                    CEP
             <input type="number" name="cep" className="form-control" id="cep" placeholder="digite seu cep" onChange={handleChange} />
                </label>
            </div>

            <div className="form-group">
                <label for="street">
                    Rua
             <input type="text" name="street" className="form-control" id="street" placeholder="digite o nome da sua rua" onChange={handleChange} />
                </label>
            </div>

            <div className="form-group">
                <label for="streetNumber">
                    Número
             <input type="number" name="streetNumber" className="form-control" id="streetNumber" placeholder="digite o numero da sua rua" onChange={handleChange} />
                </label>
            </div>

            <div>
                <button type="button" className="btn btn-warning m-3" onClick={handleClick} disabled={ !responsabeFormValidation }>Cadastrar</button>
            </div>
        </form>
    );
}

export default RegisterResposabeForms;
