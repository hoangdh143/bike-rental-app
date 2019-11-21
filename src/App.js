import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import 'antd/dist/antd.css';
import 'react-notifications/lib/notifications.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LoginPage from "./containers/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import MainPage from "./containers/MainPage";
import {NotificationContainer} from "react-notifications";

class App extends Component{
    render(){
        return(
            <Router>
            <div className="App">
                <Switch>
                    <PrivateRoute exact path="/" component={MainPage}/>
                    <Route path="/login" component={LoginPage}/>
                </Switch>
                <NotificationContainer/>
            </div>
            </Router>
        );
    }
}

export default hot(module)(App);