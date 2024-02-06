const {TaskModel} = require('../models/task')

module.exports.createTask = async(req, res) => {
    try {
        const task = await TaskModel.create(req.body);
            res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports.getTasks = async(req, res) => {
    try {
        const tasks = await TaskModel.findAll();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports.getTaskById= async(req, res) => {
    try {
        const task = await TaskModel.findByPk(req.params.id);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving task' });
    }
}
module.exports.getUserTasks = async(req, res) => {
    try {
        const tasks = await TaskModel.findAll({where: {userID: req.params.userID}})
        if (tasks) {
            res.status(200).json(tasks);
        } else {
            res.status(404).json({ message: 'No task found for this user ' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving tasks' });
    }
}

module.exports.updateTask = async(req, res) => {
    try {
        const [updated] = await TaskModel.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            res.status(200).json({ message: 'Task updated successfully' });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
} 

module.exports.removeTask = async (req, res) => {
    try {
        const deleted = await TaskModel.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(200).json({ message: 'Task deleted successfully' });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
