const mongoose = require('mongoose');

const Breed = mongoose.model('Breed');

module.exports = {
    async index(req, res) {
        // TODO Create the proccess of find all Breeds
    },

    async show(req, res) {
        // TODO Create the proccess of findById one Breed
    },

    async store(req, res) {
        const breed = await Breed.create(req.body);
        return res.json(breed);
    }
};