import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Main from './components/pages/Main'


function App(){
    return (
      <Router>
        <Route path="/" component={Main}/>
      </Router>
    );
}

export default App;
