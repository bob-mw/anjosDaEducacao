import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { GiAngelWings } from 'react-icons/gi';


function NavBar() {
    return (
        <Navbar expand="lg" variant="light" bg="warning" className="shadow">
            <Container>
                <Navbar.Brand href="#">
                    <GiAngelWings style={{ 'font-size': '5rem' }} className="text-light" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="btn btn-light m-3" href="#">Conheça o Projeto</Nav.Link>
                        <Nav.Link className="btn btn-light m-3" href="#">Seja um Doador</Nav.Link>
                        <Nav.Link className="btn btn-light m-3" href="#">Cadastrar Protegidos</Nav.Link>
                        <Nav.Link className="btn btn-light m-3" href="#">Renovar Cadastro</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <h1 className="text-light lobster text-border-pink">
                    Anjos da Educação 
            </h1>
            </Container>
        </Navbar>
    );
}

export default NavBar;