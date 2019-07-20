const mongoose = require('mongoose')

const Dexterity = mongoose.model('Dexterity')

module.exports = {
    async index(req, res) {
        // TODO Create the proccess of find all Charisma types
    },

    async show(req, res) {
        // TODO Create the proccess findById for an Charisma
    },

    async store(req, res) {
        const dexterity = await Dexterity.create(req.body)
        return res.json(dexterity)
    }
}