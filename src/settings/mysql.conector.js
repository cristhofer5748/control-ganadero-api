const mysql = require('mysql')
const env = require('../properties.js')

const conector = mysql.createConnection({
    host: env.host,
    user: env.user,
    password: env.password,
    database: env.db
})

const conection = () => {
    conector.connect(err => {
        if (err) throw err
        console.log("Conectado a " + env.db)
    })
}

module.exports = { conection, conector }