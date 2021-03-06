import React, { useContext, useEffect, useState } from 'react';
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

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }

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

            <S.Button href="/parent" onClick={ handleSubmit }>Entrar</S.Button>
            
            <a href="#" className="my-3">Esqueceu sua senha?</a>

            <S.RegisterContainer>
                <p>Ainda não tem cadastro?</p>
                <S.Button className='tiny' onClick={ openModal }>Cadastre-se</S.Button> 
            </S.RegisterContainer>

            </S.Form>

            <TwoButtonModal
                title='Você deseja se cadastrar como?' 
                showModal={showModal} 
                setShowModal={setShowModal} 
                firstButtonName='Pai' 
                secondButtonName='Guardião'
                firstPath='/register' 
                secondPath='/guardian'
            />
        </>
    );
}

export default FormsLogin;
