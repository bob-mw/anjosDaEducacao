import React, { useContext, useEffect } from 'react';
import ChipIn from '../../components/ChipInComponent';
import context from '../../context/context';

const ChildDetails = () => {
    
    const { chipInPage, setChipInPage } = useContext(context);

    useEffect(() => {
        setChipInPage(false)
    }, [chipInPage])

    return (
        <ChipIn/>
    )
}

export default ChildDetails
