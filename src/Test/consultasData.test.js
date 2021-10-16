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
test('prueba consultas', () => {
    api.get('/user/:idUser/animals')
        .expect('Content-Type', /application\/json/)
})

test('prueba consultas 2', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})


test('prueba consultas', () => {
    api.get('/user/:idUser/animals')
        .expect('Content-Type', /application\/json/)
})

test('prueba consultas 2', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})


test('prueba consultas', () => {
    api.get('/user/:idUser/animals')
        .expect('Content-Type', /application\/json/)
})

test('prueba consultas 2', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})

test('prueba consultas 2', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})

test('prueba consultas 2', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})


test('prueba consultas 2', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})


test('prueba consultas 2', () => {
    api.get('/user/:idUser/animal/:idAnimal')
        .expect('Content-Type', /application\/json/)
})