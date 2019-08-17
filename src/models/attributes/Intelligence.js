/**
 * This is the model for the storage in "Intelligence" in MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require for the dependecy of mongoose

// Initialization of the Schema for the criation of model
const IntelligenceSchema = new mongoose.Schema({
    /**
     * Value of Intelligence randomly drawn by the
     * system getting value between 3 and 18.
     */
    value: {
        type: Number
    },
    numLanguages: {
        type: Number
    },
    chanceLearnMagic: {
        type: Number
    },
    additionalArcaneSpells: {
        type: String
    }
})

// Creation of the model
mongoose.model('Intelligence', IntelligenceSchema)