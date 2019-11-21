import React from "react";
import {Layout} from "antd";
import Navbar from "../../components/Navbar";
import PageFooter from "../../components/PageFooter";
import BikeGallery from "../../components/BikeGallery";
import BikeSearchForm from "../../components/BikeSearchForm";
import {MainPageWrapper} from "./style";
import {createInstance} from 'react-async';
import {bikeService} from "../../services/bikes.service";
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import mainPageReducer from "./reducer";
import mainPageSaga from "./saga";
import {Provider} from "react-redux";
import {createNotification} from "../../utils/notification-handle";

const currentPage = 1;
const itemsPerPage = 10;
const Async = createInstance({promiseFn: () => bikeService.getAll(currentPage, itemsPerPage).then(data => data)})

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(mainPageReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(mainPageSaga);

const {Content} = Layout;
export default function MainPage() {
    return (
        <Provider store={store}>
            <MainPageWrapper>
                <Layout>
                    <Navbar/>
                    <Content className="main-page-content">
                        <BikeSearchForm/>
                        <Async>
                            <Async.Loading>Loading ...</Async.Loading>
                            <Async.Resolved>
                                {data => {
                                    return (
                                        <BikeGallery currentPage={currentPage} bikes={data.bikes} itemsPerPage={itemsPerPage} totalRecords={data.totalRecords}/>
                                    )
                                }}
                            </Async.Resolved>
                            <Async.Rejected>{() => createNotification(error.message)}</Async.Rejected>
                        </Async>
                    </Content>
                    <PageFooter/>
                </Layout>
            </MainPageWrapper>
        </Provider>
    );
}