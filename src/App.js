import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import NavBar from './components/NavBar';
import Login from './Pages/Login';
import RegisterGuandian from './Pages/RegisterGuandian';
import RegisterResponsable from './Pages/RegisterResponsable';
import ResponsableDetails from './Pages/ResponsableDetails';
import WishList from './Pages/WishList';
import Mural from './Pages/Mural';


function App(){
    return (
      <Provider>
        <NavBar />
        <main className="gradient-sky margin-top-main w-100"> 
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ Login } />
              <Route path="/registerGuardian" component={ RegisterGuandian } />
              <Route path="/registerResponsabe" component={ RegisterResponsable } />
              <Route path="/responsableDetails" component={ ResponsableDetails } />
              <Route path="/wishList" component={ WishList } />
              <Route path="/mural" component={ Mural } />
            </Switch>
          </BrowserRouter>
        </main>
      </Provider>
    );
}

export default App;
