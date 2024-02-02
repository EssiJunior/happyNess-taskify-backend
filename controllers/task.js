const {TaskModel} = require('../models/task')

module.exports.createTask = async(req, res) => {
    try {
        const task = await TaskModel.create(req.body);
            res.json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports.getTasks = async(req, res) => {
    try {
        const tasks = await TaskModel.findAll();
        res.json(tasks);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports.getTaskById= async(req, res) => {
    try {
        const task = await TaskModel.findByPk(req.params.id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving task' });
    }
}

module.exports.updateTask = async(req, res) => {
    try {
        const [updated] = await TaskModel.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            res.json({ message: 'Task updated successfully' });
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
            res.json({ message: 'Task deleted successfully' });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
