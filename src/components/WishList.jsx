import React, { useContext } from 'react';
import context from '../context/context';

function WishList() {

    const { childrenRegister, setChildrenRegister } = useContext(context);

    const { teaching, materials } = childrenRegister;

    const listEF =
        ["1 PACOTE CHAMEX 500 FLS",
            "1 TUBO DE COLA",
            "1 ROLO FITA CREPE 50 mm x 50 mm",
            "1 CAIXA DE GIZ DE CERA GRANDE",
            "1 TESOURA SEM PONTA",
            "2 CX DE LÁPIS DE COR 12 CORES",
            "1 PINCEL TIGRE Nº 12",
            "1 LANCHEIRA",
            "1 AGENDA"];

    const listF1 = ["4 CADERNOS UNIVERSITÁRIOS 200 FOLHAS PAUTADAS",
        "1 RÉGUA 30 cm",
        "1 ESTOJO",
        "1 TESOURA SEM PONTA",
        "1 BORRACHA",
        "1 APONTADOR",
        "3 LÁPIS PRETOS",
        "1 CX DE LÁPIS DE COR 12 CORES",
        "1 TUBO DE COLA",
        "1 MOCHILA"];

    const listF2 = [
        "4 CADERNOS UNIVERSITÁRIOS 200 FOLHAS PAUTADAS",
        "1 CADERNO EDUCAÇÃO ARTÍSTICA",
        "1 RÉGUA 30 cm",
        "1 ESTOJO",
        "1 TESOURA SEM PONTA",
        "1 BORRACHA",
        "1 APONTADOR",
        "3 LÁPIS PRETOS",
        "2 CANETAS AZUIS",
        "2 CANETAS PRETAS",
        "1 CX DE LÁPIS DE COR 12 CORES",
        "1 TUBO DE COLA",
        "1 MOCHILA"];

    const listEM = ["4 CADERNOS UNIVERSITÁRIOS 200 FOLHAS PAUTADAS",
        "1 RÉGUA 30 cm",
        "1 ESTOJO",
        "1 TESOURA SEM PONTA",
        "1 BORRACHA",
        "1 APONTADOR",
        "3 LÁPIS PRETOS",
        "2 CANETAS AZUIS",
        "2 CANETAS PRETAS",
        "1 CX DE LÁPIS DE COR 12 CORES",
        "1 COLA BASTÃO",
        "1 MOCHILA"]

    const EF_List = () => {

        return (
            <ul>
                {
                    listEF.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        );
    }

    const F1_List = () => {

        return (
            <ul>
                {
                    listF1.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        );
    }

    const F2_List = () => {
        return (
            <ul>
                {
                    listF2.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        );
    }

    const EM_List = () => {
        return (
            <ul>
                {
                    listEM.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        );
    }

    return (
        (teaching === 'EF') && EF_List() ||
        (teaching === 'F1') && F1_List() ||
        (teaching === 'F2') && F2_List() ||
        (teaching === 'EM') && EM_List()
    );
}

export default WishList;
