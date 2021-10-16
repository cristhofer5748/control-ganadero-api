class AnimalRegister {
    // Modulo exportado

    constructor(idUser, animalWeight, sex, dadNumber, momNumber, animalPhoto, animalNumber, animalName, dateOfBirth, origin, animalRace) {

        this.idUser = idUser;
        this.animalWeight = animalWeight;
        this.sex = sex;
        this.dadNumber = dadNumber;
        this.momNumber = momNumber;
        this.animalPhoto = animalPhoto;
        this.animalNumber = animalNumber;
        this.animalName = animalName;
        this.dateOfBirth = dateOfBirth
        this.origin = origin;
        this.animalRace = animalRace;
    }

}
module.exports = AnimalRegister;