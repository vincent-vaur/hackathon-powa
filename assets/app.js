import React, { Component } from "react";
import ReactDom from "react-dom";
import "./app.scss";
import Navigation from "./components/Navigation";
import logo from "./img/fiverr.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Navigation/>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
