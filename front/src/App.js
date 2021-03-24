import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Provider from './context/Provider';
import NavBar from './components/NavBar';
import Login from './Pages/Login';


function App(){
    return (
      <Provider>
        <NavBar />
        <main className="gradient-sky">
          <BrowserRouter>
            <Route exact path="/" component={ Login } />
          </BrowserRouter>
        </main>
      </Provider>
    );
}

export default App;
