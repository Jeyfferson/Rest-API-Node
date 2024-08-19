const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce'
});

conexao.connect(function(erro){
    if(erro) throw erro;
    console.log('connect success');
})

module.exports = conexao;