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
      </>
    );
  }
};

ReactDom.render(<App />, document.getElementById('root'));
