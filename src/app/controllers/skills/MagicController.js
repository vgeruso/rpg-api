const mongoose = require('mongoose');
require('../../models/skills/Magic');

const Magic = mongoose.model('Magic');

module.exports = {
    async store (req, res) {
        const json = req.body;
        const magic = await Magic.create(json);
        return res.json(magic);
    },

    async index (req, res) {
        const magics = await Magic.find();
        if(magics.length === 0) {
            return res.status(404).send('No Magics Registred');
        }

        return res.json(magics);
    },

    async show (req, res) {
        const _id = req.params.id;
        const magic = await Magic.findOne({ _id: _id });
        if(magic == null) {
            return res.status(404).send('Magic not found');
        }

        return res.json(magic);
    },

    async update (req, res) {
        const _id = req.params.id;
        const json = req.body;
        const magicUpdated = await Magic.updateOne({ _id: _id }, json);
        if(magicUpdated.n === 0) {
            return res.status(404).send('Magic not found');
        }

        return res.send('Magic modified');
    },

    async destroy (req, res) {
        const _id = req.params.id;
        const del = await Magic.deleteOne({ _id: _id });
        if(del.n === 0) {
            return res.status(404).send('Magic not found');
        }
        
        return res.send('Sucessfully removed');
    }
};