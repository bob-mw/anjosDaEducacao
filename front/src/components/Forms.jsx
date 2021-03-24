import React, { useContext } from 'react';
import context from '../context/context';

function Forms() {

    const { formType } = useContext(context);

    return(
        <form className={ (formType === 'angel') ? "m-5 b-radius border border-light shadow p-5 bg-purple-clear" : "m-5 b-radius border border-light shadow p-5 bg-green-clear" }>
            <h3>{ (formType === 'angel') ? "Entre como Anjo ou Cadastre-se" : "Entre como Protegido ou Cadastre-se" }</h3>
        <div className="form-group">
            <label for="email">
                Email
             <input type="email" className="form-control" id="email"  placeholder="digite seu email" />
            </label>
        </div>
        <div className="form-group">
            <label for="password">
                Senha
            <input type="password" className="form-control" id="password" placeholder="digite sua senha" />
            </label>
        </div>
        <a href="">esqueci minha senha</a>
        <br/>
        <div className="d-flex justify-content-around m-3">
        <button type="submit" className="btn btn-success">Entrar</button>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
        </div>
        </form>
    );
}

export default Forms;
