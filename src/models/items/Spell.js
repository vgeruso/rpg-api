/**
 * This is the model for the storage in "Spell" collection in MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require for the dependecy of mongoose

// Initialization of the Schema for the criation of model
const SpellSchema = new mongoose.Schema({
    /**
     * The type of Spell
     * There are two types:
     * Arcane and Divine
     * 
     * Arcane: used by Wizards.
     * Divine: used by clagyman.
     */
    type: {
        type: String
    },
    duration: {
        type: Number
    },
    damage: {
        type: Number
    },
    reach: {
        type: Number
    }
})

// Creation of the model
mongoose.model('Spell', SpellSchema)