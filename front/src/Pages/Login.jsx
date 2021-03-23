import React from 'react';

function Login() {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="lobster text-light text-border-pink text-center mt-5 mx-5">Entre com sua conta existente ou Cadastre-se na plataforma</h2>

            <form className="mt-2 b-radius border border-light shadow p-5">
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
        </section>
    );
}

export default Login;
