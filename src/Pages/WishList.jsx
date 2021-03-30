import React from 'react';
import ChildrenCard from '../components/ChildrenCard';

function WishList() {
    return (
        <section>
            <h1 className="m-auto p-5">Lista de Pedidos</h1>
            <section className="p-5">
                <ChildrenCard />
            </section>
        </section>
    );
}

export default WishList;
