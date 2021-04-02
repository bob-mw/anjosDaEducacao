import React, { useContext, useEffect } from 'react';
import context from '../context/context';
import authService from '../services/auth';
import validationLogin from '../valitations/validationLogin';

function FormsLogin() {

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
        <form className="d-flex flex-column justify-content-center align-items-center m-5 b-radius border border-light shadow p-5 form-width bg-light">
            
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
        <a href="">Esqueceu a senha?</a>
        <br/>

        <a className="btn w-100 m-3" href={ (formType === 'guardian') ? "/wishList" : "/parentDetails" } style={ { background: '#f1d7d8ff', 'border-radius': '15px' } } onClick={ handleSubmit }>Entrar</a>

        <hr/>

        <p>Ainda não tem cadastro? <a className="m-3" href={ (formType === 'guardian') ? "/guardian" : "/parents" }>Cadastre-se</a></p>
        </form>
        </section>
    );
}

export default FormsLogin;
