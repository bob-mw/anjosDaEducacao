import React from 'react';
import angel from '../img/angel.svg';

function Login() {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center">
           <img src={ angel } width="75%" alt="logo"/>
           <div className="d-flex justify-content-around m-3">
                <button type="submit" className="btn btn-success">Entrar</button>
                <button type="submit" className="btn btn-primary">Cadastrar</button>
                </div>
        </section>
    );
}

export default Login;
