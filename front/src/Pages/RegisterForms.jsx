import React, { useContext } from 'react';
import context from '../context/context';

function AngelRegisterForms() {

    const { angelRegister, setAngelRegister } = useContext(context);

    const handleChange = ({ target: { name, value } }) => {
        setAngelRegister({ ...angelRegister, [name]: value })
    }

    const handleClick = () => {
        localStorage.setItem('angel', JSON.stringify(angelRegister))
        axios.post('http://localhost:3333/user',  JSON.stringify(angelRegister)).then(function (response) {
            console.log(response)
        })
    }

    return (
        <form className="d-flex flex-column justify-content-center align-items-center shadow p-5 ">
            <h3>Cadastro de Anjo da Guarda</h3>
            <div className="form-group">
                <label for="cpf">
                    Nome
             <input type="text" name="name" className="form-control" id="nome" placeholder="digite seu nome" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="cpf">
                    CPF
             <input type="cpf" name="cpf" className="form-control" id="cpf" placeholder="digite seu cpf" onChange={handleChange} />
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
             <input type="whatsapp" name="whatsapp" className="form-control" id="whatsapp" placeholder="digite seu whatsapp" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="password">
                    Senha
            <input type="password" name="password" className="form-control" id="password" placeholder="digite sua senha" onChange={handleChange} />
                </label>
            </div>
            <div className="form-group">
                <label for="password">
                    Confirmar Senha
            <input type="password" name="confirmPassword" className="form-control" id="password" placeholder="confirme sua senha" onChange={handleChange} />
                </label>
            </div>

            <div>
                <button type="button" className="btn btn-warning m-3" onClick={handleClick}>Cadastrar</button>
            </div>
        </form>
    );
}

export default AngelRegisterForms;
