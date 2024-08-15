const express = require('express')
const router = express.Router()

//Retornar todos os Pedidos
router.get('/', (req, res) => {
    res.status(200).send({
        messagem: 'Retornar todos os pedidos'
    });
})

//Inserir um Pedido
router.post('/', (req, res) => {
    res.status(201).send({
        mensagem: 'Inserir um pedidos'
    })
});

module.exports = router;