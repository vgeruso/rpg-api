const express = require('express');
const requireDir = require('require-dir');
const dotEnv = require('dotenv');

dotEnv.config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

class AppController {
    constructor() {
        this.express = express();

        this.middleware();
        this.route();
    }

    middleware() {
        this.express.use(express.json());
        require('./db/config/database.js');
        requireDir('./app/models/game');
        requireDir('./app/models/attributes');
        requireDir('./app/models/equipments');
        requireDir('./app/models/roles');
        requireDir('./app/models/skills');
    }

    route() {
        this.express.use('/api', require('./app/routes'));
    }
}

module.exports = new AppController().express;