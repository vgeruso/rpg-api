describe('the Inteligence CRUD operation', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV = "test" ? ".env.test" : ".env"
        });
        require('../../../src/db/config/database.js');
        require('../../../src/models/attributes/Intelligence');
    });
    
    test('Create Inteligence', async () => {
        const Intelligence = mongoose.model('Intelligence');
        await Intelligence.create({
            value: 1,
            numLanguages: 0,
            chanceLearnMagic: 0
        });
    });

    test('Find All Inteligences', async () => {
        const Intelligence = mongoose.model('Intelligence');
        const Intelligences = await Intelligence.find();
        _id = Intelligences[0]._id.toString();
        const IntelligencesLength = Intelligences.length;

        expect(IntelligencesLength).toBe(1);
    });
    
    test('Find Iteligence by id', async () => {
        const Intelligence = mongoose.model('Intelligence');
        const intelligence = await Intelligence.findOne({_id: _id});
        
        expect(intelligence.value).toBe(1);
    });

    test('Remove Iteligence by id', async () => {
        const Intelligence = mongoose.model('Intelligence');
        const del = await Intelligence.deleteOne({_id: _id});

        expect(del.deletedCount).not.toBeFalsy();
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});