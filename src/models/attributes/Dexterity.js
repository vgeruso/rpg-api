/**
 * This is the model for the storage in "Dexterity" Collection in MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require for the dependecy of mongoose

// Initialization of the Schema for the criation of model
const DexteritySchema = new mongoose.Schema({
    /**
     * Value of dexterity radomly drawn by the system
     * getting value between 3 and 18.
     */
    value: {
        type: Number
    },
    adjustment: {
        type: Number
    },
    LocateDsarmTraps: {
        type: Number
    },
    movQuietlyOpenClose: {
        type: Number
    },
    hideShadowPut: {
        type: Number
    }
})

// Creation of the model
mongoose.model('Dexterity', DexteritySchema)