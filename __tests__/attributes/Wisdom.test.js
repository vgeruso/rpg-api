describe('the Wisdom CRUD operations', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV = "test" ? ".env.test" : ".env"
        });
        require('../../src/db/config/database.js');
        require('../../src/models/attributes/Wisdom');
    });

    test('Create Wisdom', async () => {
        const Wisdom = mongoose.model('Wisdom');
        await Wisdom.create({
            value: 1,
            adjustment: -5
        });
    });

    test('Find all Wisdoms', async () => {
        const Wisdom = mongoose.model('Wisdom');
        const wisdons = await Wisdom.find();
        _id = wisdons[0]._id.toString();
        const wisdonsLength = wisdons.length;

        expect(wisdonsLength).toBe(1);
    });

    test('Find Wisdom by id', async () => {
        const Wisdom = mongoose.model('Wisdom');
        const wisdom = await Wisdom.findOne({_id: _id});

        expect(wisdom.value).toBe(1);
    });
    
    test('Remove Wisdom by id', async () => {
        const Wisdom = mongoose.model('Wisdom');
        const del = await Wisdom.deleteOne({_id: _id});

        expect(del.deletedCount).not.toBeFalsy();
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});