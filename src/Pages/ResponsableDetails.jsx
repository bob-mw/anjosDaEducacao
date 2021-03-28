import React, { useContext } from 'react';
import context from '../context/context';
import WishList from '../components/WishList';
import WishTable from '../components/WishTable';

function ResponsableDetails() {
    
    const { childrenRegister, setChildrenRegister } = useContext(context);

    const setChildrenInformations = ({ target: { name, value } }) => {
        setChildrenRegister({ ...childrenRegister, [name]: value })
    }

    const handleSubmit = () => {
        localStorage.setItem('childrens', JSON.stringify(childrenRegister))
    }

    return (
        <section className="p-5 m-auto shadow d-flex flex-column justify-content-center align-items-center">
            <h1>
                Olá,
            </h1>
            <h2>Cadastre um filho para que ele receba doações de materiais</h2>

            <form action="" className="bg-purple-clear w-75 b-radius p-5 my-5 d-flex flex-column">

                <div className="row justify-content-around align-items-center">

                    <section id="informations">

                        <label className="m-3" htmlFor="nome">
                            Nome:
                <input className="form-control" type="text" id="name" name="name" onChange={ setChildrenInformations } />
                        </label>

                        <label className="m-3" htmlFor="SchoolNome">
                            Escola:
                <input className="form-control" type="text" id="schoolName" name="schoolName" onChange={ setChildrenInformations } />
                        </label>

                        <label className="m-3" htmlFor="state">
                            Estado:
                <input className="form-control" type="text" id="state" name="state" onChange={ setChildrenInformations } />
                        </label>

                        <label className="m-3" htmlFor="city">
                            cidade:
                <input className="form-control" type="text" id="city" name="city" onChange={ setChildrenInformations } />
                        </label>

                    </section>
                        <section className="p-4">
                            <div>
                                <label className="form-check-label" htmlFor="infantil">
                                    <input className="form-check-input" type="radio" name="teaching" id="infantil" value="EF" onChange={setChildrenInformations}/>
                        Ensino Infantil
                    </label>
                            </div>
                            <div>
                                <label className="form-check-label" htmlFor="primeiroAoQuinto">
                                    <input className="form-check-input" type="radio" name="teaching" id="primeiroAoQuinto" value="F1" onChange={setChildrenInformations} />
                        1º ao 5º ANO
                </label>
                            </div>
                            <div>
                                <label className="form-check-label" htmlFor="sextoAoNono">
                                    <input className="form-check-input" type="radio" name="teaching" id="sextoAoNono" value="F2" onChange={setChildrenInformations} />
                        6º ao 9º ANO
                </label>
                            </div>
                            <div>
                                <label className="form-check-label" htmlFor="ensinoMedio">
                                    <input className="form-check-input" type="radio" name="teaching" id="ensinoMedio" value="EM" onChange={setChildrenInformations} />
                        Ensino Médio
                    </label>
                            </div>
                        </section>


                    <section id="wishList">
                        <WishList />
                    </section>
                </div>

                <button type="submit" className="btn btn-warning align-self-center text-center" onClick={ handleSubmit }>Finalizar Pedido</button>

            </form>

            <WishTable />

        </section>
    );
}

export default ResponsableDetails;
