import React, { useContext, useEffect } from 'react';
import { EF, F1, F2, EM } from '../data/materialsList.js';
import context from '../context/context';

function MaterialsList() {

    const styleList = {
        "min-height": "300px",
        "max-width": "80%",
        "min-width": "80%",
        "background": "rgb(85 85 85 / 19%)",
        "border-radius": "1.3rem",
        "margin-bottom": "40px"
    }

    const { childrenRegister, setChildrenRegister } = useContext(context);

    const { teaching } = childrenRegister;

    useEffect(() => {
        (teaching === 'EF') && setChildrenRegister({ ...childrenRegister, materials: EF }) ||
            (teaching === 'F1') && setChildrenRegister({ ...childrenRegister, materials: F1 }) ||
            (teaching === 'F2') && setChildrenRegister({ ...childrenRegister, materials: F2 }) ||
            (teaching === 'EM') && setChildrenRegister({ ...childrenRegister, materials: EM })
    }, [teaching])

    const EF_List = () => {

        return (
            <div style={styleList}>
                <ul>
                    {
                        EF.map((item, index) => <li key={index}>{item.amount} - {item.name}</li>)
                    }
                </ul>
            </div>
        );
    }

    const F1_List = () => {

        return (
            <div style={styleList}>
                <ul>
                    {
                        F1.map((item, index) => <li key={index}>{item.amount} - {item.name}</li>)
                    }
                </ul>
            </div>
        );
    }

    const F2_List = () => {
        return (
            <div style={styleList}>
                <ul>
                    {
                        F2.map((item, index) => <li key={index}>{item.amount} - {item.name}</li>)
                    }
                </ul>
            </div>
        );
    }

    const EM_List = () => {
        return (
            <div style={styleList}>
                <ul>
                    {
                        EM.map((item, index) => <li key={index}>{item.amount} - {item.name}</li>)
                    }
                </ul>
            </div>
        );
    }

    return (
        (teaching === 'EF') && EF_List() ||
        (teaching === 'F1') && F1_List() ||
        (teaching === 'F2') && F2_List() ||
        (teaching === 'EM') && EM_List()
    );
}

export default MaterialsList;
