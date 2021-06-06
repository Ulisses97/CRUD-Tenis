const express = require('express')
const api = express();
const cors = require('cors');

// Habilitando os cors para utilizar em localhost
api.use(cors());
api.options('*', cors());

// Utilizar json
api.use(express.json({extends: true}))

// Pegar as rotas da api
api.use(require('./routes') )

api.listen( 5050, console.log('Serve On'))