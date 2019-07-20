const mongoose =  require('mongoose')

const Character = mongoose.model('Character')

module.exports = {
    async store(req, res) {
        const CharacterData = req.body
        // TODO create automatic generation of data for attributes
        //const Character = await Character.create()

        return res.json(CharacterData)
    }
}