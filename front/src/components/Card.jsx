import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import  { BsFillHeartFill } from 'react-icons/bs';
import context from '../context/context';

function Cards() {
    const { products } = useContext(context);

    return (
        <section className="row">
            {   products.map((product, index) => (
                <Card key={ index } className="m-3 shadow" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ product.thumbnail } />
                    <Card.Body>
                        <Card.Title>{ product.name }</Card.Title>
                        <Card.Text className="text-danger">{ product.price }</Card.Text>
                        <a className="btn btn-primary text-light" href={ product.link } target="_blank"><BsFillHeartFill className="text-danger"/> Doar</a>
                    </Card.Body>
                </Card>
            ))
            }
        </section>
    );
}

export default Cards;