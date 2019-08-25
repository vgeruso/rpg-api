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
        requireDir('./models/game');
        requireDir('./models/attributes');
        requireDir('./models/items');
        requireDir('./models/roles');
    }

    route() {
        this.express.use('/api', require('./routes'));
    }
}

module.exports = new AppController().express;