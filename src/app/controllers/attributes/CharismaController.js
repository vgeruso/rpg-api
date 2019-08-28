const mongoose = require('mongoose');
require('../../models/attributes/Charisma');

const Charisma = mongoose.model('Charisma');

module.exports = {
    async store (req, res) {
        const json = req.body;
        const charisma = await Charisma.create(json);
        return res.json(charisma);
    },

    async index (req, res) {
        const charismas = await Charisma.find();
        return res.json(charismas);
    },

    async show (req, res) {
        const _id = req.params.id;
        const charisma = await Charisma.findOne({_id: _id});
        return res.json(charisma);
    }
};