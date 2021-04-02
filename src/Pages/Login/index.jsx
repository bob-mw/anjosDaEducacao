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
           <div className="d-flex w-50 justify-content-around m-3">
                <button type="button" className="btn btn-light btn-outline-secondary p-3 m-3" onClick={ formKid }><p className="text-pink text-uppercase">Anjinho:</p> Criança</button>
                <button type="button" className="btn btn-light btn-outline-secondary p-3 m-3" onClick={ formAngel }><p className="text-pink text-uppercase">Guardião:</p>  Doador</button>
            </div>
        </section>
    );
}

export default Login;
