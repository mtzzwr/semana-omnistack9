const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://mtzzwr:bcd127@omnistack-krf4a.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

// GET - BUSCAR INFORMAÇÃO, POST - CRIAR INFORMAÇÃO, PUT - EDITAR INFORMAÇÃO, DELETE - DELETAR INFORMAÇÃO

// req.query - acessar query params (para filtros)
// req.params - acessar route params (para edição, delete)
// req.body - acesar corpo da requisição (para criação, edição)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);