import React, { useContext, useEffect } from 'react';
import context from '../../context/context';
import authService from '../../services/authUser';
import validationLogin from '../../valitations/validationLogin';
import { TwoButtonModal } from '../../components/Modal'

import * as S from './styled'

const FormsLogin = () => {

    const { authLogin, setAuthLogin, formValidation, setFormValidation  } = useContext(context);

    const handleChange = ({ target: { name, value } }) => {
        setAuthLogin({ ...authLogin, [name]: value })
    }

    const handleSubmit = () => {
        const { email, password } = authLogin;
        authService.execute({ email, password, formType: 'user' })
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
             <S.Field type="email" name="email" id="email" onChange={ handleChange }  placeholder="email@dominio.com" />
            </S.Label>
        </S.FormGroup>
        <S.FormGroup>
            <S.Label for="password">
                Senha
            <S.Field type="password" name="password" id="password" onChange={ handleChange } placeholder="Somente números" />
            </S.Label>
        </S.FormGroup>

        <S.LinkStyleButton href="/parent" onClick={ handleSubmit }>Entrar</S.LinkStyleButton>
        
        <a href="#" className="my-3">Esqueceu sua senha?</a>

        <p>Ainda não tem cadastro? <a href="/register">Cadastre-se</a> </p>

        <h1 className="m-5">OU</h1>

        <S.LinkStyleButton href="/wishList" onClick={ handleSubmit }>Seja Doador</S.LinkStyleButton>
        </S.Form>
        </>
    );
}

export default FormsLogin;
