import React from 'react';

function childDetails() {
    return (
        <section className="d-flex flex-column justify-content-center align-items-center">
            <p>Detalhes</p>
            <img src="https://trello-attachments.s3.amazonaws.com/605cb21ec62a2a840b3a77b1/307x698/6e6bbee9ff6b7a795cf7ed2b4588abb2/image.png" alt="exemplo"/>
            <a className="btn w-100 m-3" style={ { background: '#f1d7d8ff', 'border-radius': '15px' } } href="#" >Editar</a>
        </section>

    );
}

export default childDetails;
