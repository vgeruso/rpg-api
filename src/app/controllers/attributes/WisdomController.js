const mongoose = require('mongoose');
require('../../models/attributes/Wisdom');

const Wisdom = mongoose.model('Wisdom');

module.exports = {
    async store (req, res) {
        const json = req.body;
        const wisdom = await Wisdom.create(json);
        return res.json(wisdom);
    },

    async index (req, res) {
        const wisdoms = await Wisdom.find();
        return res.json(wisdoms);
    },

    async show (req, res) {
        const _id = req.params.id;
        const wisdom = await Wisdom.findOne({_id: _id});
        return res.json(wisdom);
    }
};