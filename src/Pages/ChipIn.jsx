import React, { useContext, useEffect } from 'react';
import ChipIn from '../components/ChipInComponent';
import context from '../context/context';

const ChipInPage = () => {
    
    const { chipInPage, setChipInPage } = useContext(context);

    useEffect(() => {
        setChipInPage(true)
    }, [chipInPage])

    return (
        <ChipIn/>
    )
}

export default ChipInPage
