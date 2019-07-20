const mongoose = require('mongoose')

const Charisma = mongoose.model('Charisma')

module.exports = {
    async index(req, res) {
        // TODO Create the proccess of find all Charisma types
    },

    async show(req, res) {
        // TODO Create the proccess findById for an Charisma
    },

    async store(req, res) {
        const charisma = await Charisma.create(req.body)
        return res.json(charisma)
    }
}