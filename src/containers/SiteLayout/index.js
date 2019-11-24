import React, {useEffect} from "react";
import {Layout} from "antd";
import Navbar from "../../components/Navbar";
import PageFooter from "../../components/PageFooter";
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import siteLayoutReducer from "./reducer";
import siteLayoutSaga from "./saga";
import {Provider, useDispatch, useSelector} from "react-redux";
import {SiteLayoutWrapper} from "./style";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProductsPage from "../ProductsPage";
import CartPage from "../CartPage";

export const DEFAULT_CURRENT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(siteLayoutReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(siteLayoutSaga);

const {Content} = Layout;

export default function SiteLayout(props) {
    console.log(props.match);
    return (
        <Provider store={store}>
            <SiteLayoutWrapper>
                <Layout>
                    <Navbar/>
                    <Content className="main-page-content">
                        {/*{props.children}*/}
                        <Switch>
                            <Route exact path="/home" component={ProductsPage}/>
                            <Route exact path="/home/cart" component={CartPage}/>
                        </Switch>
                    </Content>
                    <PageFooter/>
                </Layout>
            </SiteLayoutWrapper>
        </Provider>
    );
}