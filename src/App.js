import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
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
            <div className="App">
                <h1> Hello, World! 12345</h1>
                <Switch>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/" component={() => (<div>Main Page</div>)}/>
                </Switch>
            </div>
        );
    }
}

export default hot(module)(App);