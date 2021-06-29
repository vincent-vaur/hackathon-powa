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
import Categories from './components/Categories';
import Languages from './components/Languages';

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
                                <Link to="/categories">categories</Link>
                            </li>
                            <li>
                                <Link to="/languages">Languages</Link>
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
                        <Route path="/categories">
                            <Categories />
                        </Route>
                        <Route path="/languages">
                            <Languages />
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