/**
 * This is the model for the storage in "Character" collection in MongoDB.
 * @author Victor Geruso
 */
const mongoose = require('mongoose') // Require for the dependency of mongoose
const ObjectId = mongoose.Schema.Types.ObjectId // Storage the data type ObjectId in a constant

// Initialization of the Schema for the criation of model
const CharacterSchema = new mongoose.Schema({
    /**
     * Character name
     */
    name: {
        type: String,
        required: true
    },
    /**
     * Character breed
     * 
     * has as main based 4 breeds:
     * Human, Dwarf, Elf and Halfling
     * 
     * P.S.: will have other breeds Added.
     */
    breed: {
        type: String,
        required: true
    },
    /**
     * Character class
     * 
     * has as main based 4 classes:
     * Wizard, Clegyman, Man in arms and Thief
     * 
     * Obs.: each class between 3 and 4 subclasses
     * each in accordance with the alignment
     */
    class: {
        type: String,
        required: true
    },
    /**
     * Character alignment
     * 
     * there are 3 alignments:
     * Order, Neutral, Chaotic
     * 
     * These alignments define the future of the
     * character in several aspects, during the
     * game and the definition of the subclass
     * defined after level 5 regardless of breed
     * of the same.
     */
    alignment: {
        type: String,
        required: true
    },
    /**
     * Character level according to experience,
     * each class has this levels of experience for
     * evolution, the level determines how strong the
     * character is for the execution of the game.
     */
    level: {
        type: Number,
        default: 1
    },
    /**
     * The experience is gained from each character's achivement
     * next ot his group or even alone, he is accoumulated, and
     * determines the levy of each character according to this
     * class, it is with the experience that is determined the
     * evolution of the same.
     */
    experience: {
        type: Number,
        default: 0
    },
    /**
     * isHardcore is a property that deteremines the
     * difficultly of the game, if the same is true, 
     * the game is harder then normal:
     * 
     * Hardcore: the user can not delete this type of character,
     * and when he dies he will no longer have access.
     * 
     * Normal: the user can delete this type of character the
     * moment he wants, in case he dies he can relive the same
     * starting the whole game again, with the level and the
     * initial numbers of creation.
     */
    isHardcore: {
        type: Boolean,
        default: false
    },
    /**
     * The attributes property is an array of Objects,
     * where each item will be related to a specific
     * attribute model, this attributes determine many
     * characteristics of the character, such as physical,
     * intellectual, etc.
     */
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
    /**
     * This proprety is an object that stores the sub-attirbutes
     * that are calculated from the information gathered from the
     * attributes.
     */
    subAttributes: {
        /**
         * The life points determine how much vitality
         * the character has before the enemy or challenge.
         * 
         * This property is defined by calculation:
         * life points = life data (defined by class) + constituition adjustiment
         */
        lifePoints: {
            type: Number
        },
        /**
         * The attack bonus gives the character
         * the ability to attack and may have an
         * auxiliary force in cercain attacks.
         * 
         * This property is defined by calculation:
         * attack bonus = streght adjustment + dexterity adjustment + class adjustment + breed adjustment
         */
        attackBonus: {
            type: Number
        },
        /**
         * The armor class determines how much the
         * character can defend against a physical
         * attack, if the calculo exceeds this
         * value the attack reaches the life points
         * reducing them.
         * 
         * This Property is defined by calculation:
         * armor class = 10 + dexterity adjustment +  Streght adjustment + breed adjusdment +  equipment adjustment(As a shield and or armor)
         */
        armorClass: {
            type: Number
        },
        /**
         * The protection play determines how much the character
         * can defend of an planned attack  ataque previsto in
         * an melee fight for exemple.
         * 
         * This property is defined by calculation:
         * protection play = dexterity adjustment + constituition adjustment + wisdom adjustment
         */
        protectionPlay: {
            type: Number
        }
    },
    /**
     * This array determines which languages the character know
     * desides his native, depending on the intelligence that he
     * owns.
     */
    languages: [
        {
            type: String
        }
    ],
    /**
     * The cash determines how many pieces of gold the character will have,
     * this cash will be randomly, ranging from 30 to 180 pieces of gold.
     */
    cash: {
        type: Number
    },
    /**
     * This property is an array that determaines how many pieces of
     * equipment and which character you have for your journey, having
     * a capacity of up to 10 items.
     */
    equipment: [
        {
            type: ObjectId,
            ref: 'Equipment'
        }
    ],
    /**
     * This Property is an array that store the cicle of spell that the
     * character of class Wizard or clegyman has access for use.
     */
    acessMagic: [
        {
            type: String
        }
    ],
    /**
     * This property the library of the clegyman or wizard class character
     * has wich spaells he knows to use with a capacity of 16 spells.
     */
    spells: [
        {
            type: ObjectId,
            ref: 'Spell'
        }
    ],
    /**
     * This property is an array that store which undead the character can
     * cast giving the player the ability to choose which one, the amount
     * is determined by the charisma attribute.
     */
    expelUndead: [
        {
            type: String
        }
    ],
    /**
     * This property determines the rouge talents the character knows, the
     * amount is determines by the Dexterity.
     */
    rougeTalents: [
        {
            type: String
        }
    ],
    /**
     * This property is an array that store the Weapons and spells the
     * character will use for determines,  battles and or adventure,
     * having the ability for 3 weapons or apells.
     */
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
})

// Creation of the model
mongoose.model('Character', CharacterSchema)