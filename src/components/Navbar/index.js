import React from "react";
import {Menu, Layout} from "antd";
import {NavbarWrapper} from "./style";
import logo from '../../images/logo.png';
import {Link} from "react-router-dom";
import {userService} from "../../services/login.service";

const {Header} = Layout;

const userLogOut = () => {
    userService.logout();
    location.replace("/login");
};

export default function Navbar() {
    return (
        <NavbarWrapper>
            <Header style={{width: '100%'}}>
                <div className="logo">
                    <img alt="logo" src={logo} style={{maxWidth: '100%', maxHeight: '100%'}}/>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['`']}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1"><Link to="/home">Products</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/home/cart">Cart</Link></Menu.Item>
                    <div className="logout" onClick={userLogOut}><a>Logout</a></div>
                </Menu>
            </Header>
        </NavbarWrapper>
    );
}