const mongoose = require('mongoose');
require('../../models/attributes/Dexterity');

const Dexterity = mongoose.model('Dexterity');

module.exports = {
    async store (req, res) {
        const json = req.body;
        const dexterity = await Dexterity.create(json);
        return res.json(dexterity);
    },

    async index (req, res) {
        const dexterities = await Dexterity.find();
        return res.json(dexterities);
    },

    async show (req, res) {
        const _id = req.params.id;
        const dexterity = await Dexterity.findOne({_id: _id});
        return res.json(dexterity);
    }
};