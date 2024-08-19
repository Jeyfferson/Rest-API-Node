//Importando Expresse e chamando a instancia dele na const app
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//Criando a porta 3000 do serve
const port = 3000

//Conexão com db
const mysql = require('./mysql.js');

//Chamando a routa produtos do diretorio routes
const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');


app.use(morgan('dev')); //Executa um callback para monitorar as rotas
app.use(bodyParser.urlencoded({ extended: false })); //Aceitar apenas dados simples
app.use(bodyParser.json()); //Aceitar apenas json de entrada no body

// Configurando controle de acesso ao servidor com o cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header',
        'Content-Type, Origin, X-Requested-With, Accept, Authorization'        
    );

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
})

app.use('/produtos', rotaProdutos)
app.use('/pedidos', rotaPedidos)

//Quando nao encontra Rota, executa esse callback
app.use((req, res, next) => {
    const erro = new Error('Rota não encontrada')
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            messagem: error.message
        }
    })
})


//Escutando o server para executar callback
app.listen(port, function() {
    console.log('listening on port 3000')
})

module.exports = app;