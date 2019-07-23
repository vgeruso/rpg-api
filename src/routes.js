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

// Controllers items
const EquipmentController = require('./controllers/items/EquipmentController')
const SpellController = require('./controllers/items/SpellController')
const WeaponController =  require('./controllers/items/WeaponController')

// Controllers roles
const BreedController = require('./controllers/roles/BreedController')
const ClassController = require('./controllers/roles/ClassController')

// Routes User
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)

// Routes Character
routes.post('/characters', CharacterController.store)

// Routes Charisma
routes.get('/charisma', CharismaController.index)
routes.get('/charisma/:id', CharismaController.show)
routes.post('/charisma', CharismaController.store)

// Routes Constituition
routes.get('/constituition', ConstituitionController.index)
routes.get('/constituition/:id', ConstituitionController.show)
routes.post('/constituition', ConstituitionController.store)

// Routes Dexterity
routes.get('/dexterity', DexterityController.index)
routes.get('/dexterity/:id', DexterityController.show)
routes.post('/dexterity', DexterityController.store)

// Routes Intelligence
routes.get('/intelligence', IntelligenceController.index)
routes.get('/intelligence/:id', IntelligenceController.show)
routes.post('/intelligence', IntelligenceController.store)

// Routes Strenght
routes.get('/strength', StrenghtController.index)
routes.get('/strength/:id', StrenghtController.show)
routes.post('/strength', StrenghtController.store)

// Routes Wisdom
routes.get('/wisdom', WisdomController.index)
routes.get('/wisdom/:id', WisdomController.show)
routes.post('/wisdom', WisdomController.store)

// Routes Equipment
routes.get('/equipments', EquipmentController.index)
routes.get('/equipments/:id', EquipmentController.show)
routes.post('/equipments', EquipmentController.store)

// Routes Spell
routes.get('/spells', SpellController.index)
routes.get('/spells/:id', SpellController.show)
routes.post('/spells', SpellController.store)

// Routes Weapon
routes.get('/weapons', WeaponController.index)
routes.get('/weapons/:id', WeaponController.show)
routes.post('/weapons', WeaponController.store)

// Routes Breed
routes.get('/breeds', BreedController.index)
routes.get('/breeds/:id', BreedController.show)
routes.post('/breeds', BreedController.store)

// Routes Class
routes.get('/classes', ClassController.index)
routes.get('/classes/:id', ClassController.show)
routes.post('/classes', ClassController.store)

module.exports = routes