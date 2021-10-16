const express = require('express')
const consultas = require('../services/consultasData.svc.js')
const routes = express.Router()




routes.get('/user/:idUser/animals', (req, res) => {
    var user_id = req.params['idUser']

    consultas.searchAnimalByUser(user_id).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})


routes.get('/user/:idUser/animal/:idAnimal', (req, res) => {
    var idUser = req.params['idUser']
    var idAnimal = req.params['idAnimal']
    var limit = req.query['limite']

    consultas.searchInformationAnimal(idUser, idAnimal, limit).then(result => {
        res.json(result)
    }).catch(error => {

        res.json(error)
    })
})

routes.get('/user/:idUser/report-milk', (req, res) => {
    var idUser = req.params['idUser']
    var initDate = req.query['initDate']
    var endDate = req.query['endDate']

    consultas.reportProduction(idUser, initDate, endDate).then(result => {
        res.json(result)
    }).catch(error => {

        res.json(error)
    })
})

routes.get('/user/:idUser/reporte-animales', (req, res) => {
    var idUser = req.params['idUser']

    consultas.reportAnimals(idUser).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error)
        res.json(error)
    })
})

routes.get('/paises', (req, res) => {

    consultas.searchPaises().then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error)
        res.json(error)
    })
})

module.exports = routes