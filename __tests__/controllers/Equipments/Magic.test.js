describe('the Magic CRUD operations', () => {
    const mongoose = require('mongoose');
    let _id;
    
    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV = "test" ? ".env.test" : ".env"
        });
        require('../../../src/db/config/database.js');
        require('../../../src/app/models/equipments/Magic');
    });

    test('create Magic', async () => {
        const Magic = mongoose.model('Magic');
        await Magic.create({
            name: 'Walk on the waters',
            type: 'Divine 4',
            description: 'Walk',
            duration: '1d4 turns + 1 turn/level',
        });
    });

    test('Find all Magic', async () => {
        const Magic = mongoose.model('Magic');
        const magics = await Magic.find();
        _id = magics[0]._id.toString();
        const magicsLength = magics.length;

        expect(magicsLength).toBe(1);
    });

    test('Find Magic by id', async () => {
        const Magic = mongoose.model('Magic');
        const magic = await Magic.findOne({_id: _id});

        expect(magic.name).toBe('Walk on the waters');
    });

    test('Remove Magic by id', async () => {
        const Magic = mongoose.model('Magic');
        const del = await Magic.deleteOne({_id: _id});

        expect(del.deletedCount).not.toBeFalsy();
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});