const UserService = require('../../services/game/UserService');

module.exports = {
    async store (req, res) {
        const json = req.body;
        const user = await UserService.create(json);
        
        if(user === 'Username is already used') {
            return res.status(422).json({message: user});
        }

        return res.status(201).json(user);
    },

    async index (req, res) {
        const users = await UserService.findAllUsers();
        if (users === 'No registred users') {
            return res.status(404).json({message: users});
        }
        return res.status(200).json(users);
    },

    async show (req, res) {
        const userName = req.params.userName;
        const user = await UserService.findByUserName(userName);

        if (user === 'User not found') {
            return res.status(404).send({message: user});
        }
        return res.status(200).json(user);
    },

    async update (req, res) {
        const userName = req.params.userName;
        const json = req.body;
        const userUpdated = await UserService.updateUserByUserName(userName, json);
        if(userUpdated === 'User not found') {
            return res.status(404).send({message: userUpdated});
        } else if (userUpdated === 'Modified error') {
            return res.status(500).send({message: userUpdated});
        }
        return res.status(200).json({message: userUpdated});
    },

    async destroy (req, res) {
        const userName = req.params.userName;
        const del = await UserService.removeUserByUserName(userName);
        if(del === 'User not found') {
            return res.status(404).json({message: del});
        }
        return res.status(200).json({message: del});
    }
};