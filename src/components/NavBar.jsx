import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { GiAngelWings } from 'react-icons/gi';


function NavBar() {
    return (
        <Navbar expand="" variant="light" className="shadow bg-yellow-clear fixed-top">
            <Container>
                <Navbar.Brand href="#">
                    <GiAngelWings style={{ 'font-size': '5rem' }} className="text-light" />
                </Navbar.Brand>
                <h1 className="text-light lobster text-border-pink">
                    Anjos da Educação
                </h1>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="btn btn-light m-3" href="#">Conheça o Projeto</Nav.Link>
                        <Nav.Link className="btn btn-light m-3" href="/registerAngel">Seja um Doador</Nav.Link>
                        <Nav.Link className="btn btn-light m-3" href="/registerResponsabe">Cadastrar Protegidos</Nav.Link>
                        <Nav.Link className="btn btn-light m-3" href="#">Renovar Cadastro</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;