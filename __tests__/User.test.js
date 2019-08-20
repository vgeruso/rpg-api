describe('the user operations', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
        });
        require('../src/db/config/database.js');
        require('../src/models/game/User');
    });

    it('create User', async () => {
        const User = mongoose.model('User');
        const user = await User.create({
            name: 'Victor',
            userName: 'Bollon',
            email: 'victor.geruso@gmail.com',
            password: 'açsldkjfiançclskdfaçoienm'
        });
        
        expect(user.name).toBe('Victor');
        expect(user.userName).toBe('Bollon');
        expect(user.email).toBe('victor.geruso@gmail.com');
        expect(user.password).toBe('açsldkjfiançclskdfaçoienm');
    });

    it('find all users', async () => {
        const User = mongoose.model('User');
        const user = await User.find();
        _id = user[0]._id;
        expect(user[0].name).toBe('Victor');
        expect(user[0].userName).toBe('Bollon');
        expect(user[0].email).toBe('victor.geruso@gmail.com');
        expect(user[0].password).toBe('açsldkjfiançclskdfaçoienm');
    });

    it('find user by id', async () => {
        const User = mongoose.model('User');
        const user = await User.findById(_id);
        expect(user.name).toBe('Victor');
        expect(user.userName).toBe('Bollon');
        expect(user.email).toBe('victor.geruso@gmail.com');
        expect(user.password).toBe('açsldkjfiançclskdfaçoienm');
    });

    it('remove user by id', async () => {
        const User = mongoose.model('User');
        const us = await User.findByIdAndRemove(_id);
        expect(us.__v).toBe(0); 
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});