import React from 'react'
import ChipIn from '../../components/ChipInComponent/'
import fakeData from '../../data/fakeDbChildrens'

import * as S from './styled'

const ChildDetails = () => {
    return (
        <>

            <S.Title>Você tem { fakeData.length } filhos cadastrados</S.Title>

            <S.Label htmlFor="yourChildrens">

                <select name="yourChildrens" id="yourChildrens">
                    <option value="" selected disabled>Filhos cadastrados</option>
                    {
                        fakeData.map((child, index) => (
                            <option key={index} value={child.name}>{child.name}</option>
                        ))
                    }
                </select>
            </S.Label>

            <ChipIn/>
        </>
    )
}

export default ChildDetails
