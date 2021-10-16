const express = require('express')
const svcLogin = require('../services/login.svc.js')
const routes = express.Router()
const jwt = require('jsonwebtoken')

routes.get('/usuarios', verifyToken, (req, res) => {
    svcLogin.searchUsers().then(result => {
        res.json(result)
    }).catch(error => {
        res.json(error)
    })
})

routes.post('/singin', (req, res) => {
    const { correo, contrasena } = req.body;

    svcLogin.genereteTokenSingin(correo, contrasena).then(result => {
        res.json(result)
    }).catch(error => {
        res.json(error)
    })
})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) return res.status(401).json({ state: 401, data: 'No autorizado', message: 'No tiene autorizacion para utilizar estos servicios' });
    const token = req.headers.authorization.substr(7);
    if (token !== '') {
        const content = jwt.verify(token, 'stil');
        if (content) {
            next();
        } else {
            res.status(401).json({ state: 401, data: 'Token no valido', message: '' })
        }
    } else {
        res.status(401).json({ state: 401, data: 'Token vacio', message: '' })
    }
}

module.exports = routes