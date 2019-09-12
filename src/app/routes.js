const express = require('express');
const routes = express.Router();

// Controllers
// Game
const User = require('./controllers/game/UserController');

// Breed
const Breed = require('./controllers/roles/BreedController');

// Routes of operations
// Users
routes.post('/user', User.store);
routes.get('/users', User.index);
routes.get('/user/:id', User.show);
routes.put('/user/:id', User.update);
routes.delete('/user/:id', User.destroy);

//Breed


module.exports = routes;