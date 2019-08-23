describe('the Strength CRUD operation', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV = "test" ? ".env.test" : ".env"
        });
        require('../../src/db/config/database.js');
        require('../../src/models/attributes/Strength');
    });

    test('create Strength', async () => {
        const Strength = mongoose.model('Strength');
        await Strength.create({
            value: 1,
            adjustment: -5
        });
    });
    
    test('Find all', async () => {
        const Strength = mongoose.model('Strength');
        const strengths = await Strength.find();
        _id = strengths[0]._id.toString();
        const strengthsLength = strengths.length;

        expect(strengthsLength).toBe(1);
    });

    test('Find Strength by id', async () => {
        const Strength = mongoose.model('Strength');
        const strength = await Strength.findOne({_id: _id});
        
        expect(strength.value).toBe(1);
    });
    
    test('Remove Strength by id', async () => {
        const Strength = mongoose.model('Strength');
        const del = await Strength.deleteOne({_id: _id});

        expect(del.deletedCount).not.toBeFalsy();
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});