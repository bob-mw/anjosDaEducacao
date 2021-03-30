import React, { useContext, useEffect } from 'react';
import RegisterForms from '../components/RegisterForms';
import context from '../context/context';

function RegisterResposable() {

    const { setRegisterType } = useContext(context);

    useEffect(() => {
        setRegisterType('user')
    },[])

    return(
        <RegisterForms />
    );
}

export default RegisterResposable;
