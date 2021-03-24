import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Provider from './context/Provider';
import NavBar from './components/NavBar';
import Login from './Pages/Login';
import RegisterFormsAngel from './Pages/RegisterAngelForms';


function App(){
    return (
      <Provider>
        <NavBar />
        <main className="gradient-sky margin-top-main w-100">
          <BrowserRouter>
            <Route exact path="/" component={ Login } />
            <Route exact path="/registerAngel" component={ RegisterFormsAngel } />
          </BrowserRouter>
        </main>
      </Provider>
    );
}

export default App;
