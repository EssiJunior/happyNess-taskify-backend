const { signIn,signUp,getUsers } = require('../controllers/user')
const router = require("express").Router();

/**
 * @swagger
 * /api/signin:
 *  post:
 *      tags:
 *          - User
 *      summary: Sign in
 *      description: Signing in...
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                      
 *      responses:
 *          200:
 *              description: Successfully signed in!
 */
router.post('/signin', signIn)

/**
 * @swagger
 * /api/signup:
 *  post:
 *      tags:
 *          - User
 *      summary: Sign up
 *      description: Creating a user...
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                      
 *      responses:
 *          201:
 *              description: Successfully created!
 */
router.post('/signup', signUp)

/**
 * @swagger
 * /api/users:
 *  get:
 *      tags:
 *          - User
 *      summary: Display all users
 *      description: Users visualisation!
 *      responses:
 *          200:
 *              description: Successfully displayed Users!
 */
router.get('/users', getUsers)

module.exports = router