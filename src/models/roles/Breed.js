/**
 * This is the model for the storage in "Breed" collection in MongoDB.
 * @author Victor Geruso
 */
 const mongoose = require('mongoose') // Require for the dependecy of mongoose.

// Initialization of the Schema for the criation of model
const BreedSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    Adjustment: {
        type: Number,
        require: true
    },
    bonus: {
        type: Number
    },
    penality: {
        type: Number
    },
    lifeData: {
        type: String
    },
    movimentation: {
        type: Number
    },
    vision: {
        type: String
    },
    language: {
        type: String
    }
})

// Creation of the model
mongoose.model('Breed', BreedSchema)