import React from 'react';
import dataChildrens from '../data/fakeDbChildrens.js';

function ChildrenTable() {
    return (
        <section>
            <table className="table table-bordered table-hover my-5">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Ano</th>
                        <th>Escola</th>
                        <th>Estado</th>
                        <th>cidade</th>
                        <th>editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataChildrens.map((children, index) => (
                            <tr>
                                <th>{index}</th>
                                <td className="text-uppercase">{children.name}</td>
                                <td>{children.teaching}</td>
                                <td>{children.schoolName}</td>
                                <td>{children.state}</td>
                                <td>{children.city}</td>
                                <td>
                                    <button className="btn btn-warning m-1">Editar</button>
                                    <button className="btn btn-danger m-1">Excluir</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    );
}

export default ChildrenTable;
