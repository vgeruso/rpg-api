const mongoose = require('mongoose');
require('../../models/roles/Breed');

const Breed = mongoose.model('Breed');

module.exports = {
    async store (req, res) {
        const json = req.body;
        const breed = await Breed.create(json);
        return res.json(breed);
    },

    async index (req, res) {
        const breeds = await Breed.find();

        if(breeds.length == 0) {
            return res.send('No registred breeds');
        }

        return res.json(breeds);
    },

    async show (req, res) {
        const _id = req.params.id;
        const breed = await Breed.findOne({ _id: _id });

        if(breed === null) {
            return res.status(404).send('Breed not found');
        }

        return res.json(breed);
    },
};