/**
 * This is the model for the storage in "User" collection in MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose'); // Require for the dependecy of mongoose
const ObjectId = mongoose.Schema.Types.ObjectId; // Storage the data type ObjectId a constant

// Initialization of the Schema for the criation of model
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    characters:  [
        {
            type: ObjectId,
            ref: 'Character'
        }
    ]
});

// Creation of the model
mongoose.model('User', UserSchema);