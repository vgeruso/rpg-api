const mongoose =  require('mongoose');

const Character = mongoose.model('Character');

module.exports = {
    async index(req, res) {
        // TODO Create the proccess of find all Characters for UserId
    },

    async show(req, res) {
        // TODO Create the proccess of findById one Character
    },

    async store(req, res) {
        const CharacterData = req.body;
        // TODO create automatic generation of data for attributes
        //const Character = await Character.create()

        return res.json(CharacterData);
    }
};