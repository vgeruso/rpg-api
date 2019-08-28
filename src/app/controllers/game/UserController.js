const mongoose = require('mongoose');
require('../../models/game/User');

const User = mongoose.model('User')

module.exports = {
    async store (req, res) {
        const json = req.body;
        const user = await User.create(json);
        return res.json(user);
    },

    async index (req, res) {
        const users = await User.find();
        return res.json(users);
    },

    async show (req, res) {
        const _id = req.params.id;
        const user = await User.findOne({ _id: _id });
        return res.json(user);
    },

    async update (req, res) {
        const _id = req.params.id;
        const json = req.body;
        const userUpdated = await User.updateOne({ _id: _id }, json);
        return res.json(userUpdated);
    },

    async destroy (req, res) {
        const _id = req.params.id;
        await User.deleteOne({ _id: _id });
        return res.send('Removido com sucesso');
    }
};