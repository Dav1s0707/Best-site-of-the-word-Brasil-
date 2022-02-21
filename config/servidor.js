//carregar o módulo express
const express = require('express')
//executar o express
const app = express()

const porta = process.env.PORT || 4040
//definir a porta do servidor
//definir a pasta dos assests (css, images,etc)
app.use(express.static('./assets/'))

const consign = require("consign")
consign().include("./routes").into(app)

//definir novo caminho para armazenar arquivos
//app.set('view','[Nome da pasta])

//exportar as variáveis app e porta
module.exports = {app,porta}