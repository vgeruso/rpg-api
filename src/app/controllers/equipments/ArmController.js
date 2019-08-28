const mongoose = require('mongoose');
require('../../models/equipments/Arm');

const Arm = mongoose.model('Arm');

module.exports = {
    async store (req, res) {
        const json = req.body;
        const arm = await Arm.create(json);
        return res.json(arm);
    },

    async index (req, res) {
        const arms = await Arm.find();
        return res.json(arms);
    },

    async show (req, res) {
        const _id = req.params.id;
        const arm = await Arm.findOne({ _id: _id });
        return res.json(arm);
    },
};