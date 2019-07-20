const mongoose = require('mongoose')

const Strength = mongoose.model('Strength')

module.exports = {
    async index(req, res) {
        // TODO Create the proccess of find all Charisma types
    },

    async show(req, res) {
        // TODO Create the proccess findById for an Charisma
    },

    async store(req, res) {
        const strength = await Strength.create(req.body)
        return res.json(strength)
    }
}