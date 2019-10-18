/**
 * This is the model for the storage in "Defense Items" Collection in MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose'); // Require for the dependency of mongoose

// Initialization of the Schema for the criation of model
const DefenseItemSchema = new mongoose.Schema({
    item: {
        type: String
    },
    defenseBonus: {
        type: Number
    },
    reductionMov: {
        type: Number
    },
    price: {
        type: Number
    },
    weight: {
        type: Number
    }
}, {
    timestamps: true
});

// Creation of the model
mongoose.model('DefenseItem', DefenseItemSchema);