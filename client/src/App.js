import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './pages/Profile';

class App extends Component{
  
  
  render(){


  return (
    <Router>
      <Switch>
        <Route path="/" component={Profile}>
        </Route>
        <Route></Route>
      </Switch>
    </Router>
  );
}
}

export default App;
