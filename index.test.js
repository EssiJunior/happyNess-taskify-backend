const request = require('supertest');
const {application} = require('./index'); // your Express app

let server = application.listen(4000)

/**
 * This function makes a GET request to the root route of the Express application and 
 * verifies that the response status code is 200.
 */
describe('GET /', function() {
    it('WELCOME MESSAGE: responds with 200 status code', async () => {
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
    it('SIGN IN: responds with 404 status code', async function() {
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
    it('SIGN UP: responds with validation errer', async function() {
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
    it('NEW TASK: responds with 400 status code', async function() {
        const response = await request(application)
            .post('/api/task')
            .send({
                title: "Title of a task",
                userId: 10000000 // Fails because of foreign  key constraint, user don't  exist
            })
        expect(response.status).toBe(400);
        server.close();
    });
});

describe('GET /api/tasks/:userID', function() {
    it('GET TASKS OF A USER: responds with 200 status code', async function() {
        const response = await request(application)
            .get('/api/tasks/1000000')
        expect(response.status).toBe(200);
        server.close();
    });
});

describe('PATCH /api/task/title/:id', function() {
    it('UPDATE TASK TITLE: responds with 404 status code', async function() {
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
    it('UPDATE TASK STATUS: responds with 404 status code', async function() {
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
    it('DELETE TASK: responds with 404 status code', async function() {
        const response = await request(application)
            .delete('/api/task/1000000')
        expect(response.status).toBe(404);
        server.close();
    });
});
// # ------------------------------ ------------------- --------------------------------------