import React, { useContext } from 'react';
import context from '../context/context';

function WishList() {

    const { childrenRegister } = useContext(context);

    const { teaching } = childrenRegister;

    const EF_List = () => {
        return (
            <ul>
                <li>1 PACOTE CHAMEX 500 FLS</li>
                <li>1 TUBO DE COLA</li>
                <li>1 ROLO FITA CREPE 50 mm x 50 mm</li>
                <li>1 CAIXA DE GIZ DE CERA GRANDE</li>
                <li>1 TESOURA SEM PONTA</li>
                <li>2 CX DE LÁPIS DE COR 12 CORES</li>
                <li>1 PINCEL TIGRE Nº 12</li>
                <li>1 LANCHEIRA</li>
                <li>1 AGENDA</li>
            </ul>
        );
    }

    const F1_List = () => {
        return (
            <ul>
                <li>4 CADERNOS UNIVERSITÁRIOS 200 FOLHAS PAUTADAS</li>
                <li>1 RÉGUA 30 cm</li>
                <li>1 ESTOJO</li>
                <li>1 TESOURA SEM PONTA</li>
                <li>1 BORRACHA</li>
                <li>1 APONTADOR</li>
                <li>3 LÁPIS PRETOS</li>
                <li>1 CX DE LÁPIS DE COR 12 CORES</li>
                <li>1 TUBO DE COLA</li>
                <li>1 MOCHILA</li>
            </ul>
        );
    }

    const F2_List = () => {
        return (
            <ul>
                <li>4 CADERNOS UNIVERSITÁRIOS 200 FOLHAS PAUTADAS</li>
                <li>1 CADERNO EDUCAÇÃO ARTÍSTICA</li>
                <li>1 RÉGUA 30 cm</li>
                <li>1 ESTOJO</li>
                <li>1 TESOURA SEM PONTA</li>
                <li>1 BORRACHA</li>
                <li>1 APONTADOR</li>
                <li>3 LÁPIS PRETOS</li>
                <li>2 CANETAS AZUIS</li>
                <li>2 CANETAS PRETAS</li>
                <li>1 CX DE LÁPIS DE COR 12 CORES</li>
                <li>1 TUBO DE COLA</li>
                <li>1 MOCHILA</li>
            </ul>
        );
    }

    const EM_List = () => {
        return (
            <ul>
                <li>4 CADERNOS UNIVERSITÁRIOS 200 FOLHAS PAUTADAS</li>
                <li>1 RÉGUA 30 cm</li>
                <li>1 ESTOJO</li>
                <li>1 TESOURA SEM PONTA</li>
                <li>1 BORRACHA</li>
                <li>1 APONTADOR</li>
                <li>3 LÁPIS PRETOS</li>
                <li>2 CANETAS AZUIS</li>
                <li>2 CANETAS PRETAS</li>
                <li>1 CX DE LÁPIS DE COR 12 CORES</li>
                <li>1 COLA BASTÃO</li>
                <li>1 MOCHILA</li>
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
