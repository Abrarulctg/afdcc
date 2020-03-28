import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './compunents/Home/Home';
import Header from './compunents/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>

    </div>
  );
}

export default App;
