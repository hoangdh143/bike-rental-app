import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import loginPageSaga from "./saga";

import loginPageReducer from './reducer';
import React from "react";

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(loginPageReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(loginPageSaga);

export default function LoginPage() {
    return (<Provider store={store}>
        <LoginForm/>
    </Provider>);
}

store.subscribe(LoginPage);