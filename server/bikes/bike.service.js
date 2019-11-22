const config = require('config.json');
const jwt = require('jsonwebtoken');
const bikes = require('./bikes');

module.exports = {
    getAll,
    getByCity,
    getById,
    create,
    update,
    deleteById

};

async function getAll(page, size) {
    const totalRecords = bikes.length;
    --page;
    return {bikes: bikes.slice(page*size, (page+1)*size), totalRecords};
}

async function getByCity(city, page, size) {
    const bikesByCity = bikes.filter(bike => bike.city.toLowerCase() === city.toLowerCase());
    const totalRecords = bikesByCity.length;
    --page;
    return {bikes: bikesByCity.slice(page*size, (page+1)*size), totalRecords};
}

async function getById(id) {
    const idx = bikes.findIndex(bike => bike.id === id.toString())
    return bikes[idx];
}

async function create(bike) {
    const id = bikes[bikes.length -1].id;
    bike.id = id;
    bikes.push(bike);
    return bike;
}

async function update(id, bike) {
    return bike;
}

async function deleteById(id) {
    const idx = bikes.findIndex(bike => bike.id === id.toString());
    const bike = bikes[idx];
    bikes.splice(idx, 1);
    return bike;
}

