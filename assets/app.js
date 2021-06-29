<<<<<<< HEAD
import React, { Component} from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LayoutBoard from "./components/LayoutBoard";

class App extends Component {
  render() {
    return (
      <>
        <LayoutBoard />
=======
import React, { Component } from 'react';
import  ReactDom  from 'react-dom';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './components/Board';
import Navigation from './components/Navigation';
import logo from './img/fiverr.png';
import GlobalContext from './contexts/GlobalContext';
import Login from './components/Login';

class App extends Component {
  render() {

    return (
      <>
        <GlobalContext>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='Login'>
            <Login />
          </div>
          <div className='App'>
            <Navigation />
            <Board />
          </div>
        </GlobalContext>
>>>>>>> 67203152dbbee75dc5c3250338b14b27e16f81a3
      </>
    );
  }
};

ReactDom.render(<App />, document.getElementById('root'));


<div className='Login'>
            <Login />
          </div>