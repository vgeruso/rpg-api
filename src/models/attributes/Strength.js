/**
 * This is the model for the storage in "Strength" collection in MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require for the dependecy of mongoose

// Initialization of the Schema for the criation of model
const StrengthSchema = new mongoose.Schema({
    /**
     * Value of Strength randomly drawn by the
     * system getting value between 3 and 18.
     */
    value: {
        type: Number
    },
    adjustment: {
        type: Number
    }
})

// Creation of the model
mongoose.model('Strength', StrengthSchema)