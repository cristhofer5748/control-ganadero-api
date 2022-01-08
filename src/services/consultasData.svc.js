const query = require('../dao/querys.consultas');
const ReportAnimal = require('../models/reportAnimal');
const ReportMilk = require('../models/reportMilk')

function searchAnimalByUser(idUser) {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.searchAnimalByUser(idUser)

        try {
            if (result.length > 0) {
                mr = { state: 200, data: result, message: "SUCCES" };
            } else {
                mr = {
                    state: 204,
                    data: "No se pudo encontrar ganado resgitrado con su usuario.",
                    message: "SUCCES",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

function searchInformationAnimal(idUser, idAnimal, limit) {
    return new Promise(async(resolve, reject) => {
        let mr
        try {
            let informationNatality = await query.searchInformationAnimaNatality(idUser, idAnimal, limit)
            let informationInsemination = await query.searchInformationAnimalInsemination(idUser, idAnimal, limit)
            let informationControlSalud = await query.searchInformationAnimalControlSalud(idUser, idAnimal, limit)

            if (informationNatality.length > 0 || informationInsemination.length > 0 || informationControlSalud.length > 0) {
                mr = {
                    state: 200,
                    data: {
                        inseminacion: informationInsemination,
                        natalidad: informationNatality,
                        controlSalud: informationControlSalud
                    },
                    message: "SUCCES"
                };
            } else {
                mr = { state: 204, data: "No hay ningun registro para este animal intente con otro.", message: "SUCCES" };
            }
            resolve(mr)
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

function reportProduction(idUser, initDate, endDate) {
    return new Promise(async(resolve, reject) => {
        let mr
        try {
            let production = await query.searchProductionByUser(idUser, initDate, endDate);

            let animales = await query.searchAnimalByUser(idUser)
            if (production.length > 0) {
                let totalDia = 0
                production.forEach(element => {
                    if (formatDate(element.fechaProduccion) == formatDate2(new Date(initDate))) {
                        totalDia = element.totalProduccion + totalDia
                    }
                });
                let totalAyer = 0
                production.forEach(element => {
                    if (formatDate(element.fechaProduccion) == formatDate(new Date(initDate))) {
                        totalAyer = element.totalProduccion + totalAyer
                    }
                });

                let totalMes = 0
                let consumoCasa = 0
                let consumoTernera = 0
                production.forEach(element => {
                    totalMes = element.totalProduccion + totalMes
                    consumoCasa = element.totalConsumidoCasa + consumoCasa
                    consumoTernera = element.totalConsumidoCrias + consumoTernera
                });


                let primeraQuincena = 0
                let contador = 0
                production.forEach(element => {

                    if (contador < 15) {
                        primeraQuincena = element.totalProduccion + primeraQuincena
                    }
                    contador++
                });

                let enProduccion = 0
                animales.forEach(element => {
                    if (element.enproduccion === 1 && element.etapaVida === 'ADULTO') {
                        enProduccion = 1 + enProduccion
                    }
                });

                let promedio = totalMes / production.length


                mr = {
                    state: 200,
                    data: new ReportMilk(totalDia, totalAyer, totalMes, primeraQuincena,
                        consumoCasa, consumoTernera, enProduccion, promedio),
                    message: "SUCCES"
                };
            } else {
                mr = { state: 204, data: "No hay ingreso de produccion este mes.", message: "SUCCES" };
            }
            resolve(mr)


        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

function reportAnimals(idUser) {
    return new Promise(async(resolve, reject) => {
        let mr
        try {
            let animales = await query.searchAnimalByUser(idUser)
            if (animales.length > 0) {
                let totalAnimales = animales.length
                let totalhembra = animales.filter(element => element.sexo === 'F').length
                let totalMachos = animales.filter(element => element.sexo === 'M').length
                let totalProduccion = animales.filter(element => element.enproduccion === 1).length
                let totalVacas = animales.filter(element => element.sexo === 'F' && element.etapaVida === 'ADULTO').length
                let totalToros = animales.filter(element => element.sexo === 'M' && element.etapaVida === 'ADULTO').length
                let totalForras = animales.filter(element => element.sexo === 'F' &&
                    (element.etapaVida === 'ADULTO' || element.etapaVida === 'NOVILLO') &&
                    element.enproduccion === 0).length
                let totalNovillas = animales.filter(element => element.sexo === 'F' && element.etapaVida === 'NOVILLO').length
                let totalNovillos = animales.filter(element => element.sexo === 'M' && element.etapaVida === 'NOVILLO').length
                let ternerosHembras = animales.filter(element => element.sexo === 'F' && element.etapaVida === 'TERNERO').length
                let terneroMachos = animales.filter(element => element.sexo == 'M' && element.etapaVida === 'TERNERO').length

                mr = {
                    state: 200,
                    data: new ReportAnimal(totalAnimales, totalhembra, totalMachos, totalProduccion, totalVacas,
                        totalToros, totalForras, totalNovillas, totalNovillos, ternerosHembras, terneroMachos
                    ),
                    meessage: 'SUCCES'
                }

            } else {
                mr = { state: 204, data: "No hay ingreso de produccion este mes.", message: "SUCCES" };
            }
            resolve(mr)

        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}

function searchPaises() {
    return new Promise(async(resolve, reject) => {
        var mr;
        var result = await query.searchPais()

        try {
            if (result.length > 0) {
                mr = { state: 200, data: result, message: "SUCCES" };
            } else {
                mr = {
                    state: 204,
                    data: "No se pudo encontrar ningun pais.",
                    message: "SUCCES",
                };
            }
            resolve(mr);
        } catch (error) {
            reject({ state: 500, message: new String(error) });
        }
    })
}



function formatDate(date) {
    let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate())

    return formatted_date;
}

function formatDate2(date) {
    let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1)

    return formatted_date;
}

module.exports = {
    searchAnimalByUser,
    searchInformationAnimal,
    reportProduction,
    reportAnimals,
    searchPaises,
    formatDate2,
    formatDate
}