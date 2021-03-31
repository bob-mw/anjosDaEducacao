import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import NavBar from './components/NavBar';
import Login from './Pages/Login';
import RegisterGuardian from './Pages/RegisterGuardian';
import RegisterResponsable from './Pages/RegisterResponsable';
import ResponsableDetails from './Pages/ResponsableDetails';
import WishList from './Pages/WishList';
import Mural from './Pages/Mural'
import PaymentForm from './Pages/PaymentForm';


function App(){
    return (
      <Provider>
        <NavBar />
        <main className="gradient-sky margin-top-main full-screen w-100"> 
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ Login } />
              <Route path="/guardian" component={ RegisterGuardian } />
              <Route path="/parents" component={ RegisterResponsable } />
              <Route path="/parentDetails" component={ ResponsableDetails } />
              <Route path="/wishList" component={ WishList } />
              <Route path="/mural" component={ Mural } />
              <Route path="/paymentForm" component={ PaymentForm } />
            </Switch>
          </BrowserRouter>
        </main>
      </Provider>
    );
}

export default App;
