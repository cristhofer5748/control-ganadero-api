const query = require('../dao/querys.varios')


function updateAnimal(animal) {
    return new Promise(async(resolve, reject) => {
        let mr
        try {
            let updateAnimal = await query.updateAnimal(animal)
            if (updateAnimal) {
                mr = { state: 200, data: updateAnimal, message: "SUCCES" }
            } else {
                mr = {
                    state: 204,
                    data: "No se pudo actualiar el animal",
                    message: "ERROR",
                };
            }
            resolve(mr)
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

function deleteAnimal(idAnimal) {
    return new Promise(async(resolve, reject) => {
        let mr
        try {
            let animal = await query.deleteAnimal(idAnimal)

            if (animal > 0) {
                mr = { state: 200, data: "Animal " + idAnimal + " eliminado correctamente", message: "SUCCES" }
            } else {
                mr = {
                    state: 204,
                    data: "No se existe animal para eliminar",
                    message: "ERROR",
                };
            }
            resolve(mr)
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

function searchAnimal(idAnimal) {
    return new Promise(async(resolve, reject) => {
        let mr
        try {
            let animal = await query.searchAnimal(idAnimal)

            if (animal.length > 0) {
                mr = { state: 200, data: animal, message: "SUCCES" }
            } else {
                mr = {
                    state: 204,
                    data: "No existe el animal que desea buscar intente con otro",
                    message: "ERROR",
                };
            }
            resolve(mr)
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

module.exports = { updateAnimal, deleteAnimal, searchAnimal }