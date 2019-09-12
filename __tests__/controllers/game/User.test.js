describe('the user CRUD operations', () => {
    const mongoose = require('mongoose');
    let _id;

    beforeAll(() => {
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
        });
        require('../../../src/db/config/database.js');
        require('../../../src/app/models/game/User');
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

        let status = '';
        if(usersLegth == 0) {
            status = 'no registred users';
        } else {
            status = users[0].name;
        }

        expect(status).toBe('Victor');
    });

    test('find user by id', async () => {
        const User = mongoose.model('User');
        const user = await User.findOne({ _id: _id });

        let status = '';
        if(user == null) {
            status = 'User not found';
        } else {
            status = user.name;
        }

        expect(status).toBe('Victor');
    });

    test('find user by id => user not found', async () => {
        const User = mongoose.model('User');
        const user = await User.findOne({ _id: '5d7a70611f33cc29b63902d1' });

        let status = '';
        if(user == null) {
            status = 'User not found';
        } else {
            status = user.name;
        }

        expect(status).toBe('User not found');
    });

    test('update user by id', async () => {
        const User = mongoose.model('User');
        await User.updateOne({ _id: _id }, { name: 'Victor Geruso' });
        const user = await User.findOne({ _id : _id });

        let status = '';
        if(user == null) {
            status = 'User not found';
        } else {
            status = user.name;
        }

        expect(status).toBe('Victor Geruso');
    });

    test('update user by id => user not found', async () => {
        const User = mongoose.model('User');
        await User.updateOne({ _id: '5d7a70611f33cc29b63902d1' }, { name: 'Victor Geruso' })
        const user = await User.findOne({ _id: '5d7a70611f33cc29b63902d1' });

        let status = '';
        if(user == null) {
            status = 'User not found';
        } else {
            status = user.name;
        }

        expect(status).toBe('User not found');
    })

    test('remove user by id', async () => {
        const User = mongoose.model('User');
        const del = await User.deleteOne({ _id: _id });
        
        let status = '';
        if(del.deletedCount == false) {
            status = 'User not found';
        } else {
            status = 'User deleted'
        }

        expect(status).toBe('User deleted');
    });

    test('remove user by id => User not found', async () => {
        const User = mongoose.model('User');
        const del = await User.deleteOne({ _id: '5d7a70611f33cc29b63902d1' });
        
        let status = '';
        if(del.deletedCount == false) {
            status = 'User not found';
        } else {
            status = 'User deleted'
        }

        expect(status).toBe('User not found');
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});