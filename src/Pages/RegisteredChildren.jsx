import React, { useContext, useEffect } from 'react';
import ChildrenCards from '../components/ChildrenCards';
import context from '../context/context';

const RegisteredChildren = () => {
    
    const { chipInPage, setChipInPage } = useContext(context);

    useEffect(() => {
        setChipInPage(false)
    }, [chipInPage])

    return (
        <ChildrenCards/>
    )
}

export default RegisteredChildren
