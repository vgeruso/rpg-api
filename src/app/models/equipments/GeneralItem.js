/**
 * This is the model for the storage in "General Items" Collection in MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose');

const GeneralItemScheme = new mongoose.Schema({
    item: {
        type: String
    },
    description: {
        type: String
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

mongoose.model('GeneralItem', GeneralItemScheme);
