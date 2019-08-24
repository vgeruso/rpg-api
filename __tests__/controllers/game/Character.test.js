describe('the character CRUD operations', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
        });
        require('../../../src/db/config/database.js');
        require('../../../src/models/game/Character');
    });

    test('test run', () => {
        expect(2).toBe(2);
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});