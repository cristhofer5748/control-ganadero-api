const { conector } = require("../settings/mysql.conector.js");


const searchUserbyEmail = (correo, user) => {
    const sqlSearchUser = `select * from controlganadero.usuarios u
    inner join controlganadero.ganaderos g on g.idGanadero =u.idGanadero 
    where u.correo =? and u.contraseña =?;`
    return new Promise((resolve, reject) => {
        conector.query(sqlSearchUser, [correo, user], (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}

const searchUsers = () => {
    console.log('Entro a la query')
    const sqlSearchUser = `select * from controlganadero.usuarios u
    inner join controlganadero.ganaderos g on g.idGanadero =u.idGanadero;`
    return new Promise((resolve, reject) => {
        conector.query(sqlSearchUser, (err, result) => {

            if (err) reject(err)
            else resolve(result)
        })
    })
}

module.exports = { searchUserbyEmail, searchUsers }