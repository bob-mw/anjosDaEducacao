import React from 'react';

function ResponsableDetails() {
    const data = JSON.parse(localStorage.getItem('cadastro'))
    return (
        <section className="p-5 m-auto">
        <h1>
            Olá, {' '}
        {
            data.nome
        }
        </h1>
        <h2>Cadastre um filho para que ele receba doações de materiais</h2>
       
       <form action="" className="bg-purple-clear w-50 b-radius p-5 m-auto ">

       <label htmlFor="nome">
           Nome:
           <input className="form-control" type="text" id="nome" name="name"/>
       </label>

       </form>



        </section>
    );
}

export default ResponsableDetails;
