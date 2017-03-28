import React from 'react';
import ReactDOM from 'react-dom';
import 'isomorphic-fetch';

import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import Home from './Home'
import About from './About'
import Popular from './Popular'
import Services from './Services'
import Contact from './Contact'
import DetailedStyle from './DetailedStyle'
import NearDetails from './NearDetails'
import Suggestions from './Suggestions'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/popular" component={Popular} />
    <Route path="/services" component={Services} />
    <Route path="/contact" component={Contact} />
    <Route path="/details/:id" component={DetailedStyle} />
    <Route path="/neardetails" component={NearDetails} />


  </Router>,
  <App />),
  document.getElementById('root')
);
