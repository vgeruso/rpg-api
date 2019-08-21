describe('the user CRUD operations', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
        });
        require('../../src/db/config/database.js');
        require('../../src/models/game/User');
    });

    test('create User', async () => {
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

    test('find all users', async () => {
        const User = mongoose.model('User');
        const user = await User.find();
        _id = user[0]._id.toString();
        const userLegth = user.length;

        expect(user[0].name).toBe('Victor');
        expect(user[0].userName).toBe('Bollon');
        expect(user[0].email).toBe('victor.geruso@gmail.com');
        expect(user[0].password).toBe('açsldkjfiançclskdfaçoienm');
        expect(userLegth).toBe(1);
    });

    test('find user by id', async () => {
        const User = mongoose.model('User');
        const user = await User.findOne({ _id: _id });

        expect(user.name).toBe('Victor');
        expect(user.userName).toBe('Bollon');
        expect(user.email).toBe('victor.geruso@gmail.com');
        expect(user.password).toBe('açsldkjfiançclskdfaçoienm');
    });

    test('update user by id', async () => {
        const User = mongoose.model('User');
        await User.updateOne({ _id: _id }, { name: 'Victor Geruso' });
        const user = await User.findOne({ _id : _id });

        expect(user.name).toBe('Victor Geruso');
    });

    test('remove user by id', async () => {
        const User = mongoose.model('User');
        const del = await User.deleteOne({ _id: _id });
        
        expect(del.deletedCount).not.toBeFalsy();
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});