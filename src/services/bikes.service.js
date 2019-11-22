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

// async function getAll(page = 0, size = 10) {
//     const requestOptions = {
//         headers: authHeader(),
//         params: {page, size}
//     };
//
//     const {data} = await axios.get(`${config.apiUrl}/bikes`, requestOptions);
//     return data;
// }

async function getAll(page = 0, size = 10, city= "") {
    const requestOptions = {
        headers: authHeader(),
        params: {city, page, size}
    };

    const {data} = await axios.get(`${config.apiUrl}/bikes`, requestOptions);
    return data;
}

function getById(id) {

}

function create(bike) {

}

function update(id, bike) {

}

function deleteById(id) {

}