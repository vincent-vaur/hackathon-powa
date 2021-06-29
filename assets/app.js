import React, { Component} from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LayoutBoard from "./components/LayoutBoard";

class App extends Component {
  render() {
    return (
      <>
        <LayoutBoard />
      </>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
