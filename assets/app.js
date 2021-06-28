import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import UserContextProvider from './components/UserContextProvider';
import About from "./components/About"
import Home from "./components/Home"
import Users from "./components/Users"

class App extends Component {
    render() {
        return (
            <Router>
                <UserContextProvider>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </UserContextProvider>
            </Router>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));