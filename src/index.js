import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login.js';
import Home from './components/home.js';
import Signup from './components/signup.js';
import navbar from './components/navbar.js';
import mangapage from './components/mangapage.js';
import mangapageOUT from './components/mangapageOUT.js';
import mangalist from './components/mangalist.js';
import mangalistOUT from './components/mangalistOUT.js';

ReactDOM.render(
  <div>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/home' component={Home} />
        <Route path='/navbar' component={navbar} />
        <Route path='/Kimetsu-No-Yaiba-1' component={mangapage} />
        <Route path='/Kimetsu-No-Yaiba-0' component={mangapageOUT} />
        <Route path='/mangalist-1' component={mangalistOUT} />
        <Route path='/mangalist-0' component={mangalist} />
      </div>
    </Router>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
