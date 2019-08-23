describe('the breed CRUD operations', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
        });
        require('../../src/db/config/database.js');
        require('../../src/models/roles/Breed');
    });

    test('Create Breed', async () => {
        const Breed = mongoose.model('Breed');
        await Breed.create({
            name: 'Dwarf',
            bonus: {
                numBon: 2,
                description: 'Constituition'
            },
            penality: {
                numPen: -2,
                description: 'Charisma'
            },
            linfeData: 'd6',
            movimentation: 6,
            vision: 'dark vision 15 meters',
            mainLanguage: 'dwarf language'
        });
    });

    test('Find all breeds', async () => {
        const Breed =  mongoose.model('Breed');
        const breed = await Breed.find();
        _id = breed[0]._id.toString();
        const breedLength = breed.length;

        expect(breedLength).toBe(1);
    });

    test('Find breed by id', async () => {
        const Breed = mongoose.model('Breed');
        const breed = await Breed.findOne({ _id: _id });

        expect(breed.name).toBe('Dwarf');
    });

    test('Remove breed by id', async () => {
        const Breed = mongoose.model('Breed');
        const del = await Breed.deleteOne({_id: _id});

        expect(del.deletedCount).not.toBeFalsy();
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});