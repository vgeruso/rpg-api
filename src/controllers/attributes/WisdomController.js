const mongoose = require('mongoose')

const Wisdom = mongoose.model('Wisdom')

module.exports = {
    async index(req, res) {
        // TODO Create the proccess of find all Charisma types
    },

    async show(req, res) {
        // TODO Create the proccess findById for an Charisma
    },

    async store(req, res) {
        const wisdom = await Wisdom.create(req.body)
        return res.json(wisdom)
    }
}