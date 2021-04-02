import React, { useContext, useEffect } from 'react';
import context from '../../context/context';
import authService from '../../services/auth';
import validationLogin from '../../valitations/validationLogin';

import * as S from './styled'

const FormsLogin = () => {

    const { formType, authLogin, setAuthLogin, formValidation, setFormValidation  } = useContext(context);

    const handleChange = ({ target: { name, value } }) => {
        setAuthLogin({ ...authLogin, [name]: value })
    }

    const handleSubmit = () => {
        const { email, password } = authLogin;
        authService.execute({ email, password, formType })
    }

    useEffect(async () => {
        const validate = await validationLogin.isValid(authLogin);
        setFormValidation(validate);
    }, [authLogin])

    return(
        <>
            <S.TextCenter>
                <S.Title>{ (formType === 'guardian') ? "Doador" : "Peça Doações" }</S.Title>
            </S.TextCenter>
        <S.Form>         
        <S.FormGroup>
            <S.Label for="email">
                Email
             <S.Field type="email" name="email" id="email" onChange={ handleChange }  placeholder="digite seu email" />
            </S.Label>
        </S.FormGroup>
        <S.FormGroup>
            <S.Label for="password">
                Senha
            <S.Field type="password" name="password" id="password" onChange={ handleChange } placeholder="digite sua senha" />
            </S.Label>
        </S.FormGroup>

        <S.Button href={ (formType === 'guardian') ? "/wishList" : "/parentDetails" } onClick={ handleSubmit }>Entrar</S.Button>

        <hr/>

        <p>Ainda não tem cadastro? <a className="m-3" href={ (formType === 'guardian') ? "/guardian" : "/parents" }>Cadastre-se</a></p>
        </S.Form>
        </>
    );
}

export default FormsLogin;
