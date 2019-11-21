import config from 'config';
import { authHeader } from '../utils/auth-header';
import axios from "axios";

export const bikeService = {
    getAll,
    getById,
    create,
    update,
    deleteById,
};

function getAll(page = 0, size = 10) {
    const requestOptions = {
        headers: authHeader(),
        params: {page, size}
    };

    return axios.get(`${config.apiUrl}/bikes`, requestOptions).then(response => response.data);

}

function getById(id) {

}

function create(bike) {

}

function update(id, bike) {

}

function deleteById(id) {

}