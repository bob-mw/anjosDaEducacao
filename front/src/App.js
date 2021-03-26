import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import GlobalStyles from './css/GlobalStyles'
import Main from './components/pages/Main'


function App(){
    return (
      <>
        <GlobalStyles/>
        <Router>
          <Switch>
          <Route path="/" exact component={Main}/>
          </Switch>
        </Router>
      </>
    );
}

export default App;
