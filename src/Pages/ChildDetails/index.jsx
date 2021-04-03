import React from 'react'
import ChipIn from '../../components/ChipInComponent/'
import fakeData from '../../data/fakeDbChildrens'

import * as S from './styled'

const ChildDetails = () => {
    return (
        <>

            <S.Title>Você tem { fakeData.length } filhos cadastrados</S.Title>

            <label htmlFor="yourChildrens" className="my-5">

                <select name="yourChildrens" id="yourChildrens" className="form-control mx-3 text-uppercase">
                    <option value="" selected disabled>Filhos cadastrados</option>
                    {
                        fakeData.map((child, index) => (
                            <option key={index} value={child.name}>{child.name}</option>
                        ))
                    }
                </select>
            </label>

            <ChipIn/>
        </>
    )
}

export default ChildDetails
