describe('the Dexterity CRUD operations', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV = "test" ? ".env.test" : ".env"
        });
        require('../../../src/db/config/database.js');
        require('../../../src/app/models/attributes/Dexterity');
    });

    test('Create Dexterity', async () => {
        const Dexterity = mongoose.model('Dexterity');
        await Dexterity.create({
            value: 1,
            adjustment: -5,
            LocateDsarmTraps: -25,
            movQuietlyOpenClose: -25,
            hideShadowPut: -25
        });
    });

    test('Find all dexteritys', async () => {
        const Dexterity = mongoose.model('Dexterity');
        const dexterities = await Dexterity.find();
        _id = dexterities[0]._id.toString();
        const dexteritiesLength = dexteritys.length;

        expect(dexteritiesLength).toBe(1);
    });

    test('Find dexterity by id', async () => {
        const Dexterity = mongoose.model('Dexterity');
        const dexterity = await Dexterity.findOne({_id: _id});
        
        expect(dexterity.value).toBe(1);
    });

    test('Remove dexterity by id', async () => {
        const Dexterity = mongoose.model('Dexterity');
        const del = await Dexterity.deleteOne({_id: _id});

        expect(del.deletedCount).not.toBeFalsy();
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});