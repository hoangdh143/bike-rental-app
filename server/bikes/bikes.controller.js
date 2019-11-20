const express = require('express');
const router = express.Router();
const bikeService = require('./bike.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/', update);
router.delete('/:id', deleteById);


module.exports = router;


function getAll(req, res, next) {
    bikeService.getAll(req.query.page, req.query.size)
        .then(bikes => res.json(bikes))
        .catch(err => next(err));
}

function getById(req, res, next) {
    bikeService.getById(req.params.id).then(bike => {console.log(bike);res.json(bike);}).catch(err => next(err));
}

function create(req, res, next) {
    const bike = req.body.bike;
    bikeService.create(bike).then(bike => res.json(bike)).catch(err => next(err));
}

function update(req, res, next) {
    const bike = req.body.bike;
    bikeService.update(bike).then(bike => res.json(bike)).catch(err => next(err));
}

function deleteById(req, res, next) {
    bikeService.delete(req.params.id).then(bike => res.json(bike)).catch(err => next(err));
}
