const swaggerJSDoc = require('swagger-jsdoc')
require('dotenv').config();

const PORT = process.env.NODE_DOCKER_PORT || 5000

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Taskify (Task management app)',
            description: 'APIs of the Taskify, the task management app developped for the intergration test to HappyNess. ',
            version: "1.0.0",
        },
        servers: [
            {
                url: `http://localhost:${PORT}/`,
                description: 'Development server'
            },
        ],
        tags: [
            {
                name: 'User',
                description: 'APIs for managing users',
            },
            {
                name: 'Task',
                description: 'APIs for managing tasks',
            },
        ],
    },
    apis: ['*.js', './api/*.js']
}

module.exports.swaggerSpec = swaggerJSDoc(options)