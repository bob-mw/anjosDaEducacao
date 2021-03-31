import React, { useContext, useEffect } from 'react';
import context from '../context/context';
import schema from '../valitations/createUser';
import CreateService from '../services/create';

function RegisterForms() {

    const { register, setRegister, formValidation, setFormValidation, registerType } = useContext(context);


    const handleChange = ({ target: { name, value } }) => {
        setRegister({ ...register, [name]: value })
    }


    const handleClick = () => {
        const { name, email, password, confirmPassword , phone, cpf } = register
        CreateService.execute({ name, email, password, confirmPassword , phone, cpf, registerType })
        
    }

    useEffect(async () => {
        const validate = await schema.isValid(register);
        setFormValidation(validate);
    }, [register])


    return (
        <form className="d-flex flex-column justify-content-center align-items-center p-5 ">
            <h3>{ (registerType === 'guardian') && "Cadastro de Guardião" || "Cadastro de Pais da Criança" }</h3>
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
                    Telefone
             <input type="number" name="phone" className="form-control" id="whatsapp" placeholder="digite seu telefone" onChange={handleChange} />
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
                <button type="button" className="btn btn-warning m-3" onClick={handleClick} disabled={ !formValidation }>Cadastrar</button>
            </div>
        </form>
    );
}

export default RegisterForms;
