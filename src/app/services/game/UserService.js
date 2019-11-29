const mongoose = require('mongoose');
require('../../models/game/User');

const User = mongoose.model('User');

module.exports = {
    async create(userToCreate) {
        const userExists = await this.findByUserName(userToCreate.userName);

        let user;
        if(userExists === 'User not found') {
            user = await User.create(userToCreate);
        } else {
            user = 'Username is already used';
        }

        return user
    },

    async findAllUsers() {
        const users = await User.find();

        if(users.length === 0) {
            return 'No registred users';
        }

        return users;
    },

    async findByUserName(userName) {
        const user = await User.findOne({userName: userName});

        if(user === null) {
            return 'User not found';
        }

        return user;
    },

    async updateUserByUserName(userName, json) {
        const userExists = await this.findByUserName(userName);

        let user;
        if(userExists === 'User not found') {
            user = userExists;
        } else {
            const userMod = await User.updateOne({userName: userName}, json);
            if(userMod.nModified === 1) {
                user = 'User modfied';
            } else {
                user = 'Modify error';
            }
        }

        return user;
    },

    async removeUserByUserName(userName) {
        const userExists = await this.findByUserName(userName);

        let user;
        if(userExists === 'User not found') {
            user = userExists;
        } else {
            const userDel = await User.deleteOne({userName: userName});
            if(userDel.n === 1) {
                user = 'User removed';
            } else {
                user = 'Delete error';
            }
        }

        return user;
    }
}