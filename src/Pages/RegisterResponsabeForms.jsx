import React, { useContext } from 'react';
import context from '../context/context';

function RegisterResposabeForms() {

    const { responsabeRegister, setResponsabeRegister, responsabeFormValidation, setResponsabeFormValidation } = useContext(context);

    const handleChange = ({ target: { name, value } }) => {
        setResponsabeRegister({ ...responsabeRegister, [name]: value })
    }

    const handleClick = () => {
        const { name, email, password, confirmPassword , phone } = responsabeRegister;

        /*
        Mandar dados para o banco
        */
    }

    return (
        <form className="d-flex flex-column justify-content-center align-items-center shadow p-5 ">
            <h3>Cadastro de Resposável pela Criança</h3>
            <div className="form-group">
                <label for="nome">
                    Nome
             <input type="text" name="name" className="form-control" id="nome" placeholder="digite seu nome" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="cpf">
                    CPF
             <input type="number" name="cpf" className="form-control" id="cpf" placeholder="digite seu cpf" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="email">
                    Email
             <input type="email" name="email" className="form-control" id="email" placeholder="digite seu email" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="whatsapp">
                    WhatsApp
             <input type="number" name="phone" className="form-control" id="whatsapp" placeholder="digite seu whatsapp" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="password">
                    Senha
            <input type="password" name="password" className="form-control" id="password" placeholder="digite sua senha" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="confirmPassword">
                    Confirmar Senha
            <input type="password" name="confirmPassword" className="form-control" id="confirmPassword" placeholder="confirme sua senha" onChange={handleChange} />
                </label>
            </div>
          
                <button type="button" className="btn btn-warning m-3" onClick={handleClick} disabled={ !responsabeFormValidation }>Cadastrar</button>
        </form>
    );
}

export default RegisterResposabeForms;
