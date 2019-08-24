/**
 * This is the model for the storage in "Character" collection in MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose'); // Require for the dependency of mongoose
const ObjectId = mongoose.Schema.Types.ObjectId; // Storage the data type ObjectId in a constant

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    user: {
        type: ObjectId,
        ref: 'User'
    },

    breed: {
        type: String,
        required: true
    },

    class: {
        type: String,
        required: true
    },
    
    alignment: {
        type: String,
        required: true
    },
    
    level: {
        type: Number,
        default: 1
    },
    
    experience: {
        type: Number,
        default: 0
    },
    
    isHardcore: {
        type: Boolean,
        default: false
    },
    
    attributes: [
        {
            type: ObjectId,
            ref: 'Strength'
        },
        {
            type: ObjectId,
            ref: 'Intelligence'
        },
        {
            type: ObjectId,
            ref: 'Wisdom'
        },
        {
            type: ObjectId,
            ref: 'Dexterity'
        },
        {
            type: ObjectId,
            ref: 'Constituition'
        },
        {
            type: ObjectId,
            ref: 'Charisma'
        }
    ],
    
    subAttributes: {
        
        lifePoints: {
            type: Number
        },
        
        attackBonus: {
            type: Number
        },
        
        armorClass: {
            type: Number
        },
        
        protectionPlay: {
            type: Number
        }
    },
    
    languages: [
        {
            type: String
        }
    ],
    
    cash: {
        type: Number
    },
    
    equipment: [
        {
            type: ObjectId,
            ref: 'Equipment'
        }
    ],
    
    acessMagic: [
        {
            type: String
        }
    ],
    
    spells: [
        {
            type: ObjectId,
            ref: 'Spell'
        }
    ],
    
    expelUndead: [
        {
            type: String
        }
    ],
    
    rougeTalents: [
        {
            type: String
        }
    ],
    
    weaponsAttacks: [
        {
            type: ObjectId,
            ref: 'Magic'
        },
        {
            type: ObjectId,
            ref: 'Weapons'
        }
    ]
});

// Creation of the model
mongoose.model('Character', CharacterSchema);