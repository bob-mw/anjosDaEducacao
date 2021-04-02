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
        <section>
            <div className="text-center lead">
            <h3>{ (formType === 'guardian') ? "Doador" : "Peça Doações" }</h3>
            </div>
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
        <a href="">Esqueceu a senha?</a>
        <br/>

        <a className="btn w-100 m-3" href={ (formType === 'guardian') ? "/wishList" : "/parentDetails" } style={ { background: '#f1d7d8ff', 'border-radius': '15px' } } onClick={ handleSubmit }>Entrar</a>

        <hr/>

        <p>Ainda não tem cadastro? <a className="m-3" href={ (formType === 'guardian') ? "/guardian" : "/parents" }>Cadastre-se</a></p>
        </S.Form>
        </section>
    );
}

export default FormsLogin;
