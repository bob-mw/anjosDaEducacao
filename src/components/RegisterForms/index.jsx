import React, { useState, useContext, useEffect } from 'react'
import context from '../../context/context'
import schema from '../../valitations/createUser'
import CreateService from '../../services/create'
import Modal from '../Modal'

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

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    }


    return (
        <>
            <S.TextCenter>
                <S.Title>{ (registerType === 'guardian') && "Cadastro de Guardião" || "Cadastro de Pais da Criança" }</S.Title>
            </S.TextCenter>
            <S.Form>
                <S.FormGroup>
                    <S.Label for="cpf">
                        Nome
                <S.Field type="text" name="name" id="nome" placeholder="Nome Completo" onChange={handleChange} />
                    </S.Label>
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label for="email">
                        Email
                <S.Field type="email" name="email" id="email" placeholder="email@dominio.com" onChange={handleChange} />
                    </S.Label>
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label for="whatsapp">
                        Cel
                <S.Field type="number" name="phone" id="whatsapp" placeholder="Somente Números" onChange={handleChange} />
                    </S.Label>
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label for="password">
                        Senha
                <S.Field type="password" name="password" id="password" placeholder="Minimo de 6 Digitos" onChange={handleChange} />
                    </S.Label>
                </S.FormGroup>
                <S.FormGroup>
                    <S.Label for="password">
                        Confirmar Senha
                <S.Field type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirme sua Senha" onChange={handleChange} />
                    </S.Label>
                </S.FormGroup>

                <S.Button type="button" onClick={handleClick} disabled={ !formValidation }>Finalizar Cadastro</S.Button>
            </S.Form>

            <S.Button onClick={openModal}>I'm a modal</S.Button>

            <Modal showModal={showModal} setShowModal={setShowModal} />
        </>
    );
}

export default RegisterForms
