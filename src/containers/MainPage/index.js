import React from "react";
import {Layout} from "antd";
import Navbar from "../../components/Navbar";
import PageFooter from "../../components/PageFooter";
import BikeGallery from "../../components/BikeGallery";
import BikeSearchForm from "../../components/BikeSearchForm";
import {MainPageWrapper} from "./style";

const {Content} = Layout;
export default function MainPage() {
    return (
        <MainPageWrapper>
            <Layout>
                <Navbar/>
                <Content className="main-page-content">
                    <BikeSearchForm/>
                    <BikeGallery/>
                </Content>
                <PageFooter/>
            </Layout>
        </MainPageWrapper>
    );
}