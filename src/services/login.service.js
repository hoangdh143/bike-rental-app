import config from 'config';
import { authHeader } from '../utils/auth-header';
import axios from "axios";

export const userService = {
    login,
    logout,
    getAll,
    getCurrentUser
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        username: username,
        password: password
    };

    return new Promise(function(resolve, reject) {
        axios.post(`${config.apiUrl}/users/authenticate`, requestOptions)
            .then(response => resolve(response.data))
            .catch(error =>  reject(error.response.data))
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getCurrentUser() {
    const user = localStorage.getItem('user');
    console.log(JSON.parse(user));
    return JSON.parse(user);
}