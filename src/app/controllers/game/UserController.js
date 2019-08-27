const mongoose = require('mongoose');
require('../../models/game/User');

const User = mongoose.model('User')

module.exports = {
    async store (req, res) {
        const form = req.body;
        console.log();
        const user = await User.create(form);
        return res.json(user);
    },

    // TODO Create others operations
};