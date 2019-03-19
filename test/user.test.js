const request = require('supertest');

const app = require('../src/app');

test('Deve listar todos os usuarios', () => {
    return request(app).get('/users')
    .then(res => {
        expect(res.status).toBe(200);
        expect(res.body).toHaveLength(2);
        expect(res.body[0]).toHaveProperty('name', 'Israel Araujo');
        expect(res.body[1]).toHaveProperty('name', 'Lais Silva');
    });
});

test('Deve inserir usuário com sucesso', () => {
    return request(app).post('/users')
        .send({name: 'Gabriel Araujo', mail:'gabriel@mail.com'})
        .then(res => {
            expect(res.status).toBe(201);
            expect(res.body.mail).toBe('gabriel@mail.com');
        });
});