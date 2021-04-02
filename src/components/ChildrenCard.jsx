import React, { useContext } from 'react';
import dataChildrens from '../data/fakeDbChildrens.js';
import context from '../context/context';

function ChildrenCard() {

    const { setIdLittleCow, idLittleCow } = useContext(context);

    const sendIdToLittleCow = (id) => {
    /*
        tentando enviar o id para carregar a proxima pagina
    */
    }
    return (
        <section className="row">
            {
                dataChildrens.map((children, index) => (
                    <div key={index} className=" shadow p-5 card m-5 d-flex flex-column justify-content-center align-items-center" style={{ width: '15rem' }}>
                        <div className="card-body">
                            <h3 className="card-title text-uppercase">{children.name}</h3>
                            <p className="card-title text-uppercase">{(children.teaching === "EF") && "Ensino Infantil" || (children.teaching === "F1") && "Fundamental 1" || (children.teaching === "F2") && "Fundamental 2" || (children.teaching === "EM") && "Ensino Médio" }</p>
                            <p className="card-title text-uppercase">{children.schoolName}</p>
                            <hr />

                            <section>

                                <div className="shadow b-radius border border-dark mb-3">
                                    <div className="bg-success b-radius" style={{
                                        height: '10px', width: `${(children.collected === children.goal / 4) && "25%" ||
                                            (children.collected <= children.goal / 2) && "50%" ||
                                            (children.collected <= (children.goal / 4) * 3) && "75%" ||
                                            (children.collected <= children.goal / 1) && "100%"}`
                                    }
                                    }></div>
                                </div>

                                <div>
                                    <span><strong>Conseguimos: </strong> R$ {children.collected}</span>
                                </div>

                                <div>
                                    <span><strong>Meta: </strong>R$ {children.goal}</span>
                                </div>

                                <div>
                                    <span><strong>Guardiões: </strong> {children.guardians}</span>
                                </div>

                            </section>

                            <hr />

                            <a href="/littleCow" className="btn w-100" style={ { background: '#f1d7d8ff'}  }> Doar</a>
                        </div>
                    </div>
                ))
            }
        </section>
    );
}

export default ChildrenCard;

