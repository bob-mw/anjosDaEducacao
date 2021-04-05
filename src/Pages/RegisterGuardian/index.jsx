import React, { useState, useContext, useEffect } from 'react'
import context from '../../context/context'
import RegisterForms from '../../components/RegisterForms'

function RegisterResponsable() {

    const { setRegisterType } = useContext(context);

    useEffect(() => {
        setRegisterType('guardian')
    },[])

    return(
        <RegisterForms />
    );
}

export default RegisterResponsable;
