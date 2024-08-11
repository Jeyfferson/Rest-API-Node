const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send({
        messagem: 'Usando o Get dentro da rota de produtos'
    });
})

router.post('/', (req, res) => {
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota de produtos'
    })
});

router.get('/:id_produtos', (req, res) => {
    
});

module.exports = router;