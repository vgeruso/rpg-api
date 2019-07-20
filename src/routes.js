const expresse = require('express')
const routes = expresse.Router()

// Declaretion of the controllers
// Controllers game
const UserController = require('./controllers/game/UserController')
const CharacterController = require('./controllers/game/CharacterController')

// Controllers attributes
const CharismaController = require('./controllers/attributes/CharismaController')
const ConstituitionController = require('./controllers/attributes/ConstituitionController')
const DexterityController = require('./controllers/attributes/DexterityController')
const IntelligenceController = require('./controllers/attributes/IntelligenceController')
const StrenghtController = require('./controllers/attributes/StrengthController')
const WisdomController = require('./controllers/attributes/WisdomController')

// TODO Controllers items

//TODO Controllers roles

// Routes User
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)

// Routes Character
routes.post('/characters', CharacterController.store)

// Routes Charisma
routes.get('/Charismas', CharismaController.index)
routes.get('/Charismas/:id', CharismaController.show)
routes.post('/Charismas', CharismaController.store)

// Routes Constituition
routes.get('/Constituition', ConstituitionController.index)
routes.get('/Constituition/:id', ConstituitionController.show)
routes.post('/Constituition', ConstituitionController.store)

// Routes Dexterity
routes.get('/Dexterity', DexterityController.index)
routes.get('/Dexterity/:id', DexterityController.show)
routes.post('/Dexterity', DexterityController.store)

// Routes Intelligence
routes.get('/Intelligence', IntelligenceController.index)
routes.get('/Intelligence/:id', IntelligenceController.show)
routes.post('/Intelligence', IntelligenceController.store)

// Routes Strenght
routes.get('/Strength', StrenghtController.index)
routes.get('/Strength/:id', StrenghtController.show)
routes.post('/Strength', StrenghtController.store)

// Routes Wisdom
routes.get('/Wisdom', WisdomController.index)
routes.get('/Wisdom/:id', WisdomController.show)
routes.post('/Wisdom', WisdomController.store)

module.exports = routes