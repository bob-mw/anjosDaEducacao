import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import GlobalStyles from './css/GlobalStyles'
import Main from './components/pages/Main'
import Mural from './components/pages/Mural'


function App(){
    return (
      <>
        <GlobalStyles/>
        <Router>
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/mural" exact component={Mural}/>
          </Switch>
        </Router>
      </>
    );
}

export default App;
