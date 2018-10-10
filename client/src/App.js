import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Vision from './components/Vision'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/users/:userid/visions' component={Vision} />
        </Switch>
      </Router>
    );
  }
}

export default App;
