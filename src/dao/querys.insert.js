const { conector } = require("../settings/mysql.conector.js");


const registerAnimal = (animal) => {

    const sqlInsertAnimalRegister = `INSERT INTO controlganadero.registroanimal SET ?`;
    return new Promise((resolve, reject) => {
        conector.query(sqlInsertAnimalRegister, animal, (erro, resul) => {
            if (erro) reject(erro)
            else resolve(resul.insertId)
        });
    })
};

const registerUser = (user) => {
    let idGanadero;
    const sqlInsertGanadero = `INSERT INTO controlganadero.ganaderos
    (nombre, apellido, fechaNacimiento, sexo)
    VALUES(?, ?, ?, ?);`;

    return new Promise((resolve, reject) => {
        conector.query(sqlInsertGanadero, [user.nombre, user.apellido, user.fechaNacimiento, user.sexo], (err, result) => {

            idGanadero = result.insertId

            const sqlInsertUserRegister = `INSERT INTO controlganadero.usuarios
    (idPais, idGanadero, correo, contraseña, numeroTelefono, tieneFinca, nombreFinca)
    VALUES(?, ?, ?, ?, ?, ?,?);`;
            conector.query(sqlInsertUserRegister, [user.pais, idGanadero, user.correo, user.contrasena, user.telefono, user.tieneFinca, user.nombreFinca], (err, resul) => {

                if (err) reject(err);
                else resolve(resul.insertId)
            });
        });
    })

};
const registerMilk = (milk) => {

    const sqlInsertMilkRegister = `INSERT INTO controlganadero.producciondiaria SET ?`;
    return new Promise((resolve, reject) => {
        conector.query(sqlInsertMilkRegister, milk, (err, result) => {
            if (err) reject(err)
            else resolve(result.insertId)
        });
    })

};


const registerNatality = (natality) => {

    const sqlInsertNatalityRegister = `INSERT INTO controlganadero.natalidad SET ?;`;
    return new Promise((resolve, reject) => {
        conector.query(sqlInsertNatalityRegister, natality, (err, result) => {
            if (err) reject(err)
            else resolve(result.insertId)
        });
    })
};

const registerInsemination = (insemination) => {


    const sqlInsertInseminationRegister = `INSERT INTO controlganadero.inseminacion
    SET ?`;
    return new Promise((resolve, reject) => {
        conector.query(sqlInsertInseminationRegister, insemination, (err, result) => {
            if (err) reject(err)
            else resolve(result.insertId)
        });
    })



};

const registerhealthcontrol = (health) => {

    const sqlInsertHealthRegister = `INSERT INTO controlganadero.controlsalud SET ?`;
    return new Promise((resolve, reject) => {
        conector.query(sqlInsertHealthRegister, health, (err, result) => {
            if (err) reject(err)
            else resolve(result.insertId)
        });
    })

};



module.exports = {
    registerAnimal,
    registerUser,
    registerMilk,
    registerNatality,
    registerInsemination,
    registerhealthcontrol
};