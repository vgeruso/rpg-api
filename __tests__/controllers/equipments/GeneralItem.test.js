describe('the General Items CRUD operations', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV = "test" ? ".env.test" : ".env"
        });
        require('../../../src/db/config/database.js');
        require('../../../src/app/models/equipments/GeneralItem');
    });

    test('create General Item', async () => {
        const GeneralItem = mongoose.model('GeneralItem');
        await GeneralItem.create({
            item: 'holy water',
            desccription: '500 ml bottle',
            price: 1,
            weight: 0.5
        });
    });

    test('Find all General Items', async () => {
        const GeneralItem = mongoose.model('GeneralItem');
        const generalItems = await GeneralItem.find();
        _id = generalItems[0]._id.toString();
        const generalItemsLength = generalItems.length;

        expect(generalItemsLength).toBe(1);
    });

    test('Find General Item by id', async () => {
        const GeneralItem = mongoose.model('GeneralItem');
        const generalItem = await GeneralItem.findOne({_id: _id});

        expect(generalItem.item).toBe('holy water');
    });

    test('Remove General Item by id', async () => {
        const GeneralItem = mongoose.model('GeneralItem');
        const del = await GeneralItem.deleteOne({_id: _id});

        expect(del.deletedCount).not.toBeFalsy();
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});