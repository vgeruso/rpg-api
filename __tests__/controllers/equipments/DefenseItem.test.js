describe('the Defense Item CRUD operation', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV = "test" ? ".env.test" : ".env"
        });
        require('../../../src/db/config/database.js');
        require('../../../src/app/models/equipments/DefenseItem');
    });

    test('create Defense Item', async () => {
        const DefenseItem = mongoose.model('DefenseItem');
        await DefenseItem.create({
            item: 'leather armor',
            defenseBonus: 2,
            price: 20,
            weigth: 10
        });
    });

    test('Find all Defense Item', async () => {
        const DefenseItem = mongoose.model('DefenseItem');
        const defenseItems = await DefenseItem.find();
        _id = defenseItems[0]._id.toString();
        const defenseItemsLength = defenseItems.length;

        expect(defenseItemsLength).toBe(1);
    });

    test('Find Defense Item by id', async () => {
        const DefenseItem = mongoose.model('DefenseItem');
        const defenseItem = await DefenseItem.findOne({_id: _id});

        expect(defenseItem.item).toBe('leather armor');
    });

    test('Remove Defense Item by id', async () => {
        const DefenseItem = mongoose.model('DefenseItem');
        const del = await DefenseItem.deleteOne({_id: _id});

        expect(del.deletedCount).not.toBeFalsy();
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});