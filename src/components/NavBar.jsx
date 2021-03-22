import React from 'react';
import {  Container, Navbar } from 'react-bootstrap';
import { GiAngelWings } from 'react-icons/gi';


function NavBar() {
    return (
        <Navbar expand="lg" variant="light" bg="warning">
            <Container>
            <Navbar.Brand href="#">
               <GiAngelWings style={{'font-size': '5rem'}} className="text-light"/>
            </Navbar.Brand>
            <h1 className="text-light lobster text-border-pink border-bottom border-light">
            Ajude Meu Filho
            </h1>
            </Container>
        </Navbar>
    );
}

export default NavBar;