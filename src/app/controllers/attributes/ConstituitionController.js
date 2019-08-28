const mongoose = require('mongoose');
require('../../models/attributes/Constituition');

const Constituition = mongoose.model('Constituition');

module.exports = {
    async store (req, res) {
        const json = req.body;
        const constituition = await Constituition.create(json);
        return res.json(constituition);
    },

    async index (req, res) {
        const constituitions = await Constituition.find();
        return res.json(constituitions);
    },

    async show (req, res) {
        const _id = req.params.id;
        const constituition = await Constituition.findOne({_id: _id});
        return res.json(constituition);
    }
};