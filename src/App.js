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
        <main>
          <img src={ angel } />
          <Container>
          <Card />
          </Container>
        </main>
      </Provider>
    );
}

export default App;
