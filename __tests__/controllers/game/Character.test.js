describe('the character CRUD operations', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
        });
        require('../../../src/db/config/database.js');
        require('../../../src/models/game/Character');
    });

    test('create character', async () => {
        const Character = mongoose.model('Character');
        await Character.create({
            name: 'Bilbo Bolseiro',
            user: '',//TODO Depends of populate
            breed: '',//TODO Depends of populate
            class: '', //TODO Depends of populate
            alignment: 'Ordem',
            level: 1,
            experience: 0,
            isHardcore: false,
            attributes: { 
                //TODO Depends of populate
                Strength: '',
                Intelligence: '',
                Wisdom: '',
                Dexterity: '',
                Constituition: '',
                Charisma: ''
            },
            subAtributes: {
                lifePoints: {
                   //TODO Depends of atributes 
                },
                attackBonus: {
                    //TODO Depends of atributes
                },
                armorClass: {
                    //TODO Depends of atributes
                },
                protectionPlay: {
                    //TODO Depends of atributes
                }
            },
            languages: [
                'Halflings',
                'common'
            ],
            cash: 2000,
            equipment: [
                //TODO Depends of populate
            ],
            acessMagic: [],
            spells: [
                //TODO Depends of populate
            ],
            kickOutUndead: [],
            rougeTalents: [
                'clib',
                'hide in the shadows'
            ],
            weaponsAttacks: [
                //TODO Depends of populate
            ],
        });
    });

    test('find all charecters', async () => {
        const Character = mongoose.model('Character');
        const characters = Character.find();
        _id = characters[0]._id.toString();
        const charactersLength = characters.length;

        expect(charactersLength).toBe(1);
    });

    test('find character find by id', async () => {
        const Character = mongoose.model('Character');
        const character = Character.findOne({_id: _id});
        
        expect(character.name).toBe('Bilbo Bolseiro');
    });

    test('remove character by id', async () => {
        const Character = mongoose.model('Character');
        const del = Character.deleteOne({_id: _id});
        
        expect(del.deletedCount).not.toBeFalsy();
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});