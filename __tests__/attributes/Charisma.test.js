describe('the charisma CRUD operations', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV = "test" ? ".ent.test" : ".env"
        });
        require('../../src/db/config/database.js');
        require('../../src/models/attributes/Charisma');
    });

    test('create charisma', async () => {
        const Charisma = mongoose.model('Charisma');
        await Charisma.create({
            value: 1,
            numFollowers: 0,
            adjustment: -25,
            numUndead: '0'
        });
    });

    test('Find All charismas', async () => {
        const Charisma = mongoose.model('Charisma');
        const charismas = await Charisma.find();
        _id = charismas[0]._id.toString();
        const charismasLength = charismas.length;

        expect(charismasLength).toBe(1);
    });

    test('Find charisma by id', async () => {
        const Charisma = mongoose.model('Charisma');
        const charisma = await Charisma.findOne({_id: _id});

        expect(charisma.value).toBe(1);
    });

    test('Remove charisma by id', async () => {
        const Charisma = mongoose.model('Charisma');
        const del = await Charisma.deleteOne({_id: _id});

        expect(del.deletedCount).not.toBeFalsy();
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});