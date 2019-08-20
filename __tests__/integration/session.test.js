describe('the user operations', () => {
    require('dotenv').config({
        path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
    });

    const mongoose = require('mongoose');
    require('../../src/db/config/database.js');
    require('../../src/models/game/User');
    
    const User = mongoose.model('User');

    afterAll(() => {
        mongoose.disconnect();
    });
});