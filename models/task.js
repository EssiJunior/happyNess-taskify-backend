const { DataTypes } = require('sequelize');
const { db } = require('../utils/db_connection');
const { UserModel } = require('./user');

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
        },
        userId: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
});

// Foreign key constraint 
Task.belongsTo(UserModel, {
    foreignKey: {
        name: 'userId',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    targetKey: 'id'
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