describe('the breed CRUD operations', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
        });
        require('../../../src/db/config/database.js');
        require('../../../src/app/models/roles/Breed');
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
        const breeds = await Breed.find();
        _id = breeds[0]._id.toString();
        const breedsLength = breeds.length;

        let status = '';
        if(breedsLength == 0) {
            status = 'No registred breeds';
        } else {
            status = breeds[0].name;
        }

        expect(status).toBe('Dwarf');
    });

    test('Find breed by id', async () => {
        const Breed = mongoose.model('Breed');
        const breed = await Breed.findOne({ _id: _id });

        let status = '';
        if(breed === null) {
            status = 'Breed not found';
        } else {
            status = breed.name;
        }

        expect(status).toBe('Dwarf');
    });

    afterAll(async () => {
        const Breed = mongoose.model('Breed');
        await Breed.deleteOne({_id: _id});

        mongoose.disconnect();
    });
});