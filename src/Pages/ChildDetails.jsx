import React from 'react';
import LittleCow from '../components/LittleCowComponent/index';
import fakeData from '../data/fakeDbChildrens';

function ChildDetails() {
    return (
        <div className="d-flex flex-column align-items-center">

            <section>
                <h1 className="display-4">Você tem { fakeData.length } filhos cadastrados</h1>
            </section>

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

            <LittleCow />
        </div>
    );
}

export default ChildDetails;
