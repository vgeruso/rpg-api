descrobe('the Inteligence CRUD operation', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV = "test" ? ".env.test" : ".env"
        });
        require('../../src/db/config/database.js');
        require('../../src/models/attributes/Intelligence');
    });
    
    afterAll(() => {
        mongoose.disconnect();
    });
});