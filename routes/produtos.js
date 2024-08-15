const express = require('express')
const router = express.Router()

//Retornar todos os produtos
router.get('/', (req, res) => {
    res.status(200).send({
        messagem: 'Retornar todos os produtos'
    });
})

//Inserir Produto
router.post('/', (req, res) => {
    res.status(201).send({
        mensagem: 'Inserir um produto'
    })
});

module.exports = router;