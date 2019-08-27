describe('the Arm CRUD operations', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV = "test" ? ".env.test" : ".env"
        });
        require('../../../src/db/config/database.js');
        require('../../../src/app/models/equipments/Arm');
    });

    test('create Arm', async () => {
        const Arm =  mongoose.model('Arm');
        await Arm.create({
            arm: 'Adaga',
            size: 'P',
            damage: '1d4',
            reach: '3/6/9',
            iniciative: 8,
            price: 2,
            weight: 0.5
        });
    });

    test('Find All Arms', async () => {
        const Arm = mongoose.model('Arm');
        const arms = await Arm.find();
        _id = arms[0]._id.toString();
        const armsLength = arms.length;

        expect(armsLength).toBe(1);
    });
    
    test('Find Arm by id', async () => {
        const Arm = mongoose.model('Arm');
        const arm = await Arm.findOne({_id: _id});

        expect(arm.arm).toBe('Adaga');
    });
    
    test('Remove Arm by id', async () => {
        const Arm = mongoose.model('Arm');
        const del = await Arm.deleteOne({_id: _id});

        expect(del.deletedCount).not.toBeFalsy();
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});