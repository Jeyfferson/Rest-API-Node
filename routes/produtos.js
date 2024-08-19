const express = require('express')
const router = express.Router()
const mysql = require('../mysql')

//Retornar todos os produtos
router.get('/', (req, res) => {
    // res.status(200).send({
    //     messagem: 'Retornar todos os produtos'
    // });

    mysql.connect ((error, conn) => {
        if(error) {return res.status(500).send({ error: error})}
        conn.query(
            'SELECT * FROM produtos;',
            (error, resultado, fields) => {
                if(error) {return res.status(500).send({ error: error})}
                return res.status(200).send({response: resultado})
            }
        )
    
    })
})

//Retornar um produto especifico
router.get('/:id_produto', (req, res) => {
    // res.status(200).send({
    //     messagem: 'Retornar todos os produtos'
    // });

    mysql.connect ((error, conn) => {
        if(error) {return res.status(500).send({ error: error})}
        conn.query(
            'SELECT * FROM produtos WHERE idprodutos = ?;',
            [req.params.id_produto],
            (error, resultado, fields) => {
                if(error) {return res.status(500).send({ error: error})}
                return res.status(200).send({response: resultado})
            }
        )
    
    })
})

//Inserir Produto
router.post('/', (req, res) => {

    // const produto = {
    //     name: req.body.name,
    //     preco: req.body.preco
    // }
    
    mysql.connect ((error, conn) => {
        if(error) {return res.status(500).send({ error: error})}
        conn.query(
            'INSERT INTO produtos (name, preco) VALUES (?, ?)',
            [req.body.name, req.body.preco],
            (error, resultado, field) => {
                if(error) {return res.status(500).send({error: error})
                }

                res.status(201).send({
                    mensagem: 'Produto inserido com sucesso',
                    id_produto: resultado.insertId
                })

                
            }
        )
    })

   
});



// Altera um produto
router.patch('/', (req, res, next) => {
    mysql.connect ((error, conn) => {
        if(error) {return res.status(500).send({ error: error})}
        conn.query(
            `UPDATE produtos SET name = ?, preco = ? WHERE idprodutos = ?`,
            [
                req.body.name, 
                req.body.preco, 
                req.body.id_produto
            ],
            (error, resultado, field) => {
                if(error) {return res.status(500).send({error: error})
                }

                res.status(201).send({
                    mensagem: 'Produto alterado com sucesso!'
                })

                
            }
        )
    })

   
});

// Exclui um produto
router.delete('/', (req, res) => {
    res.status(200).send({
        messagem: 'Produto Excluido'
    });
})

module.exports = router;