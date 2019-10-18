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
        if(defenseItems.length === 0) {
            return res.status(404).send('No registred DefenseItems');
        }

        return res.json(defenseItems);
    },

    async show (req, res) {
        const _id = req.params.id;
        const defenseItem = await DefenseItem.findOne({ _id: _id });
        if(defenseItem == null) {
            return res.status(404).send('Defense item not found');
        }

        return res.json(defenseItem);
    },

    async update (req, res) {
        const _id = req.params.id;
        const json = req.body;
        const defenseItemUpdated = await DefenseItem.updateOne({ _id: _id }, json);
        if(defenseItemUpdated.n === 0) {
            return res.status(404).send('Defense item not found');
        }

        return res.send('Defense Item modified');
    },

    async destroy(req, res) {
        const _id = req.params.id;
        const del = await DefenseItem.deleteOne({ _id: _id });
        if(del.n === 0) {
            return res.status(404).send('Defense item not found');
        }

        return res.send('Sucessfully removed');
    }
};