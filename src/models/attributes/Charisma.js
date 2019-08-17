/**
 * This is the model for the storage in "Charisma" Collection in MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require for the dependecy of mongoose

// Initialization of the Schema for the criation of model
const CharismaSchema = new mongoose.Schema({
    /**
     * Value of Charisma randomly drawn by the
     * system getting value between 3 and 18.
     */
    value: {
        type: Number
    },
    numFollowers: {
        type: Number
    },
    adjustment: {
        type: Number
    },
    numUndead: {
        type: String
    }
})

// Creation of the model
mongoose.model('Charisma', CharismaSchema)