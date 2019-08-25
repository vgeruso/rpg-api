describe('the constituidion CRUD operations', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV = "test" ? ".env.test" : ".env"
        });
        require('../../../src/db/config/database.js');
        require('../../../src/models/attributes/Constituition');
    });

    test('Create constituition', async () => {
        const Constituition = mongoose.model('Constituition');
        await Constituition.create({
            value: 1,
            adjustment: -5,
            chanceResurretion: 0
        });
    });

    test('Find All constituitions', async () => {
        const Constituition = mongoose.model('Constituition');
        const constituitions = await Constituition.find();
        _id = constituitions[0]._id.toString();
        const constituitionsLength = constituitions.length;

        expect(constituitionsLength).toBe(1);
    });

    test('Find constituition by id', async () => {
        const Constituition = mongoose.model('Constituition');
        const constituition = await Constituition.findOne({_id: _id});

        expect(constituition.value).toBe(1);
    });

    test('Remove constituition by id', async () => {
        const Constituition = mongoose.model('Constituition');
        const del = await Constituition.deleteOne({_id: _id});

        expect(del.deletedCount).not.toBeFalsy();
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});