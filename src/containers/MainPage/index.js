import React from "react";
import {Layout} from "antd";
import Navbar from "../../components/Navbar";
import PageFooter from "../../components/PageFooter";

export default function MainPage() {
    return (
        <Layout>
            <Navbar/>
            <div>Hello</div>
            <PageFooter/>
        </Layout>
    );
}