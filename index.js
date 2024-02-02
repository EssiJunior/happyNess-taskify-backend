//  =============================== Imports ===============================
// Node modules
const express = require("express")
const cors = require("cors")
require('dotenv').config();
// API routers import

// Swagger UI
const swaggerUi = require('swagger-ui-express');
const { swaggerSpec } = require("./utils/swagger_ui")
// Database connection
const {connect_to_db} = require("./utils/db_connection")
//  =============================== ======== ===============================

const PORT = process.env.PORT || 4000

const app = express();

// Connect to database
connect_to_db()

// Launch server
app.listen(PORT, function() {
    console.log(`[INFO]: Server is running on port ${PORT}`);
});

app.use(cors({
    origin: ["http://localhost:3000" ],
    methods: ["GET", "POST", "DELETE", "PATCH"],
    credentials: true,
}));
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


/**
 * @openapi
 * /:
 *  get:
 *      summary: Welcome message
 *      description: index API documentation
 *      responses:
 *          200:
 *              description: OK!
 */

// Endpoints
app.get('/', function(req, res) {
    res.send('Welcome to taskify, the task management app developped for the intergration test to HappyNess.');
    }
);