// Porta do servidor
const port = 3000

// Dependencias
const express = require('express')

// Inicialização do app
const app = express()

// Conexão com o banco de dados
require('./config/database.js')

// Inicialização da rota principal
app.get('/', (req, res) => {
    res.send('Olá RPG!')
})

// Inicialização do servidor na porta 3000
app.listen(port, () => {
    console.log('Servidor da API inicializado')
})