//Importando Expresse e chamando a instancia dele na const app
const express = require('express');
const app = express();
const morgan = require('morgan');

//Criando a porta 3000 do serve
const port = 3000

//Chamando a routa produtos do diretorio routes
const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');


app.use(morgan('dev')); //Executa um callback para monitorar as rotas
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