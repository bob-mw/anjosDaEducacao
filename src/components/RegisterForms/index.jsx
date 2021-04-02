import React, { useContext, useEffect } from 'react';
import context from '../../context/context';
import schema from '../../valitations/createUser';
import CreateService from '../../services/create';

import * as S from './styled'

const RegisterForms = () => {

    const { register, setRegister, formValidation, setFormValidation, registerType } = useContext(context);


    const handleChange = ({ target: { name, value } }) => {
        setRegister({ ...register, [name]: value })
    }


    const handleClick = () => {
        const { name, email, password, confirmPassword , phone } = register
        CreateService.execute({ name, email, password, confirmPassword , phone, registerType })
        
    }

    useEffect(async () => {
        const validate = await schema.isValid(register);
        setFormValidation(validate);
    }, [register])


    return (
        <>
            <S.TextCenter>
            <S.Title>{ (registerType === 'guardian') && "Cadastro de Guardião" || "Cadastro de Pais da Criança" }</S.Title>
            </S.TextCenter>
        <S.Form>
            <div className="form-group">
                <label for="cpf">
                    Nome
             <input type="text" name="name" className="form-control" id="nome" placeholder="Nome Completo" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="email">
                    Email
             <input type="email" name="email" className="form-control" id="email" placeholder="email@dominio.com" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="whatsapp">
                    Cel
             <input type="number" name="phone" className="form-control" id="whatsapp" placeholder="Somente Números" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="password">
                    Senha
            <input type="password" name="password" className="form-control" id="password" placeholder="Minimo de 6 Digitos" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="password">
                    Confirmar Senha
            <input type="password" name="confirmPassword" className="form-control" id="confirmPassword" placeholder="Confirme sua Senha" onChange={handleChange} />
                </label>
            </div>

            <div>
                <button type="button" className="btn border border-white m-3 " onClick={handleClick} style={ {  background: '#f1d7d8ff', 'border-radius': '5rem' }} disabled={ !formValidation }>Finalizar Cadastro</button>
            </div>
        </S.Form>
        </>
    );
}

export default RegisterForms
