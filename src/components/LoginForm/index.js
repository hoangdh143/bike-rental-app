import React, {useEffect, useState} from "react";
import {connect, useDispatch, useSelector, useStore} from 'react-redux';
import {LOG_IN_REQUEST} from "../../containers/LoginPage/constants";
import {loginRequestAction} from "../../containers/LoginPage/actions";


export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const error = useSelector(state => state.error, error => error.message);
    console.log(error);
    if (user !== undefined && user.email !== '') {location.replace("/")}

    return (
        <div name="login">
            {(error !== undefined && error !== '') ? error : ''}
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" value={username} onChange={e => setUsername(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input  type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type="submit" onClick={() => dispatch(loginRequestAction(username, password))}>Submit</button>
        </div>
    );
}

// export default connect()(LoginForm);