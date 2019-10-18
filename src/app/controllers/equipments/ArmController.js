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
        if(arms.length === 0) {
            return res.status(404).send('No registred arms');
        }

        return res.json(arms);
    },

    async show (req, res) {
        const _id = req.params.id;
        const arm = await Arm.findOne({ _id: _id });
        if(arm == null) {
            return res.status(404).send('Arm not found');
        }

        return res.json(arm);
    },

    async update (req, res) {
        const _id = req.params.id;
        const json = req.body;
        const armUpdated = await Arm.updateOne({ _id: _id }, json);
        if(armUpdated.n === 0) {
            return res.status(404).send('Arm not found');
        }

        return res.send('Arm modfied');
    },

    async destroy (req, res) {
        const _id = req.params.id;
        const del = await Arm.deleteOne({ _id: _id });
        if(del.n === 0) {
            return res.status(404).send('Arm not found');
        }

        return res.send('sucessfully removed');
    }
};