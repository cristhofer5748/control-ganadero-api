const express = require('express')
const insertData = require('../services/InsertData.svc.js')
const routes = express.Router()

routes.post('/animal', (req, res) => {
    let animal = req.body;

    try {
        insertData.insertAnimal(animal).then(function(result) {
            res.json(result)
        }).catch(error => {
            console.log(error);
            res.json(error);
        })
    } catch (error) {
        console.log(error)
    }

})

routes.post('/user', (req, res) => {
    let user = req.body;
    insertData.insertUser(user).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})

routes.post('/milkProduction', (req, res) => {
    let milk = req.body;

    insertData.insertMilk(milk).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})

routes.post('/natality', (req, res) => {
    let natality = req.body;

    insertData.insertNatality(natality).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})

routes.post('/insemination', (req, res) => {
    let insemination = req.body;

    insertData.insertInsemination(insemination).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})

routes.post('/healthControl', (req, res) => {
    let healthControl = req.body;

    insertData.insertHealthControl(healthControl).then(result => {
        res.json(result)
    }).catch(error => {
        console.log(error);
        res.json(error)
    })
})

module.exports = routes