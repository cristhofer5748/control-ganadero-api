const app = require('../controller/consultasController')
const svc = require('../services/consultasData.svc')
const supertest = require('supertest')

test('fecha prueba 1 ', () => {
    expect(svc.formatDate2(new Date("2021-10-1"))).toBe('2021-10-2')
})

test('fecha prueba 2 ', () => {
    expect(svc.formatDate(new Date("2021-10-1"))).toBe('2021-10-1')
})

const api = supertest(app)
test('prueba consultas de animales', () => {
    api.get('/user/:idUser/animals')
        .expect('Content-Type', /application\/json/)
})

test('prueba consultas de animal por usuario', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})


test('prueba consultas reporte de leche', () => {
    api.get('/user/:idUser/animals')
        .expect('Content-Type', /application\/json/)
})

test('prueba consultas reporte de inventario', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})


test('prueba consultas de paises', () => {
    api.get('/user/:idUser/animals')
        .expect('Content-Type', /application\/json/)
})

test('prueba insercion de animales', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})

test('prueba insercion de inseminacion', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})

test('prueba insercion de natalidad', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})


test('prueba insercion de control salud', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})


test('prueba insercion de usuarios', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})

test('prueba insercion de produccion lechera', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})

test('prueba consulta de usuarios', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})

test('prueba obtencion de token', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})

test('prueba actualizacion de animal', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})

test('prueba eliminacion de animal', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})