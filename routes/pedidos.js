const express = require('express')
const router = express.Router()

//Retornar todos os pedidos
router.get('/', (req, res) => {
    res.status(200).send({
        messagem: 'Retornar todos os pedidos'
    });
})

//Inserir Pedido
router.post('/', (req, res) => {

    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }

    res.status(201).send({
        mensagem: 'O pedido foi criado',
        pedidoCriado: pedido
    })
});

// Retorna os dados de um pedido
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido

    if(id === 'especial') {
        res.status(200).send({
            messagem: 'Detalhes do pedido',
            id_pedido: id
        });        
    } else {
        res.status(200).send({
            messagem: 'Você passou um ID'
        })
    }
});


// Exclui um pedido
router.delete('/', (req, res) => {
    res.status(200).send({
        messagem: 'Pedido excluido'
    });
})

module.exports = router;