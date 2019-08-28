const mongoose = require('mongoose');
require('../../models/equipments/DefenseItem');

const DefenseItem = mongoose.model('DefenseItem');

module.exports = {
    async store (req, res) {
        const json = req.body;
        const defenseItem = await DefenseItem.create(json);
        return res.json(defenseItem);
    },

    async index (req, res) {
        const defenseItems = await DefenseItem.find();
        return res.json(defenseItems);
    },

    async show (req, res) {
        const _id = req.params.id;
        const defenseItem = await DefenseItem.findOne({ _id: _id });
        return res.json(defenseItem);
    }
};