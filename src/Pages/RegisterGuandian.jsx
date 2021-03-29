import React, { useContext, useEffect } from 'react';
import RegisterForms from '../components/RegisterForms';
import context from '../context/context';

function RegisterGuardian() {
    
    const { setRegisterType } = useContext(context);

    useEffect(() => {
        setRegisterType('guardian')
    },[])

    return(
        <RegisterForms />
    );
}

export default RegisterGuardian;
