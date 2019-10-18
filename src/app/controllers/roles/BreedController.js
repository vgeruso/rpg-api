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
            return res.status(404).send('No registred breeds');
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

    async update (req, res) {
        const _id = req.params.id;
        const json = req.body;
        const breedUpdated = await Breed.updateOne({ _id: _id }, json);
        if(breedUpdated.n === 0) {
            return res.status(404).send('Breed not found');
        }

        return res.send('Breed modified');
    },

    async destroy (req, res) {
        const _id = req.params.id;
        const del = await Breed.deleteOne({ _id: _id });
        if(del.n === 0) {
            return res.status(404).send('Breed not found');
        }

        return res.send('sucessfully removed');
    }
};