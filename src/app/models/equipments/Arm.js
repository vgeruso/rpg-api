/**
 * This is the model for the storage in "Weapon" collection in MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose'); // Require for the dependecy of mongoose.

// Initialization of the Schema for the criation of model
const ArmSchema = new mongoose.Schema({
    arm: {
        type: String
    },
    size: {
        type: String
    },
    damage: {
        type: String
    },
    reach: {
        type: String
    },
    initiative: {
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
mongoose.model('Arm', ArmSchema);