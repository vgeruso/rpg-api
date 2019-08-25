/**
 * This is the model for the storage in "Class" collection in MongoDB.
 * @author Victor Geruso
 */
 const mongoose = require('mongoose'); // Require for the dependecy of mongoose.

// Initialization of the Schema for the criation of model
const ClassSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    levelBase: [
        {
            level: {
                type: Number
            },
            experience: {
                type: Number
            },
            lifeData: {
                type: Number
            },
            attackBase: {
                type: Number
            },
            protectionPlay: {
                type: Number
            }
        }
    ]
});

// Creation of the model
mongoose.model('Class', ClassSchema);