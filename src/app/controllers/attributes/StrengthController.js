const mongoose = require('mongoose');
require('../../models/attributes/Strength');

const Strength = mongoose.model('Strength');

module.exports = {
    async store (req, res) {
        const json = req.body;
        const strength = await Strength.create(json);
        return res.json(strength);
    },

    async index (req, res) {
        const strengths = await Strength.find();
        return res.json(strengths);
    },

    async show (req, res) {
        const _id = req.params.id;
        const strength = await Strength.findOne({_id: _id});
        return res.json(strength);
    }
};