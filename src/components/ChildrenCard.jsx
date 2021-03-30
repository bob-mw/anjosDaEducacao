import React from 'react';
import dataChildrens from '../data/fakeDbChildrens.js';

function ChildrenCard() {
    return (
        <section className="row">
            {
                dataChildrens.map((children, index) => (
                    <div key={ index } className="card m-5 d-flex flex-column justify-content-center align-items-center" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title text-uppercase">{children.name}</h5>
                            <img src="https://picsum.photos/200/200?random" alt="randomPicsum"/>
                            <hr />
                       
                            <a href="#" className="btn btn-success"> ❤️ Doar</a>
                        </div>
                    </div>
                ))
            }
        </section>
    );
}

export default ChildrenCard;

