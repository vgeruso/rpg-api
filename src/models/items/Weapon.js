/**
 * This is the model for the storage in "Weapon" collection in MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require for the dependecy of mongoose.

// Initialization of the Schema for the criation of model
const WeaponSchema = new mongoose.Schema({
    weapon: {
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
})

// Creation of the model
mongoose.model('Weapon', WeaponSchema)