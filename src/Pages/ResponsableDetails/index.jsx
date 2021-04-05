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

                <S.SuperiorDetails>

                    <S.FieldContainer id="informations">

                        <S.Label htmlFor="nome">
                            Nome:
                            <S.Field type="text" id="name" name="name" placeholder="digite o nome da criança" onChange={setChildrenInformations} />
                        </S.Label>

                        <S.Label htmlFor="SchoolNome">
                            Escola:
                            <S.Field type="text" id="schoolName" name="schoolName" placeholder="digite o nome da escola" onChange={setChildrenInformations} />
                        </S.Label>

                        <S.Label htmlFor="state">
                            Estado:
                            <S.Select name="state" id="state" onChange={setChildrenInformations}>
                                <option value="" selected disabled>Escolha um Estado</option>
                                {
                                    brazilStates.map((state) => <option key={state.sigla} value={state.sigla}>{state.nome}</option>)
                                }
                            </S.Select>
                        </S.Label>

                        <S.Label  htmlFor="city">
                            Cidade:
                            <S.Field type="text" id="city" name="city" placeholder="digite o nome da cidade" onChange={setChildrenInformations} />
                        </S.Label>

                    </S.FieldContainer>


                    <S.RadioContainer>
                            <S.RadioLabel htmlFor="infantil">
                                <S.Input type="radio" name="teaching" id="infantil" value="EF" onChange={setChildrenInformations} />
                                Ensino Infantil
                            </S.RadioLabel>

                            <S.RadioLabel htmlFor="primeiroAoQuinto">
                                <S.Input type="radio" name="teaching" id="primeiroAoQuinto" value="F1" onChange={setChildrenInformations} />
                                1º ao 5º ANO
                            </S.RadioLabel>

                            <S.RadioLabel htmlFor="sextoAoNono">
                                <S.Input type="radio" name="teaching" id="sextoAoNono" value="F2" onChange={setChildrenInformations} />
                                6º ao 9º ANO
                            </S.RadioLabel>

                            <S.RadioLabel htmlFor="ensinoMedio">
                                <S.Input type="radio" name="teaching" id="ensinoMedio" value="EM" onChange={setChildrenInformations} />
                                Ensino Médio
                            </S.RadioLabel>
                    
                    </S.RadioContainer>



                </S.SuperiorDetails>

                <MaterialsList/>


                <S.Button href="#" >Adicionar outro filho</S.Button>

                <h1 align="center" className="my-5">OU</h1>

                <S.Button href="/childrenList" >Visualizar</S.Button>

                <h1 align="center"  className="my-5">OU</h1>

                <S.Button href="/childrenList" >Finalizar Pedido</S.Button>
            </S.Form>
        </>
    );
}

export default ResponsableDetails;

