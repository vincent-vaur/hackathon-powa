import React, { Component } from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LayoutBoard from "./components/LayoutBoard";
import GlobalContext from "./contexts/GlobalContext";

class App extends Component {
  render() {
    return (
      <>
        <GlobalContext>
          <LayoutBoard />
        </GlobalContext>
      </>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));


