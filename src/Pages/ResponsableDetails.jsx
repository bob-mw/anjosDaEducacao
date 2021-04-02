import React, { useContext, useEffect, useState } from 'react';
import context from '../context/context';
import MaterialsList from '../components/MaterialsList';

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

    useEffect(() => {
        setChildrenRegister({ ...childrenRegister, teaching: 'EM' })
    }, [])

    return (
        <section className="d-flex flex-column justify-content-center align-items-center">
            <h1>Fazer pedido para meus filhos</h1>

            <hr/>
            <form action="" className="bg-light b-radius p-5 my-5 d-flex flex-column justify-content-center align-items-center form-min-hight form-width">

                <div className="row flex-column justify-content-around align-items-center">

                    <section id="informations" className="d-flex flex-column">

                        <label className="my-3 row " htmlFor="nome">
                            Nome:
                <input className="form-control ml-3" type="text" id="name" name="name" placeholder="digite o nome da criança" onChange={setChildrenInformations} />
                        </label>

                        <label className="my-3 row " htmlFor="SchoolNome">
                            Escola:
                <input className="form-control ml-3" type="text" id="schoolName" name="schoolName" placeholder="digite o nome da escola" onChange={setChildrenInformations} />
                        </label>

                        <label className="my-3 row " htmlFor="state">
                            Estado:
                            <select name="state" id="state" className="form-control ml-3" onChange={setChildrenInformations}>
                                <option value="" selected disabled>Escolha um Estado</option>
                                {
                                    brazilStates.map((state) => <option key={state.sigla} value={state.sigla}>{state.nome}</option>)
                                }
                            </select>
                        </label>

                        <label className="my-3 row " htmlFor="city">
                            cidade:
                <input className="form-control ml-3" type="text" id="city" name="city" placeholder="digite o nome da cidade" onChange={setChildrenInformations} />
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


                        <MaterialsList />

                </div>

                <button type="submit" className="btn w-100 m-3" style={ { background: '#f1d7d8ff', 'border-radius': '15px' } }  onClick={handleSubmit}>Finalizar Pedido</button>

                <a className="btn w-100 m-3" style={ { background: '#f1d7d8ff', 'border-radius': '15px' } } href="/childDetails" >Vizualizar</a>

            </form>
        </section>
    );
}

export default ResponsableDetails;

