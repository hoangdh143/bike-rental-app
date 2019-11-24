import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import loginPageSaga from "./saga";
import { composeWithDevTools } from "redux-devtools-extension";


import loginPageReducer from './reducer';
import React from "react";
import LoginForm from "../../components/LoginForm";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(loginPageReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(loginPageSaga);

export default function LoginPage() {
    return (<Provider store={store}>
        <LoginForm/>
    </Provider>);
}