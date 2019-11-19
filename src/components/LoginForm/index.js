import React, {useEffect, useState} from "react";
import {connect, useDispatch, useSelector, useStore} from 'react-redux';
import {LOG_IN_REQUEST} from "../../containers/LoginPage/constants";
import {loginRequestAction} from "../../containers/LoginPage/actions";
import {Form, Icon, Input, Button, Checkbox, Layout} from 'antd';
import {LoginFormWrapper} from "./style";

const {Header, Footer, Content} = Layout;

function LoginForm({form}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const error = useSelector(state => state.error, error => error.message);
    console.log(error);
    if (user !== undefined && user.email !== '') {
        location.replace("/")
    }

    const handleSubmit = e => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    const {getFieldDecorator} = form;
    return (
        <LoginFormWrapper>
            <Layout>
                <Header>
                    <h1 className="login-header">Login To App</h1>
                </Header>
                <Content>
                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder="Username"
                                    onChange={e => setUsername(e.target.value)}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder="Password"
                                    onChange={e => setPassword(e.target.value)}
                                />,
                            )}
                        </Form.Item>
                        {error ? <div className="error-message">{error}</div> : ''}

                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                            <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => dispatch(loginRequestAction(username, password))}>
                                Log in
                            </Button>
                            Or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Mitrais ©2019 Created by Hoang Dao
                </Footer>
            </Layout>
        </LoginFormWrapper>
    );
}

export default Form.create()(LoginForm);