import React from "react";
import {Menu, Layout} from "antd";
import {NavbarWrapper} from "./style";
import logo from '../../images/logo.png';

const {Header} = Layout;

export default function Navbar() {
    return (
        <NavbarWrapper>
        <Header style={{ width: '100%' }}>
            <div className="logo">
                <img alt="logo" src={logo} style={{maxWidth: '100%', maxHeight: '100%'}}/>
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">Category</Menu.Item>
                <Menu.Item key="2">Promotions</Menu.Item>
                <Menu.Item key="3">Cart</Menu.Item>
            </Menu>
        </Header>
        </NavbarWrapper>
    );
}