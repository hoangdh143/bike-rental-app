import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import loginPageSaga from "./saga";

import loginPageReducer from './reducer';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(loginPageReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(loginPageSaga);

export default function LoginPage() {
    return (<div>This is Login Page</div>);
}

store.subscribe(LoginPage);