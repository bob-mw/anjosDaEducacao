import React from 'react';
import Provider from '../../../context/Provider';
import Card from '../../Card';
import NavBar from '../../NavBar';
import { Container } from 'react-bootstrap';
import angel from '../../../img/angel.svg';

const Main = () => {
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

export default Main;
