import React, { useContext, useEffect } from 'react';
import context from '../context/context';
import axios from 'axios';
import schema from '../valitations/createUser';

function AngelRegisterForms() {

    const { angelRegister, setAngelRegister, angelFormValidation, setAngelFormValidation } = useContext(context);


    const handleChange = ({ target: { name, value } }) => {
        setAngelRegister({ ...angelRegister, [name]: value })
    }

    const handleClick = () => {
        const { name, email, password, confirmPassword , phone, cpf } = angelRegister
        axios.post('http://localhost:3333/user',  {
            name,
	        email,
	        password,
            confirmPassword,
	        phone,
	        cpf
        }).then(function (response) {
            console.log(response)
        })
    }

    useEffect(async () => {
        const validate = await schema.isValid(angelRegister);
        setAngelFormValidation(validate);
    }, [angelRegister])


    return (
        <form className="d-flex flex-column justify-content-center align-items-center shadow p-5 ">
            <h3>Cadastro de Anjo da Guarda</h3>
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
                <label for="password">
                    Confirmar Senha
            <input type="password" name="confirmPassword" className="form-control" id="confirmPassword" placeholder="confirme sua senha" onChange={handleChange} />
                </label>
            </div>

            <div>
                <button type="button" className="btn btn-warning m-3" onClick={handleClick} disabled={ !angelFormValidation }>Cadastrar</button>
            </div>
        </form>
    );
}

export default AngelRegisterForms;
