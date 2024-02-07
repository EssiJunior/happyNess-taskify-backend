// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

const { DataTypes } = require('sequelize');
const { db } = require('../utils/db_connection');

// Define your model with fields
const User = db.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    }
});

// Sync the model with the database to create the table
db.sync()
// .then(() => {
//     console.log('[INFO]: Synced table User!');
// })
// .catch(err => {
//     console.error('[Error]: Error syncing table User', err);
// });


module.exports.UserModel = User