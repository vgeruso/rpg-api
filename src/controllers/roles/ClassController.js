const mongoose = require('mongoose')

const ClassModel = mongoose.model('Class')

module.exports = {
    async index(req, res) {
        // TODO Create the proccess of find all Class
    },

    async show(req, res) {
        // TODO Create the proccess of findById one Class
    },

    async store(req, res) {
        const classJson = await ClassModel.create(req.body)
        return res.json(classJson)
    }
}