// Port of server
const port = 3000

// Dependencies
const express = require('express')
const requireDir = require('require-dir')

// Initialization of the app
const app = express()
app.use(express.json())

// Initialization of the DB
require('./config/database.js')
requireDir('./src/models/game')
requireDir('./src/models/attributes')
requireDir('./src/models/items')
requireDir('./src/models/roles')

// Routes
app.use('/api', require('./src/routes'))

// Initialization of the server in port 3000
app.listen(port, () => {
    console.log('Server of the API initialized')
})