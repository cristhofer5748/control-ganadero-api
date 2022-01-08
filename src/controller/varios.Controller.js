const express = require('express')
const routes = express.Router()
const varios = require('../services/variosData.svc')

routes.put('/animal', (req, res) => {
    let animal = req.body;
    console.log('Entro al metodo')
    varios.updateAnimal(animal).then(result => {
        res.json(result)
    }).catch(error => {
        res.json(error)
    })
})

routes.delete('/animal/:idAnimal', (req, res) => {
    let idAnimal = req.params['idAnimal'];

    varios.deleteAnimal(idAnimal).then(result => {
        res.json(result)
    }).catch(error => {
        res.json(error)
    })
})

routes.get('/animal/:idAnimal', (req, res) => {
    let idAnimal = req.params['idAnimal'];

    varios.searchAnimal(idAnimal).then(result => {
        res.json(result)
    }).catch(error => {
        res.json(error)
    })
})

module.exports = routes