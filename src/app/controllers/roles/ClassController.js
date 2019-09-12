const mongoose = require('mongoose');
require('../../models/roles/Class');

const Class = mongoose.model('Class');

module.exports = {
    async store (req, res) {
        const json = req.body;
        const newClass = await Class.create(json);
        return res.json(newClass);
    },

    async index (req, res) {
        const classes = await Class.find();

        if(classes.length == 0) {
            return res.send('No registred Classes');
        }

        return res.json(classes);
    },

    async show (req, res) {
        const _id = req.params.id;
        const classFinded = await Class.findOne({ _id: _id });

        if(classFinded === null) {
            return res.status(404).send('Class not found');
        }

        return res.json(classFinded);
    }
};