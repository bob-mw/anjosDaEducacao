import React from 'react';
import WishList from '../components/WishList';
import WishTable from '../components/WishTable';

function ResponsableDetails() {
    const data = JSON.parse(localStorage.getItem('cadastro'))
    return (
        <section className="p-5 m-auto shadow d-flex flex-column justify-content-center align-items-center">
            <h1>
                Olá, {' '}
                {
                    data.nome
                }
            </h1>
            <h2>Cadastre um filho para que ele receba doações de materiais</h2>

            <form action="" className="bg-purple-clear w-75 b-radius p-5 my-5 d-flex flex-column">

                <div className="row justify-content-around align-items-center">

                <section id="informations">

                <label htmlFor="nome">
                    Nome:
                <input className="form-control" type="text" id="name" name="name" />
                </label>

                <section className="p-4">
                    <div>
                        <label className="form-check-label" htmlFor="infantil">
                            <input className="form-check-input" type="radio" name="checkBox" id="infantil" />
                        Ensino Infantil
                    </label>
                    </div>
                    <div>
                        <label className="form-check-label" htmlFor="primeiroAoQuinto">
                            <input className="form-check-input" type="radio" name="checkBox" id="primeiroAoQuinto" />
                        1º ao 5º ANO
                </label>
                    </div>
                    <div>
                        <label className="form-check-label" htmlFor="sextoAoNono">
                            <input className="form-check-input" type="radio" name="checkBox" id="sextoAoNono" />
                        6º ao 9º ANO
                </label>
                    </div>
                    <div>
                        <label className="form-check-label" htmlFor="ensinoMedio">
                            <input className="form-check-input" type="radio" name="checkBox" id="ensinoMedio" />
                        Ensino Médio
                </label>
                    </div>
                </section>

                </section>

                <section id="wishList">
                    <WishList />
                </section>
                </div>

                <button type="button" className="btn btn-warning align-self-center text-center">Finalizar Pedido</button>

            </form>

            <WishTable />

        </section>
    );
}

export default ResponsableDetails;
