const { conector } = require("../settings/mysql.conector.js");





const updateAnimal = (animal) => {

    const queryUpdateAnimal = `UPDATE controlganadero.registroanimal
    SET  pesoAnimal= ?, numPadre= ?, numMadre= ?, fotoAnimal= ?, numAnimal= ?, nombreAnimal= ?, 
          fechaNacimiento= ?, origen= ?, razaAnimal= ?, enproduccion= ?, etapaVida= ? WHERE idAnimal= ?;`;
    return new Promise((resolve, reject) => {
        conector.query(queryUpdateAnimal, [animal.pesoAnimal, animal.numPadre, animal.numMadre,
            animal.fotoAnimal, animal.numAnimal, animal.nombreAnimal, animal.fechaNacimiento,
            animal.origen, animal.razaAnimal, animal.enproduccion, animal.etapaVida, animal.idAnimal
        ], (error, result) => {

            if (error) reject(error)
            else resolve(result.message)
        })
    })
}

const deleteAnimal = (idAnimal) => {
    const sqlDeleteAnimal = `DELETE FROM controlganadero.registroanimal WHERE idAnimal= ?;`;
    const sqlDeleteInseminacion = `DELETE FROM controlganadero.inseminacion WHERE idAnimal = ?;`;
    const sqlDeleteNatalidad = `DELETE FROM controlganadero.natalidad WHERE idAnimal = ?;`;
    const sqlDeleteControlSalud = `DELETE FROM controlganadero.controlsalud WHERE idAnimal = ?;`;

    return new Promise((resolve, reject) => {
        conector.query(sqlDeleteInseminacion, [idAnimal])
        conector.query(sqlDeleteControlSalud, [idAnimal])
        conector.query(sqlDeleteNatalidad, [idAnimal])
        conector.query(sqlDeleteAnimal, (error, result) => {

            if (error) reject(error)
            else resolve(result.affectedRows)
        })
    })

}

const searchAnimal = (idAnimal) => {
    const sqlSearchAnimal = `select * FROM controlganadero.registroanimal WHERE idAnimal= ?;`;
    return new Promise((resolve, reject) => {

        conector.query(sqlSearchAnimal, [idAnimal], (error, result) => {

            if (error) reject(error)
            else resolve(result)
        })
    })

}

module.exports = { updateAnimal, deleteAnimal, searchAnimal }