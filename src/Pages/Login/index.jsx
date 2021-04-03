import React from 'react';
import FormsLogin from '../../components/FormsLogin/index';
import angel from '../../img/angel.svg';
import Jumbotron from '../../components/Jumbotron';

import Footer from '../../components/Footer';

import * as S from './styled'

const Login = () => {
    return (
        <>
            <S.HeroContainer>
                <S.HeroText><span>Você não pode mudar o mundo,</span></S.HeroText>
                <S.HeroText><span>mas pode mudar o mundo de alguém!</span></S.HeroText>
            </S.HeroContainer>
            <S.Image src={ angel } alt="logo"/>
            <FormsLogin />
            <Footer/>
        </>
    );
}

export default Login;
