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


/**
 * This function makes a POST request to the signin route of the Express application and 
 * verifies that the response status code is 200.
 */
describe('POST /api/signin', function() {
    it('responds with 200 status code', async function() {
        const response = await request(application)
            .post('/api/signin')
            .send({ 
                email: 'essi@junior.com', 
                password: '1234' 
            })
        expect(response.status).toBe(200);
        server.close();
    });
});

/**
 * This function makes a POST request to the signin route of the Express application and 
 * verifies that the response status code is 400 because the specified email is already used.
 */
describe('POST /api/signup', function() {
    it('responds with 400 status code', async function() {
        const response = await request(application)
            .post('/api/signup')
            .send({
                firstName: "string",
                lastName: "string",
                email: "essi@junior.com",
                password: "string"
            })
        expect(response.status).toBe(400);
        server.close();
    });
});
