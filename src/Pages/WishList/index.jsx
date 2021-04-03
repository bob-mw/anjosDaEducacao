import React from 'react'
import ChildrenCard from '../../components/ChildrenCards/index'

const WishList = () => {
    return (
        <section>
            <div className="text-center">
            <h1 className="display-4">Lista de Pedidos</h1>
            </div>
            <section className="p-5">
                <ChildrenCard />
            </section>
        </section>
    );
}

export default WishList
