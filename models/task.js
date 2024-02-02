const { DataTypes } = require('sequelize');
const { db } = require('../utils/db_connection');

// Define the table model
const Task = db.define('Task', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('todo', 'done'),
            defaultValue: 'todo' 
        }
});

// Sync the model with the database to create the table
db.sync()
.then(() => {
    console.log('[INFO]: Synced table Task!');
})
.catch(err => {
    console.error('[Error]: Error syncing table Task', err);
});



module.exports.TaskModel = Task