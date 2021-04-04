import React, { useContext, useEffect } from 'react';
import context from '../../context/context';
import authService from '../../services/auth';
import validationLogin from '../../valitations/validationLogin';
import ModalLogin from '../ModalLogin/index';

import * as S from './styled'

const FormsLogin = () => {

    const { authLogin, setAuthLogin, formValidation, setFormValidation  } = useContext(context);

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

        <S.Button href="/parentDetails" onClick={ handleSubmit }>Entrar</S.Button>
        
        <a href="#" className="my-3">Esqueceu sua senha?</a>

        <p>Ainda não tem cadastro? <a href="/parents">Cadastre-se</a></p>

        <ModalLogin />

        <hr/>
            <h1>OU</h1>
        <S.LinkStyleButton href="/wishList" onClick={ handleSubmit }>Seja Doador</S.LinkStyleButton>

        </S.Form>
        </>
    );
}

export default FormsLogin;
