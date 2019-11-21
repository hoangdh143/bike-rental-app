import React from "react";
import {Layout} from "antd";
import Navbar from "../../components/Navbar";
import PageFooter from "../../components/PageFooter";
import BikeGallery from "../../components/BikeGallery";
import BikeSearchForm from "../../components/BikeSearchForm";
import {MainPageWrapper} from "./style";
import {createInstance} from 'react-async';
import {bikeService} from "../../services/bikes.service";

const Async = createInstance({promiseFn: () => bikeService.getAll(1, 10).then(bikes => bikes)})

const {Content} = Layout;
export default function MainPage() {
    return (
        <MainPageWrapper>
            <Layout>
                <Navbar/>
                <Content className="main-page-content">
                    <BikeSearchForm/>
                    <Async>
                        <Async.Loading>Loading ...</Async.Loading>
                        <Async.Resolved>
                            {data => {console.log(data); return (
                                <BikeGallery bikes={data}/>
                            )}}
                        </Async.Resolved>
                        <Async.Rejected>{error => error.message}</Async.Rejected>
                    </Async>
                    <BikeGallery/>
                </Content>
                <PageFooter/>
            </Layout>
        </MainPageWrapper>
    );
}