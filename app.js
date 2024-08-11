//Importando Expresse e chamando a instancia dele na const app
const express = require('express');
const app = express();

//Criando a porta 3000 do serve
const port = 3000

//Chamando a routa produtos do diretorio routes
const rotaProdutos = require('./routes/produtos');

app.use('/produtos', rotaProdutos)



//Escutando o server para executar callback
app.listen(port, function() {
    console.log('listening on port 3000')
})

module.exports = app;