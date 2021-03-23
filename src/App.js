import React from 'react';
import Provider from './context/Provider';
import Card from './components/Card';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import angel from './img/angel.svg';

function App(){
    return (
      <Provider>
        <NavBar />
        <main className="gradient-sky">
          <Container className="mr-5">
          <img src={ angel } />
          <Card />
          </Container>
        </main>
      </Provider>
    );
}

export default App;
