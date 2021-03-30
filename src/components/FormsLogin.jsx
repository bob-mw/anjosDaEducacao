import React, { useContext } from 'react';
import context from '../context/context';
import authService from '../services/auth';

function FormsLogin() {

    const { formType, authLogin, setAuthLogin  } = useContext(context);

    const handleChange = ({ target: { name, value } }) => {
        setAuthLogin({ ...authLogin, [name]: value })
    }

    const handleSubmit = () => {
        const { email, password } = authLogin;
        authService.execute({ email, password, formType })
    }

    return(
        <form className={ (formType === 'guardian') ? "d-flex flex-column justify-content-center align-items-center m-5 b-radius border border-light shadow p-5 bg-purple-clear" : "d-flex flex-column justify-content-center align-items-center m-5 b-radius border border-light shadow p-5 bg-green-clear" }>
            <h3>{ (formType === 'guardian') ? "Entre como Anjo ou Cadastre-se" : "Entre como Protegido ou Cadastre-se" }</h3>
        <div className="form-group">
            <label for="email">
                Email
             <input type="email" name="email" className="form-control" id="email" onChange={ handleChange }  placeholder="digite seu email" />
            </label>
        </div>
        <div className="form-group">
            <label for="password">
                Senha
            <input type="password" name="password" className="form-control" id="password" onChange={ handleChange } placeholder="digite sua senha" />
            </label>
        </div>
        <a href="">esqueci minha senha</a>
        <br/>
        <div className="d-flex justify-content-around m-3">
        <a className="btn btn-success m-3" onClick={ handleSubmit }>Entrar</a>
        <a className="btn btn-primary m-3" href={ (formType === 'guardian') ? "/registerGuardian" : "registerResponsabe" }>Cadastrar</a>
        </div>
        </form>
    );
}

export default FormsLogin;
