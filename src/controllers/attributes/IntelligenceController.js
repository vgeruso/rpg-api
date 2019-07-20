const mongoose = require('mongoose')

const Intelligence = mongoose.model('Intelligence')

module.exports = {
    async index(req, res) {
        // TODO Create the proccess of find all Charisma types
    },

    async show(req, res) {
        // TODO Create the proccess findById for an Charisma
    },

    async store(req, res) {
        const intelligence = await Intelligence.create(req.body)
        return res.json(intelligence)
    }
}