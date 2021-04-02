import React, { useContext } from 'react';
import dataFake from '../data/fakeDbChildrens';
import context from '../context/context';

function littleCow() {
    
    const { idLittleCow } = useContext(context)

    const children = dataFake[idLittleCow];

    return (
        <section>
            <div className=" shadow p-5 m-auto bg-light">

                <div className="text-center">

                    <h1 className="text-uppercase display-4">{children.name}</h1>

                    <h2 className="text-uppercase">{(children.teaching === "EF") && "Ensino Infantil" || (children.teaching === "F1") && "Fundamental 1" || (children.teaching === "F2") && "Fundamental 2" || (children.teaching === "EM") && "Ensino Médio"}</h2>

                    <h3>{children.schoolName}</h3>
                </div>

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


                    <div className="d-flex flex-column">
                        <h1>Conseguimos: R$ {children.collected}</h1>

                        <h1>Meta: R$ {children.goal}</h1>

                        <h1>Guardiões: {children.guardians}</h1>
                    </div>

                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Qt</th>
                                <th>Material</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                children.materials.map((material, index) => (
                                    <tr key={index}>
                                        <td>{material.amount}</td>
                                        <td>{material.name}</td>
                                        <td>{material.price}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <div className="d-flex flex-column align-items-end">
                        <h1>Taxa de entrega: </h1>

                        <h1>Total: </h1>

                    </div>

                    <section className="border border-primary p-2 b-radius methodPayment-width mx-auto my-5">
                        <h1 className="text-center">Método de Pagamento</h1>
                        <div className="my-3">

                            <label htmlFor="card" className="d-flex align-items-center my-2">
                                <input value="card" name="paymentMethod" className="mx-2" type="radio" id="card" />
                                Cartão
                            </label>

                            <label htmlFor="ticket" className="d-flex align-items-center my-2">
                                <input value="ticket" name="paymentMethod" className="mx-2" type="radio" id="ticket"/>
                                Boleto
                            </label>
                        </div>
                    </section>

                </section>

                <hr />

                <a className="btn w-100 m-3" style={ { background: '#f1d7d8ff', 'border-radius': '15px' } } href="/paymentForm" >Próximo</a>

            </div>

        </section>

    );
}

export default littleCow;
