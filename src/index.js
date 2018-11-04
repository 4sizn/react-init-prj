import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Entry } from './pages';
import './index.scss';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Entry} />
      </Switch>
    );
  }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));