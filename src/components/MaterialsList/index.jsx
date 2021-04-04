import React, { useContext, useEffect } from 'react'
import { EF, F1, F2, EM } from '../../data/materialsList'
import context from '../../context/context'

import * as S from './styled'

const MaterialsList = () => {

    const { childrenRegister, setChildrenRegister } = useContext(context);

    const { teaching } = childrenRegister;

    useEffect(() => {
            (teaching === 'EF') && setChildrenRegister({ ...childrenRegister, materials: EF }) ||
            (teaching === 'F1') && setChildrenRegister({ ...childrenRegister, materials: F1 }) ||
            (teaching === 'F2') && setChildrenRegister({ ...childrenRegister, materials: F2 }) ||
            (teaching === 'EM') && setChildrenRegister({ ...childrenRegister, materials: EM })
    }, [teaching])


    const list = () => {
        let childrenMaterials = [];

        (teaching === 'EF') ? childrenMaterials = EF : undefined;
        (teaching === 'F1') ? childrenMaterials = F1 : undefined;
        (teaching === 'F2') ? childrenMaterials = F2 : undefined;
        (teaching === 'EM') ? childrenMaterials = EM : undefined;

        return (
            
            <S.Table>
                <thead>
                    <tr>
                        <th>Quantidade</th>
                        <th>Material</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        childrenMaterials.map((material, index) => (
                            <tr key={index}>
                                <td>{material.amount}</td>
                                <td>{material.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
        </S.Table>
         
        );
    }

    return (
        list(teaching)
    )
}

export default MaterialsList
