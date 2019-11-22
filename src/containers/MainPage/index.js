import React, {useEffect} from "react";
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
import {Provider, useDispatch, useSelector} from "react-redux";
import {createNotification} from "../../utils/notification-handle";
import {goToPageAction} from "./actions";

export const DEFAULT_CURRENT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(mainPageReducer, composeWithDevTools(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(mainPageSaga);

const selectBikes = state => state.display;

const {Content} = Layout;
function MainPageContent() {
    const dispatch = useDispatch();
    const {bikes, page, size, totalRecords} = useSelector(selectBikes);

    useEffect(() => {
        if (page === 0) {console.log("Initial load"); dispatch(goToPageAction(DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE));}
    });

    return (
            <MainPageWrapper>
                <Layout>
                    <Navbar/>
                    <Content className="main-page-content">
                        <BikeSearchForm/>
                        <BikeGallery currentPage={page} bikes={bikes} pageSize={size} totalRecords={totalRecords}/>
                    </Content>
                    <PageFooter/>
                </Layout>
            </MainPageWrapper>
    );
}

export default function MainPage() {
    return (
        <Provider store={store}>
            <MainPageContent/>
        </Provider>
    );
}