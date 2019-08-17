const mongoose = require('mongoose');

const Spell = mongoose.model('Spell');

module.exports = {
    async index(req, res) {
        // TODO Create the process of find all Spells
    },

    async show(req, res) {
        // TODO Create the proccess findById for an Spell
    },

    async store(req, res) {
        const spell = await Spell.create(req.body);
        return res.json(spell);
    }
};