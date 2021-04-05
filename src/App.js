import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import Layout from './components/Layout';
import Login from './Pages/Login/index';
import RegisterResponsable from './Pages/RegisterResponsable';
import RegisterResponsable from './Pages/RegisterGuardian';
import ResponsableDetails from './Pages/ResponsableDetails';
import WishList from './Pages/WishList';
import Mural from './Pages/Mural'
import PaymentForm from './Pages/PaymentForm';
import ChildDetails from './Pages/ChildDetails';
import ChipInPage from './Pages/ChipIn';
import RegisteredChildren from './Pages/RegisteredChildren';



function App(){
    return (
      <Provider>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={ Login } />
              <Route path="/register" component={ RegisterResponsable } />
              <Route path="/guardian" component={ RegisterGuardian } />
              <Route path="/parent" component={ ResponsableDetails } />
              <Route path="/childDetails" component={ ChildDetails } />
              <Route path="/wishList" component={ WishList } />
              <Route path="/mural" component={ Mural } />
              <Route path="/paymentForm" component={ PaymentForm } />
              <Route path="/chipIn" component={ ChipInPage } />
              <Route path="/childrenList" component={  RegisteredChildren } />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
}

export default App;
