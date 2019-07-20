/**
 * This is the model for the storage in "Constituition" in MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require for the dependecy of mongoose

// Initialization of the Schema for the criation of model
const ConstituitionSchema = new mongoose.Schema({
    /**
     * Value of Constituition randomly drawn by the
     * system getting value between 3 and 18.
     */
    value: {
        type: Number
    },
    adjustiment: {
        type: Number
    },
    chanceResurrection: {
        type: Number
    }
})

// Creation of the model
mongoose.model('Constituition', ConstituitionSchema)