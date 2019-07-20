const mongoose = require('mongoose')

const Users = mongoose.model('User')

module.exports = {
    async index(req, res) {
        const users = await Users.find()
        return res.json(users)
    },

    async show(req, res) {
        const user = await Users.findById(req.params.id)
        return res.json(user)
    },

    async store(req, res) {
        const user = await Users.create(req.body)
        return res.json(user)
    },

    async update(req, res) {
        const user = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(user)
    },

    async destroy(req, res) {
        await Users.findByIdAndRemove(req.params.id)
        return res.sent('Usuario deletado com sucesso!')
    }
}