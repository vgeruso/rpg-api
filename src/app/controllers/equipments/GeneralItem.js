const mongoose = require('mongoose');
require('../../models/equipments/GeneralItem');

const GeneralItem = mongoose.model('GeneralItem');

module.exports = {
    async store (req, res) {
        const jason = req.body;
        const generalItem = await GeneralItem.create(jason);
        return res.json(generalItem);
    },

    async index (req, res) {
        const generalItems = await GeneralItem.find();
        return res.json(generalItems);
    },

    async show (req, res) {
        const _id = req.params.id;
        const generalItem = await GeneralItem.findOne({ _id: _id });
        return res.json(generalItem);
    }
};