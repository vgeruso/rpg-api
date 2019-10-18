/**
 * This is the model for the storage in "Breed" collection in MongoDB.
 * @author Victor Geruso
 */
 const mongoose = require('mongoose'); // Require for the dependecy of mongoose.

// Initialization of the Schema for the criation of model
const BreedSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    bonus: {
        numBon: {
            type: Number
        },
        description: {
            type: String
        }
    },

    penality: {
        numPen: {
            type: Number
        },
        description: {
            type: String
        }
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
    
    mainLanguage: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

// Creation of the model
mongoose.model('Breed', BreedSchema);