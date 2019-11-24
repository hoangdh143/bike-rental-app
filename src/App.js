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
import SiteLayout from "./containers/SiteLayout";
import {NotificationContainer} from "react-notifications";
import ProductsPage from "./containers/ProductsPage";

const productsPage = () => {return <SiteLayout> <ProductsPage/> </SiteLayout>};

class App extends Component{
    render(){
        return(
            <Router>
            <div className="App">
                <Switch>
                    <PrivateRoute path="/home" component={productsPage}/>
                    <Route path="/login" component={LoginPage}/>
                </Switch>
                <NotificationContainer/>
            </div>
            </Router>
        );
    }
}

export default hot(module)(App);