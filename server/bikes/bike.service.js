const config = require('config.json');
const jwt = require('jsonwebtoken');
const imageUrl = 'https://auto.ndtvimg.com/bike-images/colors/yamaha/fz-s-v20-fi/yamaha-fz-s-v20-fi-lightning-cyan.webp?v=31';
const bike = (id, location, model, image, description) => {return {id, location, model, image, description};}
const bikes = [
    bike('1', 'Hanoi', 'Honda', imageUrl, 'Some description'),
    bike('2', 'HCM', 'Suzuki', imageUrl, 'Some description'),
    bike('3', 'Danang', 'Alpha', imageUrl, 'Some description'),
];

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById

};

async function getAll(page, size) {
    --page;
    return bikes.slice(page*size, (page+1)*size);
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

