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
    /**
     * Defense bonus of item
     * for defense items
     * 
     * This property is used for the calculate of armor class.
     */
    defenseBonus: {
        type: Number
    },
    /**
     * Rdution Moviment that the item can cause in character.
     * for defense items.
     */
    reductionMov: {
        type: Number
    },
    price: {
        type: Number
    },
    weight: {
        type: Number
    }
});

// Creation of the model
mongoose.model('DefenseItem', DefenseItemSchema);