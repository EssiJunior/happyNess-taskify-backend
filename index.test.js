const request = require('supertest');
const {application} = require('./index'); // your Express app

let server = application.listen(4000)

/**
 * This function makes a GET request to the root route of the Express application and 
 * verifies that the response status code is 200.
 */
describe('GET /', function() {
    it('responds with 200 status code', async () => {
        const response = await request(application)
        .get('/')
        expect(response.status).toBe(200);
        server.close()
    });
});


// # ------------------------------ Tests for user APIs --------------------------------------

/**
 * This function makes a POST request to the signin route of the Express application and 
 * verifies that the response status code is 200.
 */
describe('POST /api/signin', function() {
    it('responds with 404 status code', async function() {
        const response = await request(application)
            .post('/api/signin')
            .send({ 
                email: "user@email.com", 
                password: 'string' 
            })
        expect(response.status).toBe(404);
        server.close();
    });
});

/**
 * This function makes a POST request to the signin route of the Express application and 
 * verifies that the response status code is 400 because the specified email is already used.
 */
describe('POST /api/signup', function() {
    it('responds with validation errer', async function() {
        const response = await request(application)
            .post('/api/signup')
            .send({
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            })
            expect(response.type).toMatch(/json/);
            expect(response.body).toEqual({ error: "Validation error" });
        server.close();
    });
});
// # ------------------------------ ------------------- --------------------------------------

// # ------------------------------ Tests for task APIs --------------------------------------

describe('POST /api/task', function() {
    it('responds with 201 status code', async function() {
        const response = await request(application)
            .post('/api/task')
            .send({
                title: "Title of a task"
            })
        expect(response.status).toBe(201);
        server.close();
    });
});

describe('PATCH /api/task/title/:id', function() {
    it('responds with 404 status code', async function() {
        const response = await request(application)
            .patch('/api/task/title/1000000')
            .send({
                title: "New title of a task"
            })
        expect(response.status).toBe(404);
        server.close();
    });
});

describe('PATCH /api/task/status/:id', function() {
    it('responds with 404 status code', async function() {
        const response = await request(application)
            .patch('/api/task/status/1000000')
            .send({
                status: "done"
            })
        expect(response.status).toBe(404);
        server.close();
    });
});


describe('DELETE /api/task/:id', () => {
    it('responds with 404 status code', async function() {
        const response = await request(application)
            .delete('/api/task/1000000')
        expect(response.status).toBe(404);
        server.close();
    });
});
// # ------------------------------ ------------------- --------------------------------------