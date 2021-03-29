import React, { useContext, useEffect, useState } from 'react';
import context from '../context/context';
import MaterialsList from '../components/MaterialsList';
import ChildrenTable from '../components/ChildrenTable';

function ResponsableDetails() {

    const { childrenRegister, setChildrenRegister } = useContext(context);

    const [brazilStates, setBrazilStates] = useState([]);

    const setChildrenInformations = ({ target: { name, value } }) => {
        setChildrenRegister({ ...childrenRegister, [name]: value })
    }

    const handleSubmit = () => {
        localStorage.setItem('childrens', JSON.stringify(childrenRegister))
    }

    useEffect(async () => {
        try {
            const fetchUrl = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/');
            const json = await fetchUrl.json();
            setBrazilStates(json);
        } catch (error) {
            console.log(error)
        }
    }, [])

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
                <input className="form-control" type="text" id="name" name="name" placeholder="digite o nome da criança" onChange={setChildrenInformations} />
                        </label>

                        <label className="m-3" htmlFor="SchoolNome">
                            Escola:
                <input className="form-control" type="text" id="schoolName" name="schoolName" placeholder="digite o nome da escola" onChange={setChildrenInformations} />
                        </label>

                        <label className="m-3" htmlFor="state">
                            Estado:
                            <select name="state" id="state" onChange={setChildrenInformations}>
                                <option value="" selected disabled>Escolha um Estado</option>
                                {
                                    brazilStates.map((state) => <option key={state.sigla} value={state.sigla}>{state.nome}</option>)
                                }
                            </select>
                        </label>

                        <label className="m-3" htmlFor="city">
                            cidade:
                <input className="form-control" type="text" id="city" name="city" placeholder="digite o nome da cidade" onChange={setChildrenInformations} />
                        </label>

                    </section>
                    <section className="p-4">
                        <div>
                            <label className="form-check-label" htmlFor="infantil">
                                <input className="form-check-input" type="radio" name="teaching" id="infantil" value="EF" onChange={setChildrenInformations} />
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


                    <section id="MaterialsList">
                        <MaterialsList />
                    </section>
                </div>

                <button type="submit" className="btn btn-warning align-self-center text-center" onClick={handleSubmit}>Finalizar Pedido</button>

            </form>

            <ChildrenTable />

        </section>
    );
}

export default ResponsableDetails;
