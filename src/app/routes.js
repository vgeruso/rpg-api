const express = require('express');
const routes = express.Router();

// Controllers
// Game
const User = require('./controllers/game/UserController');
// Breed
const Breed = require('./controllers/roles/BreedController');
// Class
const Class = require('./controllers/roles/ClassController');

// Routes and operations
// Users
routes.post('/user', User.store);
routes.get('/users', User.index);
routes.get('/user/:id', User.show);
routes.put('/user/:id', User.update);
routes.delete('/user/:id', User.destroy);

// Breed
routes.post('/breed', Breed.store);
routes.get('/breeds', Breed.index);
routes.get('/breed/:id', Breed.show);

// Class
routes.post('/class', Class.store);
routes.get('/classes', Class.index);
routes.get('/class/:id', Class.show);

module.exports = routes;