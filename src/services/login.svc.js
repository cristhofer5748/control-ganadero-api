const query = require('../dao/query.login')
const jwt = require('jsonwebtoken')

function searchUsers() {
    return new Promise(async(resolve, reject) => {
        let mr
        console.log('Entro al metodo')
        try {
            var users = await query.searchUsers()
            console.log(users)
            if (users.length > 0) {
                mr = { state: 200, data: users, message: 'SUCCES' }
            } else {
                mr = { state: 204, data: 'No hay usuarios registrados', message: 'SUCCES' }
            }
            resolve(mr)
        } catch (error) {
            mr = { state: 500, message: error.toString() }
            reject(mr)
        }

    })
}


function genereteTokenSingin(correo, contrasena) {
    return new Promise(async(resolve, reject) => {
        let mr
        try {
            let user = await query.searchUserbyEmail(correo, contrasena);
            if (user.length > 0) {
                let data = JSON.stringify(user[0])
                const token = jwt.sign(data, 'stil');
                mr = { state: 200, data: token, message: 'SUCCESS' }
            } else {
                mr = { state: 204, data: 'Contraseña o Usuario incorrecto intente de nuevo', message: 'SUCCES' }
            }
            resolve(mr)
        } catch (error) {
            mr = { state: 500, data: error.toString() }
            reject(mr)
        }
    })
}



module.exports = { searchUsers, genereteTokenSingin }