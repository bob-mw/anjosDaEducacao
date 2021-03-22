import React from 'react';
import Provider from './context/Provider';
import Card from './components/Card';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';

function App(){
    return (
      <Provider>
        <NavBar />
        <main>
          <Container>
          <Card />
          </Container>
        </main>
      </Provider>
    );
}

export default App;
