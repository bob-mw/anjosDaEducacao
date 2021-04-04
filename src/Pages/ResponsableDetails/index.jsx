import React, { useContext, useEffect, useState } from 'react'
import context from '../../context/context';
import MaterialsList from '../../components/MaterialsList'
import * as S from './styled'

const ResponsableDetails = () => {

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
        <>

            <S.Title>Fazer pedido para meus filhos</S.Title>

            <S.Form action="">

                <div>

                    <section id="informations" className="m-5">

                        <S.Label className="my-3 row " htmlFor="nome">
                            Nome:
                            <S.Field className="form-control ml-3" type="text" id="name" name="name" placeholder="digite o nome da criança" onChange={setChildrenInformations} />
                        </S.Label>

                        <S.Label className="my-3 row " htmlFor="SchoolNome">
                            Escola:
                            <S.Field className="form-control ml-3" type="text" id="schoolName" name="schoolName" placeholder="digite o nome da escola" onChange={setChildrenInformations} />
                        </S.Label>

                        <S.Label className="my-3 row " htmlFor="state">
                            Estado:
                            <select name="state" id="state" className="form-control ml-3" onChange={setChildrenInformations}>
                                <option value="" selected disabled>Escolha um Estado</option>
                                {
                                    brazilStates.map((state) => <option key={state.sigla} value={state.sigla}>{state.nome}</option>)
                                }
                            </select>
                        </S.Label>

                        <S.Label className="my-3 row " htmlFor="city">
                            Cidade:
                            <S.Field className="form-control ml-3" type="text" id="city" name="city" placeholder="digite o nome da cidade" onChange={setChildrenInformations} />
                        </S.Label>

                    </section>


                    <section className="d-flex flex-column justify-content-center align-items-center mx-auto mb-5 boxS.FieldRadio-width">
                            <S.LabelCheckBox className="d-flex align-items-center my-2" htmlFor="infantil">
                                <input className="form-check-input" type="radio" name="teaching" id="infantil" value="EF" onChange={setChildrenInformations} />
                        Ensino Infantil
                    </S.LabelCheckBox>

                            <S.LabelCheckBox className="d-flex align-items-center my-2" htmlFor="primeiroAoQuinto">
                                <input className="form-check-input" type="radio" name="teaching" id="primeiroAoQuinto" value="F1" onChange={setChildrenInformations} />
                                1º ao 5º ANO
                            </S.LabelCheckBox>

                            <S.LabelCheckBox className="d-flex align-items-center my-2" htmlFor="sextoAoNono">
                                <input className="form-check-input" type="radio" name="teaching" id="sextoAoNono" value="F2" onChange={setChildrenInformations} />
                                6º ao 9º ANO
                            </S.LabelCheckBox>

                            <S.LabelCheckBox className="d-flex align-items-center my-2" htmlFor="ensinoMedio">
                                <input className="form-check-input" type="radio" name="teaching" id="ensinoMedio" value="EM" onChange={setChildrenInformations} />
                                Ensino Médio
                            </S.LabelCheckBox>
                    
                    </section>



                </div>
                        <MaterialsList />

                        <S.Button href="/childDetails" >Finalizar Pedido</S.Button>

                <S.Button href="/childDetails" >Visualizar</S.Button>

            </S.Form>
        </>
    );
}

export default ResponsableDetails;

