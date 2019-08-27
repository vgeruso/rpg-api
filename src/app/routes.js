const express = require('express');
const routes = express.Router();

// Controllers
const User = require('./controllers/game/UserController');

// Routes of operations
routes.post('/user', User.store);

module.exports = routes;