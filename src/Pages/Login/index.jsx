import React from 'react';
import FormsLogin from '../../components/FormsLogin/index';
import angel from '../../img/angel.svg';
import Jumbotron from '../../components/Jumbotron';

import Footer from '../../components/Footer';

import * as S from './styled'

const Login = () => {
    return (
        <>
            <S.HeroText>
                Você não pode mudar o mundo, 
                mas pode mudar o mundo de alguém!
            </S.HeroText>
            <S.Image src={ angel } alt="logo"/>
            <FormsLogin />
            <Footer/>
        </>
    );
}

export default Login;
