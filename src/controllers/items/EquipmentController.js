const mongoose = require('mongoose');

const Equipment = mongoose.model('Equipment');

module.exports = {
    async index(req, res) {
        // TODO Create the process of find all Equipments
    },

    async show(req, res) {
        // TODO Create the proccess findById for an Equipment
    },

    async store(req, res) {
        const equipment = await Equipment.create(req.body);
        return res.json(equipment);
    }
};