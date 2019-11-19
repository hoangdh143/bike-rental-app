import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import 'antd/dist/antd.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LoginPage from "./containers/LoginPage";

class App extends Component{
    render(){
        return(
            <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={() => (<div>Main Page <Link to="/login">Login</Link></div>)}/>
                    <Route path="/login" component={LoginPage}/>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default hot(module)(App);