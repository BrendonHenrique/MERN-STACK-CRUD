const Express  = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o server
const app = Express();
app.use(Express.json());
app.use(cors());

// Iniciando o Db
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);
requireDir("./src/models");


// Obtendo acesso ao model Product
// const Product = mongoose.model('Product');


// Redirecionando request /api para as rotas iniciadas no modulo requerido
app.use('/api', require('./src/routes'));

app.get('/', function (req, res) {
    res.send('hello world')
})
  
// Abrindo uma porta para o server escutar
app.listen(3001);

