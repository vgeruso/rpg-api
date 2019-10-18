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
        if(generalItems.length === 0) {
            return res.status(404).send('No General items geristred');
        }

        return res.json(generalItems);
    },

    async show (req, res) {
        const _id = req.params.id;
        const generalItem = await GeneralItem.findOne({ _id: _id });
        if(generalItem == null) {
            return res.status(404).send('General Item not found');
        }

        return res.json(generalItem);
    },

    async update (req, res) {
        const _id = req.params.id;
        const json = req.body;
        const generalItemUpdated = await GeneralItem.updateOne({ _id: _id }, json);
        if(generalItemUpdated.n === 0) {
            return res.status(404).send('General item not found');
        }

        return res.send('General item modified');
    },

    async destroy (req, res) {
        const _id = req.params.id;
        const del = await GeneralItem.deleteOne({ _id: _id });
        if(del.n === 0) {
            return res.status(404).send('General item not found');
        }

        return res.send('Sucessfully deleted');
    }
};