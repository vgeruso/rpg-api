const mongoose = require('mongoose');
require('../../models/equipments/Magic');

const Magic = mongoose.model('Magic');

module.exports = {
    async store (req, res) {
        const json = req.body;
        const magic = await Magic.create(json);
        return res.json(magic);
    },

    async index (req, res) {
        const magics = await Magic.find();
        return res.json(magics);
    },

    async show (req, res) {
        const _id = req.params.id;
        const magic = await Magic.findOne({ _id: _id });
        return res.json(magic);
    }
};