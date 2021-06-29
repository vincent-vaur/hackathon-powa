import React, { Component } from "react";
import ReactDom from "react-dom";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Board from "./components/Board";
import Navigation from "./components/Navigation";
import logo from "./img/fiverr.png";

class App extends Component {
  render() {
    return (
      <>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="App">
          <Navigation />
          <Board />
        </div>
      </>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
