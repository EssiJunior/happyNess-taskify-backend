// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

const { createTask,getTaskById, getTasks, getUserTasks,updateTask, removeTask } = require('../controllers/task')
const router = require("express").Router();

/**
 * @swagger
 * /api/task:
 *  post:
 *      tags:
 *          - Task
 *      summary: Create a task
 *      description: Creating a task...
 *      requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               userId:
 *                 type: integer
 *                      
 *      responses:
 *          201:
 *              description: Successfully created!
 */
router.post('/task', createTask)

/**
 * @swagger
 * /api/tasks:
 *  get:
 *      tags:
 *          - Task
 *      summary: Display all tasks
 *      description: Tasks visualisation!
 *      responses:
 *          200:
 *              description: Successfully displayed Tasks!
 */
router.get('/tasks', getTasks)

/**
 * @swagger
 * /api/tasks/{userID}:
 *   get:
 *     tags:
 *      - Task
 *     summary: Get a user's tasks
 *     description: Gets a task by userID.
 *     parameters:
 *       - in: path
 *         name: userID
 *         required: true
 *         description: ID of the user to get tasks to get
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tasks successfully found
 *       404:
 *         description: Tasks not found
 */
router.get('/tasks/:userID', getUserTasks)

/**
 * @swagger
 * /api/task/{id}:
 *   get:
 *     tags:
 *      - Task
 *     summary: Get a task
 *     description: Gets a task by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task to get
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task successfully found
 *       404:
 *         description: Task not found
 */
router.get('/task/:id', getTaskById)

/**
 * @swagger
 * /api/task/title/{id}:
 *   patch:
 *     tags:
 *      - Task
 *     summary: Update a task title
 *     description: Update a task title by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task to update title
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       200:
 *         description: Task title successfully updated
 *       404:
 *         description: Task not found
 */
router.patch('/task/title/:id', updateTask)

/**
 * @swagger
 * /api/task/status/{id}:
 *   patch:
 *     tags:
 *      - Task
 *     summary: Update a task status
 *     description: Update a task status by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task to update status
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Task status successfully updated
 *       404:
 *         description: Task not found
 */
router.patch('/task/status/:id', updateTask)


/**
 * @swagger
 * /api/task/{id}:
 *   delete:
 *     tags:
 *      - Task
 *     summary: Delete a task 
 *     description: Deletes a task by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the task to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task deleted successfully
 *       404:
 *         description: Task not found
 */
router.delete('/task/:id', removeTask)

module.exports = router