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

// Retorna os dados de um produto
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if(id === 'especial') {
        res.status(200).send({
            messagem: 'Você Descobriu o ID especial',
            id_produto: id
        });        
    } else {
        res.status(200).send({
            messagem: 'Você passou um ID'
        })
    }
});

// Altera um produto
router.patch('/', (req, res) => {
    res.status(200).send({
        messagem: 'Produto Alterado'
    });
})

// Exclui um produto
router.delete('/', (req, res) => {
    res.status(200).send({
        messagem: 'Produto Excluido'
    });
})

module.exports = router;