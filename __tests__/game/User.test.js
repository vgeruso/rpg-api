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
        await User.create({
            name: 'Victor',
            userName: 'Bollon',
            email: 'victor.geruso@gmail.com',
            password: 'açsldkjfiançclskdfaçoienm'
        });
    });

    test('find all users', async () => {
        const User = mongoose.model('User');
        const users = await User.find();
        _id = users[0]._id.toString();
        const usersLegth = users.length;

        console.log(users);
        expect(usersLegth).toBe(1);
    });

    test('find user by id', async () => {
        const User = mongoose.model('User');
        const user = await User.findOne({ _id: _id });

        console.log(user);
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