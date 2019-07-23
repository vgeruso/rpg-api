const mongoose = require('mongoose')

const Weapon = mongoose.model('Weapon')

module.exports = {
    async index(req, res) {
        // TODO Create the prcess of find all Weapon
    },

    async show(req, res) {
        // TODO Create the proccess findById for an Weapon
    },

    async store(req, res) {
        const weapon = await Weapon.create(req.body)
        return res.json(weapon)
    }
}