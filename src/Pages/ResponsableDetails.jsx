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
        <section >

            <h1 className="text-center display-4">Fazer pedido para meus filhos</h1>

            <hr />
            <form action="" className="bg-light b-radius p-5 my-5 row">

                <div className=" row m-auto">

                    <section id="informations" className="m-5">

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


                    <section className="d-flex flex-column justify-content-center align-items-center border border-primary p-2 b-radius m-auto boxInputRadio-width">
                            <label className="d-flex align-items-center my-2" htmlFor="infantil">
                                <input className="form-check-input" type="radio" name="teaching" id="infantil" value="EF" onChange={setChildrenInformations} />
                        Ensino Infantil
                    </label>

                            <label className="d-flex align-items-center my-2" htmlFor="primeiroAoQuinto">
                                <input className="form-check-input" type="radio" name="teaching" id="primeiroAoQuinto" value="F1" onChange={setChildrenInformations} />
                        1º ao 5º ANO
                </label>

                            <label className="d-flex align-items-center my-2" htmlFor="sextoAoNono">
                                <input className="form-check-input" type="radio" name="teaching" id="sextoAoNono" value="F2" onChange={setChildrenInformations} />
                        6º ao 9º ANO
                </label>

                            <label className="d-flex align-items-center my-2" htmlFor="ensinoMedio">
                                <input className="form-check-input" type="radio" name="teaching" id="ensinoMedio" value="EM" onChange={setChildrenInformations} />
                        Ensino Médio
                    </label>
                    
                    </section>



                </div>
                        <MaterialsList />

                <button type="submit" className="btn w-100 m-3" style={{ background: '#f1d7d8ff', 'border-radius': '15px' }} onClick={handleSubmit}>Finalizar Pedido</button>

                <a className="btn w-100 m-3" style={{ background: '#f1d7d8ff', 'border-radius': '15px' }} href="/childDetails" >Vizualizar</a>

            </form>
        </section>
    );
}

export default ResponsableDetails;

