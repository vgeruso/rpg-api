/**
 * This is the model for the storage in "Spell" collection in MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose'); // Require for the dependecy of mongoose

// Initialization of the Schema for the criation of model
const MagicSchema = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    description: {
        type: String
    },
    duration: {
        type: String
    },
    damage: {
        type: Number
    },
    reach: {
        type: Number
    }
});

// Creation of the model
mongoose.model('Magic', MagicSchema);