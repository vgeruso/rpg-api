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
        if (users.length === 0) {
            return res.status(404).send('No registred users');
        }
        return res.json(users);
    },

    async show (req, res) {
        const _id = req.params.id;
        const user = await User.findOne({ _id: _id });
        if (user == null) {
            return res.status(404).send('User not found');
        }
        return res.json(user);
    },

    async update (req, res) {
        const _id = req.params.id;
        const json = req.body;
        const userUpdated = await User.updateOne({ _id: _id }, json);
        if(userUpdated.n === 0) {
            return res.status(404).send('User not found');
        }
        return res.send('User modified');
    },

    async destroy (req, res) {
        const _id = req.params.id;
        const del = await User.deleteOne({ _id: _id });
        if(del.n === 0) {
            return res.status(404).send('User not found');
        }
        return res.send('sucessfully removed');
    }
};