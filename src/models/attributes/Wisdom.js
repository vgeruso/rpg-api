/**
 * This is the model for the storage in "Wisdom" in MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require for the dependecy of mongoose

// Initialization of the Schema for the criation of model
const WisdomSchema = new mongoose.Schema({
    /**
     * Value of Wisdom randomly drawn by the
     * system getting value between 3 and 18.
     */
    value: {
        type: Number
    },
    adjustment: {
        type: Number
    },
    additionalDivineSpells: {
        type: String
    }
})

// Creation of the model
mongoose.model('Wisdom', WisdomSchema)