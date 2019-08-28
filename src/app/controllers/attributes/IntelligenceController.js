const mongoose =  require('mongoose');
require('../../models/attributes/Intelligence');

const Intelligence = mongoose.model('Intelligence');

module.exports = {
    async store (req, res) {
        const json = req.body;
        const intelligence = await Intelligence.create(json);
        return res.json(intelligence);
    },

    async index (req, res) {
        const intelligences = await Intelligence.find();
        return res.json(intelligences);
    },

    async show (req, res) {
        const _id = req.params.id;
        const intelligence = await Intelligence.findOne({_id: _id});
        return res.json(intelligence);
    }
};