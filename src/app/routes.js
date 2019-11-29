const express = require('express');
const routes = express.Router();

// Controllers
const User = require('./controllers/game/UserController');
const Breed = require('./controllers/roles/BreedController');
const Class = require('./controllers/roles/ClassController');
const Arm = require('./controllers/equipments/ArmController');
const DefenseItem = require('./controllers/equipments/DefenseItemController');
const GeneralItem = require('./controllers/equipments/GeneralItemController');
const Magic = require('./controllers/skills/MagicController');

// Routes and operations
// Game
// Users
routes.post('/user', User.store);
routes.get('/users', User.index);
routes.get('/user/:userName', User.show);
routes.put('/user/:userName', User.update);
routes.delete('/user/:userName', User.destroy);

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
routes.post('/defenseItem', DefenseItem.store);
routes.get('/defenseItems', DefenseItem.index);
routes.get('/defenseItem/:id', DefenseItem.show);
routes.put('/defenseItem/:id', DefenseItem.update);
routes.delete('/defenseItem/:id', DefenseItem.destroy);
// General Item
routes.post('/generalItem', GeneralItem.store);
routes.get('/generalItems', GeneralItem.index);
routes.get('/generalItem/:id', GeneralItem.show);
routes.put('/generalItem/:id', GeneralItem.update);
routes.delete('/generalItem/:id', GeneralItem.destroy);

//Skills
// Magic
routes.post('/magic', Magic.store);
routes.get('/magics', Magic.index);
routes.get('/magic/:id', Magic.show);
routes.put('/magic/:id', Magic.update);
routes.delete('/magic/:id', Magic.destroy);

// Attributes
// TODO Charisma
// TODO Constituition
// TODO Dexterity
// TODO Intelligence
// TODO Strength
// TODO Winsdom

module.exports = routes;