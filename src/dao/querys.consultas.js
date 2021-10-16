const { conector } = require("../settings/mysql.conector.js");




const searchAnimalByUser = (idUser) => {
    const sqlSearchAnimals = `select r.* from controlganadero.usuarios  u 
    inner join controlganadero.registroanimal r  on u.idUsuario = r.idUsuario 
    where u.idUsuario= ?`;

    return new Promise((resolve, reject) => {
        conector.query(sqlSearchAnimals, [idUser], (erro, resul) => {
            if (erro) reject(erro)
            else resolve(resul)
        });
    })
}

const searchInformationAnimaNatality = (idUser, idAnimal, limit) => {

    const sqlSearchNatalityInfo = `select n.* from controlganadero.registroanimal r
    inner join controlganadero.natalidad n on n.idAnimal = r.idAnimal 
    where r.idUsuario =? and r.idAnimal =?
    order by n.idNatalidad desc limit ?; `;

    return new Promise((resolve, reject) => {
        conector.query(sqlSearchNatalityInfo, [idUser, idAnimal, +limit], (err, result) => {

            if (err) reject(err)
            else resolve(result)
        })
    })
}

const searchInformationAnimalInsemination = (idUser, idAnimal, limit) => {

    const sqlInformationAnimalInsemination = `select i.* from controlganadero.registroanimal r
    inner join controlganadero.inseminacion i on i.idAnimal = r.idAnimal 
    where r.idUsuario = ? and r.idAnimal = ? order by i.idInseminacion desc limit ?;`;

    return new Promise((resolve, reject) => {
        conector.query(sqlInformationAnimalInsemination, [idUser, idAnimal, +limit], (erro, result) => {

            if (erro) reject(erro)
            else resolve(result)
        })
    })
}

const searchInformationAnimalControlSalud = (idUser, idAnimal, limit) => {

    const sqlInformationAnimalControlSalud = `select   c.* from controlganadero.registroanimal r
    inner join controlganadero.controlsalud c on r.idAnimal = c.idAnimal  
    where r.idUsuario = ? and r.idAnimal = ?
    order by c.idcontrolSalud desc 
    limit ?;`;

    return new Promise((resolve, reject) => {
        conector.query(sqlInformationAnimalControlSalud, [idUser, idAnimal, +limit], (err, resul) => {
            if (err) reject(err)
            else resolve(resul)
        })
    })
}


const searchProductionByUser = (idUser, initDate, endDate) => {


    return new Promise((resolve, reject) => {
        if (endDate != undefined) {

            const querySearchProduction = `select p.* from controlganadero.usuarios u 
            inner join controlganadero.producciondiaria p on u.idUsuario =p.idUsuario
            where u.idUsuario = ?  and p.fechaProduccion between ? and ?  ;
            `;
            conector.query(querySearchProduction, [idUser, initDate, endDate], (error, result) => {
                if (error) reject(error)
                else resolve(result)
            })
        } else {
            const querySearchProduction2 = `select p.* from controlganadero.usuarios u 
            inner join controlganadero.producciondiaria p on u.idUsuario =p.idUsuario
            where u.idUsuario = ?  and month(p.fechaProduccion)=month(?);`;
            conector.query(querySearchProduction2, [idUser, initDate], (error, result) => {
                if (error) reject(error)
                else resolve(result)
            })
        }

    })
}

const searchPais = () => {
    const sqlPaises = `select * from controlganadero.paises;`;

    return new Promise((resolve, reject) => {
        conector.query(sqlPaises, (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}




module.exports = {
    searchAnimalByUser,
    searchInformationAnimaNatality,
    searchInformationAnimalInsemination,
    searchInformationAnimalControlSalud,
    searchProductionByUser,
    searchPais
}