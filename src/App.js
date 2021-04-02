import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import Layout from './components/Layout';
import Login from './Pages/Login/index';
import RegisterGuardian from './Pages/RegisterGuardian';
import RegisterResponsable from './Pages/RegisterResponsable';
import ResponsableDetails from './Pages/ResponsableDetails';
import WishList from './Pages/WishList';
import Mural from './Pages/Mural'
import PaymentForm from './Pages/PaymentForm';
import ChildDetails from './Pages/ChildDetails';
import LittleCowPage from './Pages/LittleCow';



function App(){
    return (
      <Provider>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={ Login } />
              <Route path="/guardian" component={ RegisterGuardian } />
              <Route path="/parents" component={ RegisterResponsable } />
              <Route path="/parentDetails" component={ ResponsableDetails } />
              <Route path="/childDetails" component={ ChildDetails } />
              <Route path="/wishList" component={ WishList } />
              <Route path="/mural" component={ Mural } />
              <Route path="/paymentForm" component={ PaymentForm } />
              <Route path="/littleCow" component={ LittleCowPage } />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
}

export default App;
