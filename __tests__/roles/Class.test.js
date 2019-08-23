describe('the Class DRUD Operations', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
        });
        require('../../src/db/config/database.js');
        require('../../src/models/roles/Class');
    });

    test('create Class', async () => {
        const Class =  mongoose.model('Class');
        await Class.create({
            name: 'Man of arms',
            levelBase: [
                {
                    level: 1,
                    experience: 0,
                    lifeData: 1,
                    attackBase: 1,
                    protectionPlay: 16
                },
                {
                    level: 2,
                    experience: 2000,
                    lifeData: 2,
                    attackBase: 2,
                    protectionPlay: 16
                },
                {
                    level: 3,
                    experience: 4000,
                    lifeData: 3,
                    attackBase: 3,
                    protectionPlay: 16
                },
                {
                    level: 4,
                    experience: 8000,
                    lifeData: 4,
                    attackBase: 4,
                    protectionPlay: 15
                },
                {
                    level: 5,
                    experience: 16000,
                    lifeData: 5,
                    attackBase: 5,
                    protectionPlay: 15
                },
                {
                    level: 6,
                    experience: 32000,
                    lifeData: 6,
                    attackBase: 6,
                    protectionPlay: 15
                },
                {
                    level: 7,
                    experience: 64000,
                    lifeData: 7,
                    attackBase: 7,
                    protectionPlay: 14
                },
                {
                    level: 8,
                    experience: 128000,
                    lifeData: 8,
                    attackBase: 8,
                    protectionPlay: 14
                },
                {
                    level: 9,
                    experience: 256000,
                    lifeData: 9,
                    attackBase: 9,
                    protectionPlay: 14
                },
                {
                    level: 10,
                    experience: 304000,
                    lifeData: 2,
                    attackBase: 10,
                    protectionPlay: 13
                },
                {
                    level: 11,
                    experience: 408000,
                    lifeData: 2,
                    attackBase: 10,
                    protectionPlay: 13
                },
                {
                    level: 12,
                    experience: 516000,
                    lifeData: 4,
                    attackBase: 11,
                    protectionPlay: 13
                },
                {
                    level: 13,
                    experience: 632000,
                    lifeData: 4,
                    attackBase: 11,
                    protectionPlay: 12
                },
                {
                    level: 14,
                    experience: 704000,
                    lifeData: 5,
                    attackBase: 12,
                    protectionPlay: 12
                },
                {
                    level: 15,
                    experience: 808000,
                    lifeData: 5,
                    attackBase: 12,
                    protectionPlay: 12
                },
                {
                    level: 16,
                    experience: 916000,
                    lifeData: 6,
                    attackBase: 13,
                    protectionPlay: 11
                },
                {
                    level: 17,
                    experience: 1032000,
                    lifeData: 6,
                    attackBase: 13,
                    protectionPlay: 11
                },
                {
                    level: 18,
                    experience: 1064000,
                    lifeData: 7,
                    attackBase: 14,
                    protectionPlay: 11
                },
                {
                    level: 19,
                    experience: 1128000,
                    lifeData: 7,
                    attackBase: 14,
                    protectionPlay: 10
                },
                {
                    level: 20,
                    experience: 1256000,
                    lifeData: 8,
                    attackBase: 15,
                    protectionPlay: 10
                },
            ]
        });
    });

    test('Find all class', async () => {
        const Class = mongoose.model('Class');
        const classFind = await Class.find();
        _id = classFind[0]._id.toString();
        const classLength = classFind.length;

        expect(classLength).toBe(1);
        expect(classFind[0].levelBase[19].level).toBe(20);
    });

    test('Find class by id', async () => {
        const Class = mongoose.model('Class');
        const classFindId = await Class.findOne({_id: _id});

        expect(classFindId.name).toBe('Man of arms');
    });

    test('Remove class by id', async () => {
        const Class = mongoose.model('Class');
        const del = await Class.deleteOne({_id: _id});

        expect(del.deletedCount).not.toBeFalsy();
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});