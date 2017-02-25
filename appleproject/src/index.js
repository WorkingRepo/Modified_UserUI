import React from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-fetch';

import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import Navigation1 from './Navigation1'
import Details from './Details'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/details" component={Details} />
  </Router>,
  <App />),
  document.getElementById('root')
);
