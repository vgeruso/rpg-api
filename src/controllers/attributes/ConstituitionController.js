const mongoose = require('mongoose')

const Constituition = mongoose.model('Constituition')

module.exports = {
    async index(req, res) {
        // TODO Create the proccess of find all Constituition types
    },

    async show(req, res) {
        // TODO Create the proccess findById for an Constituition
    },

    async store(req, res) {
        const constituition = await Constituition.create(req.body)
        return res.json(constituition)
    }
}