const swaggerJSDoc = require('swagger-jsdoc')

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Taskify (Task management app)',
            description: 'APIs of the Taskify (Task management app) ',
            version: "1.0.0",
        },
        servers: [
            {
                url: 'http://localhost:4000/',
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