const request = require('supertest');
const app = require('./index'); // your Express app

describe('POST /api/signin', () => {
    test('It should respond with a 200 status code', async () => {
        const response = await request(app)
            .post('/api/signin')
            .send({
                "email": "essi@junior.com",
                "password": "1234"
            });
        expect(response.statusCode).toBe(200);
    });
});