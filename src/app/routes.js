const express = require('express');
const routes = express.Router();

// Controllers
const User = require('./controllers/game/UserController');
const Breed = require('./controllers/roles/BreedController');
const Class = require('./controllers/roles/ClassController');
const Arm = require('./controllers/equipments/ArmController');
const DefenseItem = require('./controllers/equipments/DefenseItemController');

// Routes and operations
// Game
// Users
routes.post('/user', User.store);
routes.get('/users', User.index);
routes.get('/user/:id', User.show);
routes.put('/user/:id', User.update);
routes.delete('/user/:id', User.destroy);

// Roles
// Class
routes.post('/class', Class.store);
routes.get('/classes', Class.index);
routes.get('/class/:id', Class.show);
routes.put('/class/:id', Class.update);
routes.delete('/class/:id', Class.destroy);
// Breed
routes.post('/breed', Breed.store);
routes.get('/breeds', Breed.index);
routes.get('/breed/:id', Breed.show);
routes.put('/breed/:id', Breed.update);
routes.delete('/breed/:id', Breed.destroy);

// Equipments
// Arm
routes.post('/arm', Arm.store);
routes.get('/arms', Arm.index);
routes.get('/arm/:id', Arm.show);
routes.put('/arm/:id', Arm.update);
routes.delete('/arm/:id', Arm.destroy);
// Defense Item
// TODO test of URIs
routes.post('/defenseItem', DefenseItem.store);
routes.get('/defenseItems', DefenseItem.index);
routes.get('/defenseItem/:id', DefenseItem.show);
routes.put('/defenseItem/:id', DefenseItem.update);
routes.delete('/defenseItem/:id', DefenseItem.destroy);
// TODO General Item
// TODO Magic

// Attributes
// TODO Charisma
// TODO Constituition
// TODO Dexterity
// TODO Intelligence
// TODO Strength
// TODO Winsdom

module.exports = routes;