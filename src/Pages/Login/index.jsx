import React, { useContext } from 'react';
import FormsLogin from '../../components/FormsLogin';
import angel from '../../img/angel.svg';
import context from  '../../context/context';
import Jumbotron from '../../components/Jumbotron';

import * as S from './styled'

const Login = () => {
    const { setFormType, formType } = useContext(context);

    const formAngel = () => {
        setFormType('guardian');
    }

    const formKid = () => {
        setFormType('user');
    }

    return (
        <section className="d-flex flex-column justify-content-center align-items-center">
            <Jumbotron />
           { 
               (!formType) ? <img src={ angel } width="75%" alt="logo"/> : <FormsLogin />
           }
           <S.ButtonContainer>
                <S.Button type="button"  onClick={ formKid }><p>Anjinho:</p> Criança</S.Button>
                <S.Button type="button"  onClick={ formAngel }><p>Guardião:</p>  Doador</S.Button>
            </S.ButtonContainer>
        </section>
    );
}

export default Login;
