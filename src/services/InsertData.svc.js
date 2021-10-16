const log4js = require("log4js");
const query = require("../dao/querys.insert.js");


function insertAnimal(objectRegister) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.registerAnimal(objectRegister);

        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Animal Registrado", idAnimal: result }], message: "SUCCES" };;
            } else {
                mr = {
                    state: 204,
                    data: "No se pudo insertar en la base de datos",
                    message: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }



    });
}

function insertUser(objectUser) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.registerUser(objectUser);
        console.log
        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Usuario creado", idUsuario: result }], message: "SUCCES" };
            } else {
                mr = {
                    state: 204,
                    data: "No se pudo crear el usurio",
                    message: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    });
}

function insertMilk(objectMilk) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.registerMilk(objectMilk);
        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Resgistro de Leche Creado", idProduccionLeche: result }], message: "SUCCES" };
            } else {
                mr = {
                    state: 204,
                    data: "No se pudo registrar",
                    message: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }



    });
}

function insertNatality(objectNatality) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.registerNatality(objectNatality);
        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Natalidad Registrada", idNatalidad: result }], message: "SUCCES" };
            } else {
                mr = {
                    state: 204,
                    data: "No se pudo registrar la natalidad del animal",
                    message: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }



    });
}

function insertInsemination(objectInsemination) {
    return new Promise(async(resolve, reject) => {
        console.log("Entro al segunda funcion")
        var mr;
        var result = await query.registerInsemination(objectInsemination);

        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Natalidad Registrada", idInseminacion: result }], message: "SUCCES" };
            } else {
                mr = {
                    state: 204,
                    data: "No se pudo registrar la inseminacion del animal",
                    message: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    });
}

function insertHealthControl(objectHealth) {
    return new Promise(async(resolve, reject) => {

        var mr;
        var result = await query.registerhealthcontrol(objectHealth);

        try {
            if (result) {
                mr = { state: 200, data: [{ info: "Control de salud registrado", idControlSalud: result }], message: "SUCCES" };
            } else {
                mr = {
                    state: 204,
                    data: "No se pudo registrar el control de salud del animal",
                    messag: "ERROR",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    });
}




module.exports = { insertAnimal, insertUser, insertMilk, insertNatality, insertInsemination, insertHealthControl };