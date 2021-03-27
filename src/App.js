import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Provider from './context/Provider';
import NavBar from './components/NavBar';
import Login from './Pages/Login';
import RegisterAngelForms from './Pages/RegisterAngelForms';
import RegisterResposabeForms from './Pages/RegisterResponsabeForms';
import ResponsableDetails from './Pages/ResponsableDetails';


function App(){
    return (
      <Provider>
        <NavBar />
        <main className="gradient-sky margin-top-main w-100"> 
          <BrowserRouter>
            <Route exact path="/" component={ Login } />
            <Route path="/registerAngel" component={ RegisterAngelForms } />
            <Route path="/registerResponsabe" component={ RegisterResposabeForms } />
            <Route path="/responsableDetails" component={ ResponsableDetails } />
          </BrowserRouter>
        </main>
      </Provider>
    );
}

export default App;
